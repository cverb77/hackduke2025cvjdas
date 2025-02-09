from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
CORS(app, support_credentials=True)


# Configure the database connection (PostgreSQL or SQLite)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://ffdb_zyjl_user:2tK1CbCFlFOBypyvmuaI6gJuLXA8rmXM@dpg-cujt9952ng1s73bcarm0-a.oregon-postgres.render.com:5432/ffdb_zyjl?sslmode=require'
db = SQLAlchemy(app)

# Define the model for points
class Point(db.Model):
    __tablename__ = 'points'
    id = db.Column(db.Integer, primary_key=True)
    lat = db.Column(db.Float, nullable=False)
    lon = db.Column(db.Float, nullable=False)
    description = db.Column(db.String(200))

# Create the database tables (run this once or during app startup)
with app.app_context():
    db.create_all()

# Route to get all points
@app.route('/points', methods=['GET'])
def get_points():
    points = Point.query.all()
    result = [{'lat': p.lat, 'lon': p.lon, 'description': p.description} for p in points]
    return jsonify(result)

# Route to add a new point
@app.route('/points', methods=['POST'])
def add_point():
    data = request.get_json()  # Automatically parse JSON request body
    new_point = Point(lat=data['lat'], lon=data['lon'], description=data['description'])
    db.session.add(new_point)
    db.session.commit()
    return jsonify({'message': 'Point added successfully'}), 201

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
