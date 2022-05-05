from flask import Flask, request, Blueprint


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
        message = f'{name} não comprou nenhum churros :('
    if count > 10:
        message = f'{name} comprou muitos churros e ficou com dor de barriga...'
    if count < -10:
        message = f'{name} produziu muitos churros e ficou cansado...'
    
    return {'message': message}


# Routes
bp_churros = Blueprint('churros', __name__, url_prefix='/churros')
bp_churros.post('')(churros_controller)


# app
def create_app():
    app = Flask(__name__)
    
    app.register_blueprint(bp_churros)
    
    return app