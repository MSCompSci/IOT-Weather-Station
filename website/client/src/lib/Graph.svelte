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
      text: "Temperature",
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
    if (dataName && chart) {
      chart.updateOptions({
        title: {
          text: dataName,
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
              temp = temp*9/5+32
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
