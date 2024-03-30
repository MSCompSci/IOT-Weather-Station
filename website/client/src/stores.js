import {readable, writable, derived} from 'svelte/store';
let delay = 10000;

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

// Site settings
let units = writable("Metric");
let tempUnits = derived(units,($units)=>{
    if($units==="Imperial"){
        return "°F"
    }
    else {
        return "°C"
    }
})
let airPressureUnits = derived(units,($units)=>{
    if($units==="Imperial"){
        return "in-Hg"
    }
    else {
        return "mb"
    }
})

// Readings from raspberry pi
const uri = 'http://localhost:5000/api/weather'

let piData = readable({},(set)=>{
    function getData(){
        const fetchPiData = async ()=>{
            try{
                const response = await fetch(uri,{
                    cache: "default",
                    credentials: "omit",
                    method:"GET",
                    mode:"cors",
                });
                const result = await response.json();
                set(result)
            }
            catch(error){

            }
        }
        fetchPiData();
        setTimeout(getData,delay)
    }
    getData();
})

let newestPiData = derived(piData,($piData)=>{
    let data = $piData["weather_data"]
    if(data){
        return data["0"]
    }
    else {
        return {
            "temperature": 0,
            "humidity": 0,
            "aqi": 0,
            "sunlight_level": 0,
            "air_pressure": 900.0
        }
    }
})

let temp = derived([newestPiData,units],([$newestPiData,$units])=>{
    // Assume celcius as default
    if($units==="Imperial"){
        return (($newestPiData["temperature"]*9/5)+32).toFixed(0)
    }
    return $newestPiData["temperature"].toFixed(0)
})

let humidity = derived(newestPiData,($newestPiData)=>{
    return $newestPiData["humidity"]
})

let airQuality = derived(newestPiData,($newestPiData)=>{
    return $newestPiData["aqi"]
})

let light = derived(newestPiData,($newestPiData)=>{
    return $newestPiData["sunlight_level"]
})

let airPressure = derived([newestPiData,units],([$newestPiData,$units])=>{
    if($units==="Imperial"){
        return ($newestPiData["air_pressure"]*0.02953).toFixed(2)
    }
    return $newestPiData["air_pressure"]
})

// Public readings
const api = 'https://api.weather.gov/stations/KFZY/observations/latest' // NWS Oswego Station
const aqiAPI = 'https://api.openaq.org/v1/latest/384?limit=1&page=1&offset=0&sort=asc' // OpenAQ NYC
let pubData = readable({},(set)=>{
    function getData(){
        const fetchData = async ()=>{
            try{
                const response = await fetch(api);
                const result = await response.json();
                set(result["properties"])
            }
            catch(error){

            }
        }
        fetchData();
        // Repeat every 30 minutes
        setTimeout(getData,1800000)
    }
    getData();
})

let pubTemp = derived([pubData,units],([$pubData,$units])=>{
    let data = $pubData["temperature"]
    if(data){
        if($units==="Imperial"){
            return ((data["value"]*9/5)+32).toFixed(0)
        }
        return data["value"].toFixed(0)
    }
    else {
        return 0
    }
})

let pubHumidity = derived(pubData,($pubData)=>{
    let data = $pubData["relativeHumidity"]
    if(data){
        return data["value"].toFixed(0)
    }
    else {
        return 0
    }
})

let pubAirData = readable({},(set)=>{
    function getData(){
        const fetchData = async ()=>{
            try{
                const response = await fetch(aqiAPI,{
                    method: 'GET', 
                    headers: {accept: 'application/json'}
                });
                const result = await response.json();
                if(result) set(result["results"][0]["measurements"])
            }
            catch(error){

            }
        }
        fetchData();
        setTimeout(getData,delay)
    }
    getData();
})

let pubAirQuality = derived(pubAirData,($pubAirData)=>{
    let particulates25 = $pubAirData[0]
    let AQI = -1
    if(particulates25){
        AQI = particulates25["value"]
    }
    return AQI
})


let pubAirPressure = derived([pubData,units],([$pubData,$units])=>{
    let data = $pubData["barometricPressure"]
    if(data){
        if($units==="Imperial"){
            return ((data["value"]/100)*0.02953).toFixed(2)
        }
        return (data["value"]/100).toFixed(2)
    }
    else {
        return 0
    }
})

// Comparisons
let tempDiff = derived([temp,pubTemp],([$temp,$pubTemp])=>{
    let tempDiff = $temp-$pubTemp
    return tempDiff.toFixed(0)
})
let airQualityDiff = derived([airQuality,pubAirQuality],([$airQuality,$pubAirQuality])=>{
    let airDiff = $airQuality-$pubAirQuality
    return airDiff.toFixed(1)
})
let airPressureDiff = derived([airPressure,pubAirPressure],([$airPressure,$pubAirPressure])=>{
    let airDiff = (parseFloat($airPressure)-parseFloat($pubAirPressure));
    return airDiff.toFixed(2)
})
let humidityDiff = derived([humidity,pubHumidity],([$humidity,$pubHumidity])=>{
    let humidityDiff = $humidity-$pubHumidity
    return humidityDiff.toFixed(0)
})

export {newestPiData, pubData, pubAirData, piData, units, tempUnits, airPressureUnits, temp, airQuality, light, humidity, airPressure, pubTemp, pubHumidity, pubAirQuality, pubAirPressure, tempDiff, airQualityDiff, airPressureDiff, humidityDiff}