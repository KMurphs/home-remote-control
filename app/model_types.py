import datetime, time


class DeviceConfig:
  def __init__(self, dataObj):
    try:
      self._class = dataObj["class"].lower()
      self.family = dataObj["family"].lower()

      self.ip = "0.0.0.0" if "ip" not in dataObj.keys() else dataObj["ip"].lower()
      self.port = 0 if "port" not in dataObj.keys() else dataObj["port"]


      assert(self._class != None and self._class != "")
      assert(self.family != None and self.family != "")

    except:
      raise Exception("Provided Configuration Data is not valid")
  
  def __str__(self):
    return f"{self._class}:{self.family} (@{self.ip}:{self.port})"

  # def __dict__(self):
    # print(self.__dict__)
    # return self.__dict__
    # res = vars(self)
    # res["class"] = res._class
    # del res["_class"]
    # return res
  def toDict(self):
    res = vars(self)
    res = dict(res)
    res["class"] = res["_class"]
    del res["_class"]
    return res

class DeviceDetails:
  def __init__(self, dataObj):
    try:
      self.id = dataObj["id"] if ("id" in dataObj.keys()) else ""
      self.ip = dataObj["ip"] if ("ip" in dataObj.keys()) else "0.0.0.0"
      self.os = dataObj["os"] if ("os" in dataObj.keys()) else ""
      self.uri = dataObj["uri"] if ("uri" in dataObj.keys()) else ""
      self.mac = dataObj["mac"] if ("mac" in dataObj.keys()) else ":::::"
      self.type = dataObj["type"] if ("type" in dataObj.keys()) else ""
      self.name = dataObj["name"] if ("name" in dataObj.keys()) else ""
      self.modelName = dataObj["modelName"] if ("modelName" in dataObj.keys()) else ""
    except:
      raise Exception("Provided Remote Details are not valid")
  
  @classmethod
  def fromPingResponse(self, ping_res):
    keys_of_interest = {
      "id": ["device", "id"],
      "type": ["device", "type"],
      "modelName": ["device", "modelName"],
      "name": ["device", "name"],
      "mac": ["device", "wifiMac"],
      "os": ["device", "OS"],
      "uri": ["uri"],
      "ip": ["device", "ip"]
    }

    dataObj = { }
    for key in keys_of_interest.keys():
      tmp = ping_res
      for path_item in keys_of_interest[key]:
        tmp = tmp[path_item]
      dataObj[key] = tmp

    return self(dataObj)

  def __str__(self):
    return f"{self.name} ({self.modelName}) (@{self.uri})"

  # def __dict__(self):
    # print(self.__dict__)
    # return self.__dict__
    # return vars(self)
  def toDict(self):
    # print(self.__dict__)
    # return self.__dict__
    return vars(self)


class Device:
  def __init__(self, devConfig: DeviceConfig, devDetails: DeviceDetails, extraData):
    try:
      assert(devConfig.ip != None and devConfig.ip != "")
      assert(devConfig.port != None and devConfig.port != 0)
      assert(devDetails.id != None and devDetails.id != "")
      assert(devDetails.modelName != None and devDetails.modelName != "")
      
      self.id = devDetails.id
      assert(self.id != None and self.id != "")

      self.details = devDetails.toDict()
      self.configuration = devConfig.toDict()


      self.created = extraData["created"] if ("created" in extraData.keys() and extraData["created"] > 0) else int(time.time() * 1000)
      self.created_by = "None" if "user" not in extraData.keys() else extraData["user"].lower()
      self.friendly_name = "" if "friendly_name" not in extraData.keys() else extraData["friendly_name"]

      if "roles" in extraData.keys():
        self.roles = [role.lower() for role in extraData["roles"]]
      else:
        self.roles = ["reader"]
      
    except:
      raise Exception("Provided Device is not a valid Device")

  @classmethod
  def fromObject(self, dataObj):

    assert("details" in dataObj.keys() and dataObj["details"] != None)
    assert("configuration" in dataObj.keys() and dataObj["configuration"] != None)
    details = DeviceDetails(dataObj["details"])
    configuration = DeviceConfig(dataObj["configuration"])
    

    return self(configuration, details, dataObj)


  def __str__(self):
    return f"{self.id} ({self.details['name']}) (created at {self.created})"

  # def __dict__(self):
    # print(self.__dict__)
    # return self.__dict__
    # return vars(self)
  def toDict(self):
    return vars(self)