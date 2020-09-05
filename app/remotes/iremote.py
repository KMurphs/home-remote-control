class IRemote:
  def __init__(self, config: dict):
    """Initialize the remote object with relevant configuration"""
    pass


  def control(self, key: str, post_timeout: int) -> bool:
    """Sends a Command and optionally wait for 'post_timeout'ms """
    pass