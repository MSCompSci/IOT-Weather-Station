from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import sqlite3


app = Flask(__name__)
cors = CORS(app, origins=['http://localhost:5173'])

# SQLite Database Initialization
def get_db_connection():
    conn = sqlite3.connect('weather_station.db')
    conn.row_factory = sqlite3.Row
    return conn

# Create a table for weather data if not exists
def create_table():
    conn = get_db_connection()
    conn.execute('''
        CREATE TABLE IF NOT EXISTS weather_data (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            temperature REAL NOT NULL,
            humidity REAL NOT NULL,
            aqi INTEGER,
            sunlight_level REAL,
            air_pressure REAL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()


create_table()

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/api/weather', methods=['POST'])
def add_weather_data():
    data = request.json
    if 'temperature' not in data or 'humidity' not in data:
        return jsonify({'error': 'Missing temperature or humidity data'}), 400

    # Optional: Check for other required fields (AQI, sunlight level, air pressure)

    conn = get_db_connection()
    conn.execute('''
        INSERT INTO weather_data (temperature, humidity, aqi, sunlight_level, air_pressure)
        VALUES (?, ?, ?, ?, ?)
    ''', (data['temperature'], data['humidity'], data.get('aqi'), data.get('sunlight_level'), data.get('air_pressure')))
    conn.commit()
    conn.close()

    return jsonify({'message': 'Weather data added successfully'}), 201

@app.route('/api/weather', methods=['GET'])
def get_weather_data():
    conn = get_db_connection()
    data = conn.execute('SELECT * FROM weather_data ORDER BY timestamp DESC LIMIT 10').fetchall()
    conn.close()
    return jsonify({'weather_data': [dict(row) for row in data]})

if __name__ == '__main__':
    app.run(debug=True)
