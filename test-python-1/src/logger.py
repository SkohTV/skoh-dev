import logging.config
import json
from typing import override
import datetime as dt

# Custom logger, to avoid using root logger
main_logger = logging.getLogger("main_logger")


def setup_logging():
  '''Load custom logging config (logger.json)'''
  with open('logger.json') as f:
    config = json.load(f)
  logging.config.dictConfig(config)


class CustomJSON(logging.Formatter):
  '''Custom json formatter because none provided by default'''

  def __init__(self, *, fmt_keys: dict[str, str] | None = None):
    super().__init__()
    self.fmt_keys = fmt_keys if fmt_keys is not None else {}

  @override
  def format(self, record: logging.LogRecord) -> str:
    message = self._prepare_log_dict(record)
    return json.dumps(message, default=str)

  def _prepare_log_dict(self, record: logging.LogRecord):
    always_fields = {
      "message": record.getMessage(),
      "timestamp": dt.datetime.fromtimestamp(record.created, tz=dt.timezone.utc).isoformat(),
    }

    if record.exc_info is not None:
      always_fields["exc_info"] = self.formatException(record.exc_info)

    if record.stack_info is not None:
      always_fields["stack_info"] = self.formatStack(record.stack_info)

    # Went too far, mCoding
    message = {
      key: msg_val
      if (msg_val := always_fields.pop(val, None)) is not None
      else getattr(record, val)
      for key, val in self.fmt_keys.items()
    }

    message.update(always_fields)

    return message

