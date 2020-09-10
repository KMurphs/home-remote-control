
export type TTelevision = {
  "created": number, 
  "created_by": string, 
  "friendly_name": string, 
  "id": string, 
  "roles": string[], 
  "configuration": TTelevisionConfig
  "details": TTelevisionDetails
}
export type TTelevisionConfig = {
  "class": string, 
  "family": string, 
  "ip": string, 
  "port": number
}
export type TTelevisionDetails = {
  "id": string, 
  "ip": string, 
  "mac": string, 
  "modelName": string, 
  "name": string,  
  "os": string, 
  "type": string, 
  "uri": string
}


export function toTTelevisionConfig(dataObj: any): TTelevisionConfig{
  if(!dataObj) throw "Data Object cannot be converted to TTelevisionConfig"
  return {
    ip: dataObj.ip || "",
    port: dataObj.port || 0,
    class:  dataObj.class || "",
    family:  dataObj.family || ""
  }
}
export function toTTelevisionDetails(dataObj: any): TTelevisionDetails{
  if(!dataObj) throw "Data Object cannot be converted to TTelevisionDetails"
  return {
    ip: dataObj.ip || "",
    os: dataObj.os || "",
    id: dataObj.id || "",
    mac: dataObj.mac || "",
    uri: dataObj.uri || "",
    type: dataObj.type || "",
    name: dataObj.name || "",
    modelName:  dataObj.modelName || ""
  }
}
export function toTTelevision(dataObj: any): TTelevision{
  if(!dataObj) throw "Data Object cannot be converted to TTelevision"
  return {
    id: dataObj.id || "",
    created:  dataObj.created || "",
    created_by:  dataObj.created_by || "",
    friendly_name:  dataObj.friendly_name || "",
    roles: dataObj.roles.map((role:string)=>role.toLowerCase())|| [],
    configuration: toTTelevisionConfig(dataObj.configuration || {}),
    details: toTTelevisionDetails(dataObj.details || {})
  }
}
