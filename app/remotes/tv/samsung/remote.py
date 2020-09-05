import os
import websocket
import base64
import json
import time
from ...iremote import IRemote
from ....configfile import ConfigFileUtil



URL_FORMAT = "ws://{}:{}/api/v2/channels/samsung.remote.control?name={}"
default_config = {
	"name": "samsung",
	"description": "home-server",
	"id": "home-server-01",
	"tv_port": 8001,
	"tv_ip": "192.168.0.200",
	"connection_ms_timeout": 500,
	"post_command_ms_timeout": 500
}



class Remote(IRemote):
  
  

  def __init__(self, config: dict):
    """Initialize the remote object with relevant configuration"""
    
    config_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'configs\\samsung.conf')
    self.config_obj = ConfigFileUtil(config_file, default_config)

    for key in config.keys():
      self.config_obj.data[key] = config[key]
    self.config_obj.save_data()

    self.connection = None


  def connect(self):
    """"Establish Connection to Device"""

    if not self.connection:
      connection_timeout = None if(self.config_obj.data["connection_ms_timeout"] == 0) else self.config_obj.data["connection_ms_timeout"]
      connection_url = URL_FORMAT.format(
        self.config_obj.data["tv_ip"], 
        self.config_obj.data["tv_port"], 
        self._serialize_string(self.config_obj.data["name"])
      )

      self.connection = websocket.create_connection(connection_url, connection_timeout)
      res = self.connection.recv()
      res = json.loads(res)
      print(res)

      if res["event"] != "ms.channel.connect":
        raise Exception("Connection failed with unknown cause")
      else:
        print("Connected to TV")
      


  def disconnect(self):
    """"Close Connection to Device"""

    if self.connection:
      self.connection.close()
      self.connection = None
    

  def control(self, key: str, post_command_timeout = None) -> bool:
    """Sends a Command and optionally wait for 'post_timeout'ms """
    if not self.connection:
      raise Exception("Connection Closed")

    payload = json.dumps({
      "method": "ms.remote.control",
      "params": {
        "Cmd": "Click",
        "DataOfCmd": key,
        "Option": "false",
        "TypeOfRemote": "SendRemoteKey"
      }
    })

    print(f"Sending control command: {key}")
    self.connection.send(payload)
    time.sleep(0.2)
    if(post_command_timeout == None):
      time.sleep(self.config_obj.data['post_command_ms_timeout'] / 1000)
    else:
      time.sleep(post_command_timeout)
     

  @staticmethod
  def _serialize_string(string):
    if isinstance(string, str):
      string = str.encode(string)

    return base64.b64encode(string).decode("utf-8")