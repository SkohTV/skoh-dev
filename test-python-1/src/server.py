import socket
import ssl
import threading
from src import logger
from src.logger import main_logger
from src import router


def handle(client_socket: socket.socket|ssl.SSLSocket, addr) -> None:
  '''Handle the request, used by multithreading'''
  with client_socket:
    main_logger.info(f"Connected by {addr}")
    router.handle_request(client_socket)


def http() -> None:
  '''HTTP web server'''
  HOST = '0.0.0.0'
  PORT = 8000

  # Load the logging config
  logger.setup_logging()

  # Create the socket
  with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server_socket:
    server_socket.bind((HOST, PORT))
    server_socket.listen()

    main_logger.warning(f"Serving on {HOST}:{PORT}")

    # Main loop to handle requests
    while True:
      client_socket, addr = server_socket.accept()
      threading.Thread(target=handle, args=(client_socket, addr)).start()


def https() -> None:
  '''HTTPS web server'''
  HOST = '0.0.0.0'
  PORT = 443

  # Load the logging config
  logger.setup_logging()

  # Create the socket
  with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as server_socket:
    server_socket.bind((HOST, PORT))
    server_socket.listen()

    # SSL certificate
    context = ssl.create_default_context(ssl.Purpose.CLIENT_AUTH)
    context.load_cert_chain(certfile="keys/domain.cert.pem", keyfile="keys/private.key.pem")
    # context.load_verify_locations(cafile="keys/intermediate.cert.pem")

    main_logger.warning(f"Serving on {HOST}:{PORT}")

    # Main loop to handle requests
    with context.wrap_socket(server_socket, server_side=True) as ssl_server_socket:
      while True:
        try:
          client_socket, addr = ssl_server_socket.accept()
          threading.Thread(target=handle, args=(client_socket, addr)).start()
        except Exception as e:
          main_logger.critical(f"Failed to process request: {e}")

