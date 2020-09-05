import os
from ...iremote import IRemote
from ....configfile import ConfigFileUtil

default_config = {
	"name": "samsung",
	"description": "home-server",
	"id": "home-server-01",
	"tv-port": 8001,
	"tv-ip": "192.168.0.200",
	"connection-sec-timeout": 0,
	"post-command-ms-timeout": 200
}

class Remote(IRemote):
  def __init__(self, config: dict):
    """Initialize the remote object with relevant configuration"""
    
    config_file = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'configs\\samsung.conf')
    self.config_obj = ConfigFileUtil(config_file, default_config)

    for key in config.keys():
      self.config_obj.data[key] = config[key]
    self.config_obj.save_data()




  def control(self, key: str, post_timeout: int) -> bool:
    """Sends a Command and optionally wait for 'post_timeout'ms """
    pass