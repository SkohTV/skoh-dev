from dataclasses import dataclass
from ssl import SSLSocket
from .logger import main_logger
from socket import socket


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
  code: int = 200
  msg: str = 'OK'
  format: str = 'text/html'
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

def router(req: Request) -> bytes:
  '''Takes a request in and return the corresponding file(s)'''
  # Analyze request
  if req.method == 'GET':

    # Root
    if req.path == '/':
      res = Response(path='index.html')
    elif req.path == '/ressource/style.css':
      res = Response(path='style.css', format='text/css')
    elif req.path == '/ressource/main.js':
      res = Response(path='main.js', format='text/javascript')

    # AE
    elif req.path == '/ae':
      res = Response(path='ae/index.html')
    elif req.path == '/ae/ressource/style.css':
      res = Response(path='ae/style.css', format='text/css')
    elif req.path == '/ae/ressource/script.js':
      res = Response(path='ae/script.js', format='text/javascript')
    elif req.path == '/ae/ressource/crab_tr':
      res = Response(path='ae/imgs/crab_tr.webp', format='image/webp')
    elif req.path.startswith('/ae/api/random-crab/'):
      id = req.path[len('/ae/api/random-crab/'):]
      res = Response(path=f'ae/imgs/crab_pic/{id}.jpg', format='image/jpeg')

    # Errors
    else:
      res = Response(path='404.html', code=404, msg='Not Found')
  else:
    res = Response(path='404.html', code=501, msg='Not Implemented')

  # Build reponse
  res = f'HTTP/1.1 {res.code} {res.msg}\r\nContent-Type: {res.format}\r\nContent-Length: {res.len()}\r\n\r\n'.encode('utf-8') + res.get_body()

  return res


def handle_request(client_socket: SSLSocket|socket) -> None:
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
    client_socket.sendall(res)


  # Avoid crashing, log error
  except Exception as e:
    main_logger.critical(f"Request failed: {e}")

