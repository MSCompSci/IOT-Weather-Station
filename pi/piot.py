#!/usr/bin/env python3

from dataclasses import dataclass, asdict
import requests
import json

import analogio
import board
import busio
from adafruit_dht import DHT11
from adafruit_lps2x import LPS22
import serial

# Where the weather data is posted.
WEATHER_ENDPOINT = "localhost:3000/api/weather/"

# Pins.
DHT11_PIN = board.GPIO12  # Hardware PWM Pin on Pi Zero 2W
PHOTOCELL_PIN = board.GPIO13
LPS22_SCL = board.SCL
LPS22_SDA = board.SDA


@dataclass
class Weather:
    temperature: float
    humidity: float
    aqi: float
    sunlight_level: int
    air_pressure: float


def get_air_quality() -> tuple[float, float]:
    usb = serial.Serial("/dev/ttyUSB0")

    data: list[int] = []
    for _ in range(0, 10):
        data.append(usb.read())

    pm_two_five = int.from_bytes(b"".join(data[2:4]), byteorder="little") / 10
    pm_ten = int.from_bytes(b"".join(data[4:6]), byteorder="little") / 10

    return pm_two_five, pm_ten


# Map a value from one range to another.
def remap_range(
    value: float, in_min: float, in_max: float, out_min: float, out_max: float
) -> float:
    return out_min + (
        float(value - in_min) / float(in_max - in_min) * (out_max - out_min)
    )


if __name__ == "__main__":
    dht11 = DHT11(DHT11_PIN)
    dht11.measure()

    temperature = dht11.temperature
    humidity = dht11.humidity

    # Value is in range 0-65535.
    photocell = analogio.AnalogIn(PHOTOCELL_PIN)
    sunlight_level = int(remap_range(photocell.value, 0, 65535, 1, 10))

    pm_two_five, _ = get_air_quality()

    i2c_bus = busio.I2C(LPS22_SCL, LPS22_SDA)
    barometer = LPS22(i2c_bus)
    air_pressure = barometer.pressure

    data = Weather(temperature, humidity, pm_two_five, sunlight_level, air_pressure)

    data_json = json.dumps(asdict(data))

    requests.put(WEATHER_ENDPOINT, data_json)