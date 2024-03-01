import socket
from src import logger
from src.logger import main_logger
from src import router


HOST = '127.0.0.1'
PORT = 8080


def main():
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
      with client_socket:
        main_logger.info(f"Connected by {addr}")
        router.handle_request(client_socket)


if __name__ == '__main__':
  main()

