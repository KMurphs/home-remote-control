from flask_pymongo import PyMongo
from app.model_types import Device, DeviceConfig, DeviceDetails

# https://realpython.com/operator-function-overloading/

mongoObj = None
app = None

def init(_app):
  global mongoObj, app
  app = _app
  app.logger.info("Initializing Database..")

  # connection_string = "mongodb+srv://kmurphs:%s@butane-detector-cyvjy.mongodb.net/test?retryWrites=true&w=majority"%(os.environ.get('DBPASS'))
  connection_string = "mongodb://localhost:27017/home-remote"
  app.config["MONGO_URI"] = connection_string
  mongoObj = PyMongo(app)

  app.logger.info("Database Initialized..")


def extract_device_config(deviceObj):
  app.logger.info("Processing Device Configuration Data..")
  deviceObj = DeviceConfig(deviceObj)
  app.logger.debug(f"Configuration for device {str(deviceObj)}  Processed")
  return deviceObj

def extract_device_details(ping_response):
  app.logger.info("Processing Device Details..")
  deviceObj = DeviceDetails.fromPingResponse(ping_response)
  app.logger.debug(f"Details for device {str(deviceObj)}  Processed")
  return deviceObj

def build_device(registration_data, ping_response):
  app.logger.info("Building Device..")
  devConfig = extract_device_config(registration_data)
  devDetails = extract_device_details(ping_response)
  deviceObj = Device(devConfig, devDetails, registration_data)
  app.logger.debug(f"Device {str(deviceObj)} Built")
  return deviceObj

def register_device(deviceObj):
  app.logger.info("Registering Device..")
  newDev = mongoObj.db.devices.insert_one(deviceObj.toDict())
  app.logger.debug("Registered Device with id: " + str(newDev.inserted_id))
  return {"registered" : str(newDev.inserted_id)}

def update_device(device: Device):
  
  if "device" in device.keys():
    device = device["device"]
  device = Device.fromObject(device)
  device = device.toDict()

  id = device["id"]
  del device["id"]
  del device["created"]
  del device["type"]
  del device["model"]


  app.logger.info("Updating Device with id: " + id)
  updateDoc = mongoObj.db.devices.update_one({'id': id}, {"$set": device})
  # print(updateDoc.upserted_id)
  # print(updateDoc.matched_count)
  # print(updateDoc.modified_count)
  # print(updateDoc.raw_result)
  # print(updateDoc.acknowledged)
  app.logger.debug("Entries Found: " + str(updateDoc.matched_count) + " - Entries Updated: " + str(updateDoc.modified_count))
  return { "updated" : str(updateDoc.modified_count) }


def find_device_by_id(id: str):
  app.logger.info("Searching Device with id: " + id)
  item = mongoObj.db.devices.find_one({'id': id})
  app.logger.debug("Device with id: '" + id + "' was found")
  del item["_id"]
  return {"device" : item}


def find_all_devices():
  app.logger.info("Retrieving all devices")
  items = mongoObj.db.devices.find()
  devs = []
  for item in items:
    del item["_id"]
    devs.append(item)
  return {"devices" : devs}

def delete_device_by_id(id: str):
  app.logger.info("Deleting Device with id: " + id)
  item = mongoObj.db.devices.delete_one({'id': id})
  app.logger.debug("Deleted'" + str(item.deleted_count) + "' entries")
  return {"deleted" : str(item.deleted_count) }