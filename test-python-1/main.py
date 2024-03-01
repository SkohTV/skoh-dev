import socket
import ssl
from src import logger
from src.logger import main_logger
from src import router


HOST = '0.0.0.0'
PORT = 443


def main():
  # Load the logging config
  logger.setup_logging()

  # Create the socket
  with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server_socket:
    server_socket.bind((HOST, PORT))
    server_socket.listen()

    # SSL certificate
    context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
    context.load_cert_chain(certfile="domain.cert.pem", keyfile="private.key.pem")
    context.load_verify_locations(cafile="intermediate.cert.pem")

    main_logger.warning(f"Serving on {HOST}:{PORT}")

    # Main loop to handle requests
    with context.wrap_socket(server_socket, server_side=True) as ssl_server_socket:
      while True:
        client_socket, addr = ssl_server_socket.accept()
        with client_socket:
          main_logger.info(f"Connected by {addr}")
          router.handle_request(client_socket)


if __name__ == '__main__':
  main()

