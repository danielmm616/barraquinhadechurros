from flask import Flask, request, Blueprint
from flask_cors import CORS


# models
class ChurrosModel:
    def __init__(self, name, count, churros):
        self.name = name
        self.count = count
        self.churros = churros

        
# controllers
def churros_controller():
    churros = request.get_json()
    name = churros['name']
    count = churros['count']
    
    message = ''
    if count > 0:
        message = f'{name} produziu {count} churros'
    if count < 0:
        message = f'{name} comprou {abs(count)} churros'
    if count == 0:
        message = f'{name} sem churros pra você :('
    if count > 10:
        message = f'{name} produziu muitos churros e ficou cansado...'
    if count < -10:
        message = f'{name} comprou muitos churros e ficou com dor de barriga...'
        
    return {'message': message}


# Routes
bp_churros = Blueprint('churros', __name__, url_prefix='/churros')
bp_churros.post('')(churros_controller)


# app
def create_app():
    app = Flask(__name__)
    
    CORS(app)
    app.register_blueprint(bp_churros)
    
    return app