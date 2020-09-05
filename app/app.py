import json

from flask import Flask, request, make_response, redirect, url_for, render_template
from app.remotes.tv.samsung.remote import Remote


app = Flask(__name__)

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