
from flask import Flask, request, make_response, redirect, url_for, render_template
import json
from markupsafe import escape

from app.remotes.tv.samsung.remote import Remote
import app.model as model
import os

app = Flask(__name__, static_url_path="", static_folder="dist/ui")

# model.init(app)
model.init(app)
remotes = {}






def handle_remote(id: str, key: str, delay: float):
  global remotes

  assert(id != None and id != "")

  try:
    if not id in remotes.keys():
      dev = model.find_device_by_id(id)
      dev = dev["device"]
      remotes[id] = Remote({
        "ip": dev["configuration"]["ip"],
        "port": dev["configuration"]["port"]
      })

    assert(remotes[id].connect() == 0)
    assert(remotes[id].control(key, delay) == 0)
    return 0
    # remotes[id].disconnect()
  except Exception as err: 
    app.logger.error(err)
    return make_response({'result': "Remote Control Failed"}, 500, {"Content-Type":"application/json"})

@app.route('/api/v1/tv/samsung/events/new', methods=['POST'])
def post_command():  
  req_data = json.loads(request.data)
  res_data = {}

  try:
    assert('id' in req_data.keys() and req_data['id'] != None and req_data['id'] != '')
    result = handle_remote(req_data['id'], f"{req_data['key']}", req_data['delay'])
    res_data['result'] = 'success' if result == 0 else 'failed'
    return make_response(res_data, 200, {"Content-Type":"application/json"})
  except Exception as err: 
    app.logger.error(err)
    return make_response({'result': "Remote Control Failed"}, 500, {"Content-Type":"application/json"})









@app.route('/api/v1/devices/new', methods=['POST'])
def register_device():  
  req_data = json.loads(request.data)
  try: 
    assert("ip" in req_data.keys() and req_data["ip"] != None and req_data["ip"] != "")
    # assert("port" in req_data.keys() and req_data.port != None and req_data.port != "")

    ping = Remote({
      "ip": req_data["ip"],
      "port": req_data["port"]
    }).ping()

    dev = model.build_device(req_data, ping)

    return make_response(model.register_device(dev), 200, {"Content-Type":"application/json"})
  except Exception as err: 
    app.logger.error(err)
    return make_response({'result': "Registration Failed"}, 500, {"Content-Type":"application/json"})








@app.route('/api/v1/devices', methods=['PUT'])
def update_device():  
  req_data = json.loads(request.data)
  try: return make_response(model.update_device(req_data), 200, {"Content-Type":"application/json"})
  except Exception as err: 
    app.logger.error(err)
    return make_response({'result': "Update Failed"}, 500, {"Content-Type":"application/json"})

@app.route('/api/v1/devices/<string:deviceID>', methods=['GET'])
def find_device_by_id(deviceID):  
  try: return make_response(model.find_device_by_id(escape(deviceID)), 200, {"Content-Type":"application/json"})
  except Exception as err: 
    app.logger.error(err)
    return make_response({'result': "Failed To Retrieve Device"}, 500, {"Content-Type":"application/json"})

@app.route('/api/v1/devices/<string:deviceID>', methods=['DELETE'])
def delete_device_by_id(deviceID):  
  try: return make_response(model.delete_device_by_id(escape(deviceID)), 200, {"Content-Type":"application/json"})
  except Exception as err: 
    app.logger.error(err)
    return make_response({'result': "Failed To Delete Device"}, 500, {"Content-Type":"application/json"})

@app.route('/api/v1/devices/', methods=['GET'])
def find_all_devices():  
  try: return make_response(model.find_all_devices(), 200, {"Content-Type":"application/json"})
  except Exception as err: 
    app.logger.error(err)
    return make_response({'result': "Failed To Retrieve Device"}, 500, {"Content-Type":"application/json"})





@app.route('/api/v1/class/<string:deviceClass>/families', methods=['GET'])
def find_all_families(deviceClass):  
  try: 
    remote_dir = os.path.join(os.getcwd(), "remotes")
    remote_dir = os.path.join(remote_dir, escape(deviceClass))
    dirs = [dir for dir in os.listdir(remote_dir) if os.path.isdir(os.path.join(remote_dir, dir)) and dir[0:2] != "__"]
    return make_response({"classFamilies": dirs}, 200, {"Content-Type":"application/json"})
  except Exception as err: 
    app.logger.error(err)
    return make_response({'result': "Failed To Retrieve Device Classes"}, 500, {"Content-Type":"application/json"})


@app.route('/api/v1/classes/', methods=['GET'])
def find_all_classes():  
  try: 
    remote_dir = os.path.join(os.getcwd(), "remotes")
    dirs = [dir for dir in os.listdir(remote_dir) if os.path.isdir(os.path.join(remote_dir, dir)) and dir[0] != "_"]
    return make_response({"deviceClasses": dirs}, 200, {"Content-Type":"application/json"})
  except Exception as err: 
    app.logger.error(err)
    return make_response({'result': "Failed To Retrieve Device Classes"}, 500, {"Content-Type":"application/json"})


@app.route('/api/v1/class/<string:deviceClass>/roles', methods=['GET'])
def find_all_roles(deviceClass):  
  try: 
    roles_common = ["admin", "reader", "user", "offline_user"]
    roles = {
      "tv": ["tv_user", "tv_reader"]
    }
    assert(deviceClass in roles.keys())
    return make_response({"classRoles": roles_common + roles[deviceClass]}, 200, {"Content-Type":"application/json"})
  except Exception as err: 
    app.logger.error(err)
    return make_response({'result': "Device Class Not Supported"}, 500, {"Content-Type":"application/json"})







@app.route('/')
def home():
    return app.send_static_file('index.html')
    # return 'Hello, World!'


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return 'You want path: %s' % path