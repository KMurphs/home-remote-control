import datetime, time


class Device:
  def __init__(self, dataObj):
    try:
      self.type = dataObj["type"].lower()
      self.model = dataObj["model"].lower()
      self.created = dataObj["created"] if ("created" in dataObj.keys() and dataObj["created"] > 0) else int(time.time() * 1000)
      
      self.created_by = "None" if "user" not in dataObj.keys() else dataObj["user"].lower()
      self.ip = "0.0.0.0" if "ip" not in dataObj.keys() else dataObj["ip"].lower()
      self.port = 0 if "port" not in dataObj.keys() else dataObj["port"]
      self.friendly_name = "" if "friendly_name" not in dataObj.keys() else dataObj["friendly_name"]


      if "roles" in dataObj.keys():
        self.roles = [role.lower() for role in dataObj["roles"]]
      else:
        self.roles = ["reader"]


      assert(self.type != None and self.type != "")
      assert(self.model != None and self.model != "")

      self.id = f"{self.type}::{self.model}::{self.created}"
    except:
      raise Exception("Provided Device is not a valid Device")


  def toDict(self):
    # print(self.__dict__)
    # return self.__dict__
    return vars(self)