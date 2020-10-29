#!/usr/bin/python3
# Author: @AgbaD | @Agba_dr3

#!/usr/bin/python
# Author: @AgbaD | @Agba_dr3

from flask import Flask
from flask_moment import Moment
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from ..config import config

moment = Moment()
db = SQLAlchemy()
cors = CORS()


def create_app(config_name):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    config[config_name].init_app(app)

    """if not app.debug and not app.testing and not app.config['SSL_DISABLE']:
        from flask.ext.sslify import SSLify
        sslify = SSLify(app)"""

    moment.init_app(app)
    db.init_app(app)
    cors.init_app(app)

    from .main import main as main_blueprint
    app.register_blueprint(main_blueprint)

    return app
