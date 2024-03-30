<script lang="ts">
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import Header from "./lib/Header.svelte";
  import Card from "./lib/Card.svelte";
  import CurrentCondition from "./lib/CurrentCondition.svelte";
  import DataCard from "./lib/DataCard.svelte";
  import DataCompare from "./lib/DataCompare.svelte";
  import GraphCard from "./lib/GraphCard.svelte";
  import {
    temp,
    airQuality,
    light,
    humidity,
    airPressure,
    tempUnits,
    airPressureUnits,
    pubAirData
  } from "./stores";
  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  function testData() {
    const uri = 'http://localhost:5000/api/weather'
    let delay = 10000;
    let data = {
      temperature: randomIntFromInterval(-100, 150),
      humidity: randomIntFromInterval(0, 100),
      aqi: randomIntFromInterval(0, 100),
      sunlight_level: randomIntFromInterval(0, 10),
      air_pressure: randomIntFromInterval(900, 1100),
    };
    async function postData(uri, data) {
      try {
        const response = await fetch(uri, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        set(response.json());
      } catch (error) {
        //return error
      }
    }
    postData(uri, data);
    console.log($pubAirData)
    setTimeout(testData, delay);
  }
  testData();
</script>

<article
  class="bg-[url('../static/background.jpg')] bg-cover bg-fixed bg-center w-full min-h-screen"
>
  <Header location={{ city: "Oswego", state: "NY" }} />
  <main
    class="max-w-[1472px] mt-20 gap-8 mx-8 2xl:mx-auto grid grid-cols-1 xl:grid-cols-2 grid-rows-1"
  >
    <Card
      position="row-start-1 col-start-1 col-span-1 row-span-1"
      title="Current Conditions"
    >
      <div
        slot="content"
        class="mt-4 grid gap-y-3 gap-x-8 grid-cols-[1fr_2fr] grid-rows-5"
      >
        <CurrentCondition condition="Sunny" position="row-span-2" />
        <DataCard
          position="xl:row-start-1 xl:col-start-2 row-span-1"
          title="Temperature"
          reading={$temp}
          unit={$tempUnits}
          gaugeType="number"
          description="Description"
        ></DataCard>
        <DataCard
          position="xl:row-start-2 xl:col-start-2 row-span-1"
          title="Air Quality"
          reading={$airQuality}
          unit="AQI"
          gaugeType="gauge"
          description="Description"
        ></DataCard>
        <DataCard
          position="xl:row-start-3 xl:col-start-1 xl:col-span-2 row-span-1"
          title="Light Level"
          reading={$light}
          unit=""
          gaugeType="gauge"
          description="Description"
        ></DataCard>
        <DataCard
          position="xl:row-start-4 xl:col-start-1 xl:col-span-2 row-span-1"
          title="Humidity"
          reading={$humidity}
          unit="%"
          gaugeType="number"
          description="Description"
        ></DataCard>
        <DataCard
          position="xl:row-start-5 xl:col-start-1 xl:col-span-2 row-span-1"
          title="Air Pressure"
          reading={$airPressure}
          unit={$airPressureUnits}
          gaugeType="context"
          description="Description"
        ></DataCard>
      </div>
    </Card>
    <div class="row-span-1 h-full grid grid-rows-[75fr_100fr] gap-y-8">
      <Card position="col-start-2 col-span-1" title="Compare Data">
        <DataCompare slot="content" />
      </Card>
      <GraphCard position=" col-start-2 col-span-1" />
    </div>
  </main>
</article>
