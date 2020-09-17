

function DeviceWebsocket(deviceIP = "192.168.0.200", devicePort = 8001, clientName="samsung"){
	if(!deviceIP) throw new Error("Device Object needs a valid IP Address")
	if(!devicePort) throw new Error("Device Object needs a valid Port")
	this.deviceIP = deviceIP;
	this.devicePort = devicePort;
	this.clientName = clientName;
	this.ws = null;
	console.warn(deviceIP, devicePort, clientName)
}
DeviceWebsocket.prototype.version = "1.0"
DeviceWebsocket.prototype.connect = function(onError = null, onMessage = null, onOpen = null, onClose = null,){

	this.ws = new WebSocket(`ws://${this.deviceIP}:${this.devicePort}/api/v2/channels/samsung.remote.control?name=${btoa(this.clientName)}`)
	
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
















const sendMessage = (msg) => {
	console.warn(msg)
	
	const serverIP = "192.168.0.200"
	const serverPort = "8001"
	const name = "samsung"
	// const "ws://{}:{}/api/v2/channels/samsung.remote.control?name={}"
	const key = "KEY_VOLDOWN"
	return new Promise((resolve, reject) => {
		var ws = new WebSocket(`ws://${serverIP}:${serverPort}/api/v2/channels/samsung.remote.control?name=${btoa(name)}`)
		
		
		payload = JSON.stringify({
			"method": "ms.remote.control",
			"params": {
				"Cmd": "Click",
				"DataOfCmd": key,
				"Option": "false",
				"TypeOfRemote": "SendRemoteKey"
			}
		})
		console.log(payload)

		ws.onopen = function(evt) {
			console.log("Websocket Opened")
			ws.send(payload)
			// if(!waitForReply) resolve({"result": "success"})
		};
    
		ws.onmessage = function(evt) {
			console.log("Websocket Has New Message")
			resolve({"result": "success", "reply": evt.data})
		};
		ws.onclose = function(evt) {
			console.log("Websocket Closed")
			resolve({"result": "success", "event": "closed"})
		}
		ws.onerror = function(evt) {
			console.log("Websocket Has Error")
			reject({"result": "fail", "error": evt.data})
		}
	})
	
}


