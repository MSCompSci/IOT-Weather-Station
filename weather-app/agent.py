import threading

import requests
import json
import random
import time

# Endpoint URL of the Flask app
API_ENDPOINT = 'http://127.0.0.1:5000/api/weather'

# Hours
DATA_INTERVAL_HOURS = 0.001

def get_weather_data():
    """
    Function to generate random weather data.
    Modify this function according to your actual data source.
    """

    # This is temporary code to generate data to test the code!
    temperature = round(random.uniform(20, 30), 2)
    humidity = round(random.uniform(40, 60), 2)
    aqi = random.randint(0, 100)
    sunlight_level = random.randint(2000, 10000)
    air_pressure = round(random.uniform(1000, 1020), 2)

    return {
        "temperature": temperature,
        "humidity": humidity,
        "aqi": aqi,
        "sunlight_level": sunlight_level,
        "air_pressure": air_pressure
    }

def convert_hrs_to_sec(hours):
    return hours*60*60;

def send_weather_data():
    """
    Function to send weather data to the Flask app.
    """
    data = get_weather_data()
    headers = {'Content-Type': 'application/json'}
    response = requests.post(API_ENDPOINT, headers=headers, data=json.dumps(data))

    if response.status_code == 201:
        print("Weather data sent successfully!")
    else:
        print("Failed to send weather data.")
        print("Status Code:", response.status_code)
        print("Response:", response.text)




if __name__ == "__main__":
    while(True):
        send_weather_data()
        time.sleep(convert_hrs_to_sec(DATA_INTERVAL_HOURS))

