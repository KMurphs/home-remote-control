from .remote import Remote


def main():
  remote = Remote({})
  remote.connect()
  remote.control("KEY_SOURCE")
  remote.disconnect()