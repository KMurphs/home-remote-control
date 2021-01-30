# pip install samsungctl
# pip install websocket-client

import samsungctl
import time

config = {
	"name": "samsungctl",
	"description": "PC",
	"id": "",
	"host": "192.168.0.190",
	"port": 8001,
	"method": "websocket",
	"timeout": 1,
}

with samsungctl.Remote(config) as remote:
	remote.control("KEY_SOURCE")
	#time.sleep(0.5)
	#remote.control("KEY_DOWN")
	#time.sleep(0.5)
	
	#remote.control("KEY_HDMI")
	time.sleep(0.5)