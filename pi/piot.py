#!/usr/bin/env python3

import requests

from gpiozero import LightSensor
import board
import busio
from adafruit_dht import DHT11
from adafruit_bmp3xx import BMP3XX_I2C
from sds011lib import SDS011QueryReader

# Where the weather data is posted.
WEATHER_ENDPOINT = "http://localhost:5000/api/weather"

# Pins.
DHT11_PIN = board.D12  # Hardware PWM Pin on Pi Zero 2W
BMP390_SCL = board.SCL
BMP390_SDA = board.SDA
PHOTOCELL_PIN = 18  # Just a number since gpiozero is a different library.

dht11 = DHT11(DHT11_PIN)
dht11.measure()

temperature = dht11.temperature
humidity = dht11.humidity

ldr = LightSensor(18)
sunlight_level = ldr.value

air_quality = SDS011QueryReader("/dev/ttyUSB0")
air_quality_query = air_quality.query()
pm_two_five = air_quality_query.pm25

i2c_bus = busio.I2C(BMP390_SCL, BMP390_SDA)
barometer = BMP3XX_I2C(i2c_bus)
air_pressure = barometer.pressure / 100 # Divide by 100 to convert from Pascal to Millibar.

weather = {
    "temperature": temperature,
    "humidity": humidity,
    "aqi": pm_two_five,
    "sunlight_level": sunlight_level,
    "air_pressure": air_pressure,
}

requests.put(WEATHER_ENDPOINT, json=weather)
