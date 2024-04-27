from dataclasses import dataclass
from http.server import HTTPServer, BaseHTTPRequestHandler

DOMAIN = '0.0.0.0'
PORT = 5000


@dataclass
class Response:
  '''HTTP response'''
  path: str
  code: int = 200
  msg: str = 'OK'
  format: str = 'text/html'
  cache: str|None = None
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



class Handler(BaseHTTPRequestHandler):
  '''Handler for requests'''

  def do_GET(self):
    '''Send back the ressource linked to the URL'''

    # Root
    if self.path == '':
      res = Response(path='index.html')
    elif self.path == '/ressource/style.css':
      res = Response(path='style.css', format='text/css')
    elif self.path == '/ressource/main.js':
      res = Response(path='main.js', format='text/javascript')

    # AE
    elif self.path == '/ae': # html
      res = Response(path='ae/index.html')
    elif self.path == '/ae/r/style.css': # css
      res = Response(path='ae/style.css', format='text/css')
    elif self.path == '/ae/r/script.js': # javascript
      res = Response(path='ae/script.js', format='text/javascript')
    elif self.path == '/ae/i/crab_big': # big crab
      res = Response(path='ae/imgs/crab_big.webp', format='image/webp', cache='max-age=31536000')

    elif self.path.startswith('/ae/i/crab/'):# crab pictures
      id = self.path[len('/ae/i/crab/'):]
      if id.isnumeric() and 1 <= int(id) <= 78:
        res = Response(path=f'ae/imgs/crab_pic/{id}.jpg', format='image/jpeg', cache='max-age=31536000')
      else:
        res = Response(path='404.html', code=404)

    elif self.path.startswith('/ae/i/hazbin/'): # hazbin characters
      NAMES = ['alastor', 'angel', 'emily', 'husk', 'lucifer', 'pentious']
      chara = self.path[len('/ae/i/hazbin/'):]
      if chara in NAMES:
        res = Response(path=f'ae/imgs/{chara}.webp', format='image/webp', cache='max-age=31536000')
      else:
        res = Response(path='404.html', code=404)

    elif self.path.startswith('/ae/s/hazbin/'): # hazbin song
      NAMES = {
        'dad': 'Hell\'s Greatest Dad',
        'sorry': 'It Starts With Sorry',
        'loser': 'Loser, Baby',
        'poison': 'Poison',
        'gone': 'Stayed Gone',
        'know': 'You Didn\'t Know',
      }
      song = self.path[len('/ae/s/hazbin/'):]
      if song in NAMES.keys():
        res = Response(path=f'ae/music/{NAMES[song]}.mp3', format='audio/mp3', cache='max-age=31536000')
      else:
        res = Response(path='404.html', code=404)

    # Errors
    else:
      res = Response(path='404.html', code=404)

    self.send_response(res.code)
    self.send_header('Content-Type', res.format)
    if res.cache:
      self.send_header('Cache-Control', res.cache)
    self.send_header('Content-Length', str(res.len()))
    self.end_headers()
    self.wfile.write(res.get_body())

    return res



if __name__ == '__main__':
  httpd = HTTPServer((DOMAIN, PORT), Handler)
  httpd.serve_forever()

