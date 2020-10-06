// https://stackoverflow.com/questions/61137232/websockets-closing-unexpectedly
// https://stackoverflow.com/questions/22431751/websocket-how-to-automatically-reconnect-after-it-dies

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
DeviceWebsocket.prototype.connect = function(onOpenCb, onCloseCb, onErrorCb){//(onError, onMessage, onOpen, onClose){

	
	
	return new Promise((function(resolve, reject){

		this.ws = new WebSocket( (this.useWebsocketSecure ? 'wss' : 'ws') + "://" + this.deviceIP + ":" + this.devicePort + "/api/v2/channels/samsung.remote.control?name=" + btoa(this.clientName) );
		
		this.ws.onopen = function(evt) {
			console.log('Socket is established with remote device');
			if(onOpenCb) onOpenCb();
			resolve();
			// if(onOpen) onOpen(evt.data);
		};
		this.ws.onmessage = function(evt) {
			console.log('Remote Device sent: ', evt);
			// if(onMessage) onMessage(evt.data);
		};  
		this.ws.onclose = (function(evt) {
			
			console.log('Socket is closed. Reconnect will be attempted in 1 second.', evt.reason);
			if(onCloseCb) onCloseCb();
			
			setTimeout((function() {
				this.ws.connect(onOpenCb, onCloseCb, onErrorCb);
			}).bind(this), 1000);
		}).bind(this)


		this.ws.onerror = (function(evt) {
			if(onErrorCb) onErrorCb(evt);
			this.ws.close();
		}).bind(this)


	}).bind(this))
	

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
