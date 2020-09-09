
export type TTelevision = {
  "created": number, 
  "created_by": string, 
  "friendly_name": string, 
  "id": string, 
  "ip": string, 
  "model": string, 
  "port": number, 
  "roles": string[], 
  "type": string
}
export function toTTelevision(dataObj: any): TTelevision{
  if(!dataObj) throw "Data Object cannot be converted to TTelevision"
  return {
    ip: dataObj.ip || "",
    id: dataObj.id || "",
    type: dataObj.type || "",
    port: dataObj.port || 0,
    model:  dataObj.model || "",
    created:  dataObj.created || "",
    created_by:  dataObj.created_by || "",
    friendly_name:  dataObj.friendly_name || "",
    roles: [...dataObj.roles] || []
  }
}