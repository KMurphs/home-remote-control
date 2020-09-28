import sys
from app.remotes.tv.samsung.remote import Remote


remote = Remote({"ip":"192.168.0.200", "port":"8001"})
remote.connect()
remote.control(f"{sys.argv[1]}")
remote.disconnect()
