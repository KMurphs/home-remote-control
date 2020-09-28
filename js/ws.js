

function DeviceWebsocket(deviceIP = "192.168.0.190", devicePort = 8001, clientName = "samsung", useWebsocketSecure = false){
	if(!deviceIP) throw new Error("Device Object needs a valid IP Address")
	if(!devicePort) throw new Error("Device Object needs a valid Port")
	this.deviceIP = deviceIP;
	this.devicePort = devicePort;
	this.clientName = clientName;
	this.useWebsocketSecure = useWebsocketSecure;
	this.ws = null;
	console.warn(deviceIP, devicePort, clientName)
}
DeviceWebsocket.prototype.version = "1.0"
DeviceWebsocket.prototype.connect = function(onError = null, onMessage = null, onOpen = null, onClose = null){

	this.ws = new WebSocket(`${this.useWebsocketSecure ? 'wss' : 'ws'}://${this.deviceIP}:${this.devicePort}/api/v2/channels/samsung.remote.control?name=${btoa(this.clientName)}`)
	
	this.ws.onopen = function(evt) {
		if(onOpen) onOpen(evt.data)
	};
	this.ws.onmessage = function(evt) {
		if(onMessage) onMessage(evt.data)
	};  
	this.ws.onclose = function(evt) {
		if(onClose) onClose(evt.data)	
	}
	this.ws.onerror = function(evt) {
		if(onError) onError(evt.data)
		else throw new Error(evt.data)
	}
}
DeviceWebsocket.prototype.applyKey = function(key = "KEY_VOLDOWN"){
	payload = JSON.stringify({
		"method": "ms.remote.control",
		"params": {
			"Cmd": "Click",
			"DataOfCmd": key,
			"Option": "false",
			"TypeOfRemote": "SendRemoteKey"
		}
	})
	this.ws.send(payload)
}















