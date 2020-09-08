
from flask import Flask, request, make_response, redirect, url_for, render_template
import json
from markupsafe import escape

from app.remotes.tv.samsung.remote import Remote
import app.model as model

app = Flask(__name__, static_url_path="", static_folder="dist/ui")

# model.init(app)
model.init(app)
remotes = {}






def handle_remote(id: str, key: str, delay: float):
  global remotes

  if not id in remotes.keys():
    remotes[id] = Remote({})
  
  remotes[id].connect()
  # print(remotes[id].connection)
  remotes[id].control(key, delay)
  # remotes[id].disconnect()


@app.route('/api/v1/tv/samsung/events/new', methods=['POST'])
def post_command():  
  req_data = json.loads(request.data)
  res_data = {}
  
  handle_remote("tv::samsung", f"{req_data['key']}", req_data['delay'])
  
  res_data['result'] = 'success'

  return make_response(res_data, 200, {"Content-Type":"application/json"})






@app.route('/api/v1/devices/new', methods=['POST'])
def register_device():  
  req_data = json.loads(request.data)
  try: return make_response(model.register_device(req_data), 200, {"Content-Type":"application/json"})
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










@app.route('/')
def home():
    return app.send_static_file('index.html')
    # return 'Hello, World!'


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return 'You want path: %s' % path