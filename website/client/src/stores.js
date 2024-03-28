import {readable, writable} from 'svelte/store';

function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

// Site settings
let units = writable("Imperial");

// Readings from raspberry pi
let temp = readable(0,(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = randomIntFromInterval(-100,150)
        set (newVal);
    }, 1000)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
let airQuality = readable(0,(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = randomIntFromInterval(0,100)
        set (newVal);
    }, 1000)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
let light = readable(0,(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = randomIntFromInterval(0,10)
        set (newVal);
    }, 1000)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
let humidity = readable(0,(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = randomIntFromInterval(0,100)
        set (newVal);
    }, 1000)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
let airPressure = readable("25.90",(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = Math.floor(Math.random() * (32.01 - 25.90 + 1.00) + 25.9).toFixed(2)
        set (newVal);
    }, 1000)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
// Public readings
let pubTemp = readable(0,(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = randomIntFromInterval(-100,150)
        set (newVal);
    }, 1000)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
let pubAirQuality = readable(0,(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = randomIntFromInterval(0,100)
        set (newVal);
    }, 1000)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
let pubLight = readable(0,(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = randomIntFromInterval(0,10)
        set (newVal);
    }, 1000)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
let pubHumidity = readable(0,(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = randomIntFromInterval(0,100)
        set (newVal);
    }, 1000)
    return ()=>{
        clearInterval(incrementCounter)
    }
})
let pubAirPressure = readable("25.90",(set)=>{
    let incrementCounter = setInterval(()=>{
        let newVal = Math.floor(Math.random() * (32.01 - 25.90 + 1.00) + 25.9).toFixed(2)
        set (newVal);
    }, 1000)
    return ()=>{
        clearInterval(incrementCounter)
    }
})

export {units, temp, airQuality, light, humidity, airPressure, pubTemp, pubLight, pubHumidity, pubAirQuality, pubAirPressure}