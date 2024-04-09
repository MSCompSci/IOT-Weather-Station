# piot

A Python script to collect sensor data and send it to the backend.

## Setup

1. Refer to [CircuitPython's setup](https://learn.adafruit.com/circuitpython-on-raspberrypi-linux/installing-circuitpython-on-raspberry-pi) to install everything for CircuitPython to work on the Pi.
2. Have a terminal open in this folder.
3. Run `poetry install` to download the script's dependencies.
4. Setup crontab to run this script hourly.
    1. `crontab -e` to start editing the current users crontab.
    2. Add `0 * * * * poetry run -C <path/to/this/folder> python piot.py`
    3. Save the file.
    4. Confirm the job is scheduled with `crontab -l`.

### Configuring sensor pins
At this point, the only way to edit which pins are used is by manually editing `piot.py`.

## Sensors
- Temperature: DHT11
    - [Adafruit_CircuitPython_DHT](https://github.com/adafruit/Adafruit_CircuitPython_DHT)
    - [DHT CircuitPython code](https://learn.adafruit.com/dht/dht-circuitpython-code)
- Humidity: Also the DHT11.     
- Air quality: [SDS011 Sensor](https://aqicn.org/sensor/sds011/)
    - Outputs PM2.5 and PM10 values.
- Sunlight Level: Photoresistor/LDR
    - [Photocell w/ CircuitPython](https://learn.adafruit.com/photocells/circuitpython)
- Air Pressure: BMP390
    - [Adafruit BMP3XX](https://learn.adafruit.com/adafruit-bmp388-bmp390-bmp3xx)

## References
- [Raspberry Pi documentation](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html)
    - [GPIO in Python](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#gpio-in-python)
    - [Pi Zero 2 W Pinout](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#raspberry-pi-zero-2-w)
- [CircuitPython essentials](https://learn.adafruit.com/circuitpython-essentials/circuitpython-essentials)