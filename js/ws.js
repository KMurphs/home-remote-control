

function DeviceWebsocket(deviceIP, devicePort, clientName, useWebsocketSecure){
	if(!deviceIP) deviceIP = "192.168.0.190";
	if(!devicePort) devicePort = 8001;
	if(!clientName) clientName = "samsung";
	if(!useWebsocketSecure) useWebsocketSecure = false;
	this.deviceIP = deviceIP;
	this.devicePort = devicePort;
	this.clientName = clientName;
	this.useWebsocketSecure = useWebsocketSecure;
	this.ws = null;
	console.info(this.deviceIP, this.devicePort, this.clientName);
}
DeviceWebsocket.prototype.version = "1.0";
DeviceWebsocket.prototype.connect = function(onError, onMessage, onOpen, onClose){

	if(!onError) onError = null;
	if(!onMessage) onMessage = null;
	if(!onOpen) onOpen = null;
	if(!onClose) onClose = null;
	
	this.ws = new WebSocket( (this.useWebsocketSecure ? 'wss' : 'ws') + "://" + this.deviceIP + ":" + this.devicePort + "/api/v2/channels/samsung.remote.control?name=" + btoa(this.clientName) );
		
	this.ws.onopen = function(evt) {
		if(onOpen) onOpen(evt.data);
	};
	this.ws.onmessage = function(evt) {
		if(onMessage) onMessage(evt.data);
	};  
	this.ws.onclose = function(evt) {
		if(onClose) onClose(evt.data);
	}
	this.ws.onerror = function(evt) {
		if(onError) onError(evt.data);
		else throw new Error(evt.data);
	}
}
DeviceWebsocket.prototype.reconnect = function(){
	this.ws = new WebSocket( (this.useWebsocketSecure ? 'wss' : 'ws') + "://" + this.deviceIP + ":" + this.devicePort + "/api/v2/channels/samsung.remote.control?name=" + btoa(this.clientName) );
}
DeviceWebsocket.prototype.applyKey = function(key){
	if(!key) key = "KEY_VOLDOWN";
	payload = JSON.stringify({
		"method": "ms.remote.control",
		"params": {
			"Cmd": "Click",
			"DataOfCmd": key,
			"Option": "false",
			"TypeOfRemote": "SendRemoteKey"
		}
	});
	this.ws.send(payload);
}















