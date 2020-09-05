"""Configuration File Utility to read and write json configuration data"""

import os
import json

__title__ = "ConfigFileUtil"
__version__ = "0.1"
__url__ = "https://github.com/KMurphs/home-remote-control.git"
__author__ = "Stephan K"
__author_email__ = "kibongesp@gmail.com"
__license__ = "MIT"



class ConfigFileUtil():
  def __init__(self, file_path: str, default_config: dict):
    """Initializes the Utility"""

    self.file_path = file_path
    self.default_config = default_config
    self.data = default_config

    # create file if needed
    if not (os.path.isfile(self.file_path)):
      self.save_data()
    
    # set current data to file content
    self.data = self.read_data()

    # if file content has missing keys, update file
    doUpdateFile = False
    for key in self.default_config.keys():
      if not self.data[key]:
        doUpdateFile = True
        self.data[key] = self.default_config[key]
    if doUpdateFile:
      self.save_data()



  def get_data(self) -> dict:
    return self.data
  def get_defaults(self) -> dict:
    return self.default_config



  def read_data(self) -> dict:
    with open(self.file_path) as infile:
      self.data = json.load(infile)
    return self.data

  def save_data(self):
    with open(self.file_path, 'w') as outfile:
      json.dump(self.data, outfile)