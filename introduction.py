
import time
import socket
import base64

src     = '192.168.0.110'       # ip of remote
mac     = 'E4-A4-71-7B-E3-6E' # mac of remote
remote  = 'python remote'     # remote name
dst     = '192.168.0.190'       # ip of tv
app     = 'python'            # iphone..iapp.samsung
tv      = '[TV] K-TV'          # iphone.LE32C650.iapp.samsung
port    = 8001                 # tv port 55000 or 8001

def push(key):
  new = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
  new.connect((dst, port))



  msg = f"{chr(0x64)}{chr(0x00)}"
  msg = f"{msg}{chr(len(base64.b64encode(src.encode('ascii'))))}{chr(0x00)}{base64.b64encode(src.encode('ascii'))}"
  msg = f"{msg}{chr(len(base64.b64encode(mac.encode('ascii'))))}{chr(0x00)}{base64.b64encode(mac.encode('ascii'))}"
  msg = f"{msg}{chr(len(base64.b64encode(remote.encode('ascii'))))}{chr(0x00)}{base64.b64encode(remote.encode('ascii'))}"

  pkt = f"{chr(0x00)}"
  pkt = f"{pkt}{chr(len(app))}{chr(0x00)}{app}"
  pkt = f"{pkt}{chr(len(msg))}{chr(0x00)}{msg}"

  new.send(pkt.encode('ascii'))


  
  msg = f"{chr(0x00)}{chr(0x00)}{chr(0x00)}"
  msg = f"{msg}{chr(len(base64.b64encode(key.encode('ascii'))))}{chr(0x00)}{base64.b64encode(key.encode('ascii'))}"

  pkt = f"{chr(0x00)}"
  pkt = f"{pkt}{chr(len(tv))}{chr(0x00)}{tv}"
  pkt = f"{pkt}{chr(len(msg))}{chr(0x00)}{msg}"
  
  new.send(pkt.encode('ascii'))
  
  
  new.close()
  time.sleep(0.1)
  
#while True:
if True:
  # switch to tv
  print("Pushing KEY_TV")
  push("KEY_TV")
  
  # switch to channel one
  print("Pushing KEY_1")
  push("KEY_1")
  push("KEY_ENTER")
  
  time.sleep(5)
  
  # switch to channel 15
  print("Pushing KEY_1 and KEY_5")
  push("KEY_1")
  push("KEY_5")
  push("KEY_ENTER")
  
  time.sleep(5)
  
  # switch to HDMI
  print("Pushing KEY_HDMI")
  push("KEY_HDMI")
  
  time.sleep(5)
  
  
  