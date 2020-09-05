import sys
from app.remotes.tv.samsung.remote import Remote


remote = Remote({})
remote.connect()
remote.control(f"{sys.argv[1]}")
remote.disconnect()
