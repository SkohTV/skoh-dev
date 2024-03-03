from dataclasses import dataclass
from ssl import SSLSocket
from .logger import main_logger


# Classes to handle data more easly

@dataclass
class Request:
  '''HTTP request'''
  method: str
  path: str

@dataclass
class Response:
  '''HTTP response'''
  path: str
  code: int
  msg: str
  _body: bytes|None = None

  def len(self) -> int:
    '''Compute the len of self._body'''
    return len(self.get_body())

  def get_body(self) -> bytes:
    '''Compute OR return self._body (content of file at self.path)'''
    if not self._body:
      with open(f'static/{self.path}', 'rb') as f:
        self._body = f.read()
    return self._body


# Methods to handle requests

def router(req: Request) -> str:
  '''Takes a request in and return the corresponding file(s)'''
  # Analyze request
  if req.method == 'GET':
    if req.path == '/':
      res = Response(path='index.html', code=200, msg='OK')
    elif req.path == '/ressource/style.css':
      res = Response(path='style.css', code=200, msg='OK')
    elif req.path == '/ressource/script.js':
      res = Response(path='script.js', code=200, msg='OK')
    else:
      res = Response(path='404.html', code=404, msg='Not Found')
  else:
    res = Response(path='404.html', code=501, msg='Not Implemented')

  # Build reponse
  res = f'HTTP/1.1 {res.code} {res.msg}\r\nContent-Length: {res.len()}\r\n\r\n{res.get_body().decode("utf-8")}'
  return res


def handle_request(client_socket: SSLSocket) -> None:
  '''Takes a request, then send a response'''
  try:
    # Receive request
    request_data = client_socket.recv(1024).decode('utf-8').strip()
    main_logger.info(f"Received data: {request_data}")

    # Extract method / path
    method, path, _ = request_data.split('\n')[0].split(' ')
    main_logger.warn(f"Request received: path='{path}' with method='{method}'")

    req = Request(method=method, path=path)
    res = router(req)

    # Send the response back to the client
    client_socket.sendall(res.encode('utf-8'))

  # Avoid crashing, log error
  except Exception as e:
    main_logger.critical(f"Request failed: {e}")

