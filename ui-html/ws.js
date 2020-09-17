

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


