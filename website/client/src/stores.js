import {readable, writable, derived} from 'svelte/store';
let delay = 10000;

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

// Site settings
let units = writable("Imperial");
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
let temp = readable(0,(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = randomIntFromInterval(-100,150)
        set (newVal);
    }, delay)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
let airQuality = readable(0,(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = randomIntFromInterval(0,100)
        set (newVal);
    }, delay)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
let light = readable(0,(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = randomIntFromInterval(0,10)
        set (newVal);
    }, delay)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
let humidity = readable(0,(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = randomIntFromInterval(0,100)
        set (newVal);
    }, delay)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
let airPressure = readable("25.90",(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = Math.floor(Math.random() * (32.01 - 25.90 + 1.00) + 25.9).toFixed(2)
        set (newVal);
    }, delay)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
// Public readings
let pubTemp = readable(0,(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = randomIntFromInterval(-100,150)
        set (newVal);
    }, delay)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
let pubAirQuality = readable(0,(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = randomIntFromInterval(0,100)
        set (newVal);
    }, delay)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
let pubLight = readable(0,(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = randomIntFromInterval(0,10)
        set (newVal);
    }, delay)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
let pubHumidity = readable(0,(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = randomIntFromInterval(0,100)
        set (newVal);
    }, delay)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
let pubAirPressure = readable("25.90",(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = Math.floor(Math.random() * (32.01 - 25.90 + 1.00) + 25.9).toFixed(2)
        set (newVal);
    }, delay)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
// Comparisons
let tempDiff = derived([temp,pubTemp],([$temp,$pubTemp])=>{
    let tempDiff = $temp-$pubTemp
    return tempDiff
})
let airQualityDiff = derived([airQuality,pubAirQuality],([$airQuality,$pubAirQuality])=>{
    let airDiff = $airQuality-$pubAirQuality
    return airDiff
})
let airPressureDiff = derived([airPressure,pubAirPressure],([$airPressure,$pubAirPressure])=>{
    let airDiff = (parseFloat($airPressure)-parseFloat($pubAirPressure)).toFixed(2);
    return airDiff
})
let humidityDiff = derived([humidity,pubHumidity],([$humidity,$pubHumidity])=>{
    let humidityDiff = $humidity-$pubHumidity
    return humidityDiff
})

export {units, tempUnits, airPressureUnits, temp, airQuality, light, humidity, airPressure, pubTemp, pubLight, pubHumidity, pubAirQuality, pubAirPressure, tempDiff, airQualityDiff, airPressureDiff, humidityDiff}