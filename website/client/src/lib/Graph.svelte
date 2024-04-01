<script lang="ts">
  import { onMount } from "svelte";
  import ApexCharts from "apexcharts";
  import {piData, units} from '../stores'

  export let selectedData: string; // Data selected by toggle
  export let dataSource = "past"  // Past data or forecast

  type Series = {x:string|number,y:number}[] // Data series
  type piData = { // Raspberry pi data list
    'air_pressure':number,
    'aqi':number,'humidity':number,
    'id':number,
    'sunlight_level':number,
    'temperature':number,
    'timestamp':string
  }[]
  
  // Settings
  let chart: ApexCharts | null = null;
  let timezoneOffset = -4*3600*1000
  let red = "#ef4444"
  let blue = "#3b82f6"
  let purple = "#a855f7"
  let green = "#22c55e"
  let amber = "#f59e0b"
  let dataUnit = " (°C)"
  let options = {
    chart: {
      height: 300,
      type: "area",
      background: "#00000000",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
        tools: {
          pan: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    series: [
    ],
    stroke: {
      curve: "smooth",
      colors: [red]
    },
    fill: {
      colors: [red]
    },
    xaxis: {
      type: "datetime",
      tickAmount: 5,
      labels: {
        datetimeUTC: false,
      }
    },
    tooltip: {
      x: {
        format: "MM/dd/yy HH:mm",
      },
      theme: "dark",
    },
    theme: {
      mode: "dark",
      palette: "palette2",
    },
    title: {
      text: "Temperature (°C)",
      align: "left",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "24px",
        fontWeight: "regular",
        fontFamily: 'coda',
        color: "#ffffff",
      },
    },
    noData: {
      text: "Loading data...",
    },
  };

  // Update graph with new data
  function updateGraph(dataName: string) {
    let series:Series = [];
    let newColor = red;
    if (dataName && chart) {
      switch(dataName){
        case "Temperature":
          newColor = red;
          if($units==="Imperial"){
            dataUnit = " (°F)"
          }
          else {
            dataUnit = " (°C)"
          }
        break;
        case "Humidity":
        newColor = blue;
        dataUnit = " (%)"
        break;
        case "Air Quality":
        newColor = purple;
        dataUnit = " (μg/m3)"
        break;
        case "Air Pressure":
        newColor = green;
        if($units==="Imperial"){
            dataUnit = " (in-Hg)"
          }
          else {
            dataUnit = " (mb)"
          }
        break;
        case "Light Level":
        newColor = amber;
        dataUnit = " "
        break;
      }
      chart.updateOptions({
        title: {
          text: dataName + dataUnit,
        },
        stroke: {
          colors: [newColor]
        },
        fill: {
          colors: [newColor]
        },
      });
      if(dataSource==="past"){
        series = parsePiData(dataName)
        //console.log(series)
      }
      chart.updateSeries([
        {
          name: dataName,
          data: series,
        },
      ]);
    }
  }

  // Parse raspberry pi data to get data series
  function parsePiData(dataName:string){
    let data:Series = [];
    let piDataObj:piData = $piData["weather_data"]
    if(piDataObj){
      switch(dataName){
        case "Temperature":
          piDataObj.forEach((dp)=>{
            let temp = dp['temperature']
            if($units==="Imperial"){
              temp = parseFloat((temp*9/5+32).toFixed(0))
            }
            data.push({x:Date.parse(dp['timestamp'])+timezoneOffset,y:temp})
          })
        break;
        case "Humidity":
          piDataObj.forEach((dp)=>{
            data.push({x:Date.parse(dp['timestamp'])+timezoneOffset,y:dp['humidity']})
          })
        break;
        case "Air Quality":
          piDataObj.forEach((dp)=>{
            data.push({x:Date.parse(dp['timestamp'])+timezoneOffset,y:dp['aqi']})
          })
        break;
        case "Air Pressure":
          piDataObj.forEach((dp)=>{
            let ap = dp['air_pressure']
            if($units==="Imperial"){
              ap = parseFloat((ap*0.02953).toFixed(2))
            }
            data.push({x:Date.parse(dp['timestamp'])+timezoneOffset,y:ap})
          })
        break;
        case "Light Level":
          piDataObj.forEach((dp)=>{
            data.push({x:Date.parse(dp['timestamp'])+timezoneOffset,y:dp['sunlight_level']})
          })
        break;
      }
    }
    return data
  }

  onMount(() => {
    chart = new ApexCharts(document.getElementById("chart"), options); // Create chart
    chart.render();  // Render chart
  });
  $: selectedData, updateGraph(selectedData); // Update chart when toggle changes
  $: $piData, updateGraph(selectedData); // Update chart with new data
  $: $units, updateGraph(selectedData); // Update chart on unit change
</script>
<div id="chart"></div>
