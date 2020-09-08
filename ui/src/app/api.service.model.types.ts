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
  let dev: TTelevision;

  return dev
}