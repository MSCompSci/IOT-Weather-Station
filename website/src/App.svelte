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
    condition,
  } from "./stores";

  type WeatherData = {
    temperature: number;
    humidity: number;
    aqi: number;
    sunlight_level: number;
    air_pressure: number;
  };

  function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function testData() {
    const uri = `${location.hostname}:5000/weather`;
    let delay = 10000;
    let data = {
      temperature: randomIntFromInterval(-100, 150),
      humidity: randomIntFromInterval(0, 100),
      aqi: randomIntFromInterval(0, 600),
      sunlight_level: randomIntFromInterval(0, 10),
      air_pressure: randomIntFromInterval(900, 1100),
    };
    async function postData(uri: string, data: WeatherData) {
      try {
        const response = await fetch(uri, {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
      } catch (error) {
        //return error
      }
    }
    postData(uri, data);
    setTimeout(testData, delay);
  }
  testData();
</script>

<article
  class="bg-[url('../static/background.jpg')] bg-cover bg-fixed bg-center w-full min-h-screen pb-3"
>
  <Header location={{ city: "Oswego", state: "NY" }} />
  <main
    class="mx-6 pt-44 flex flex-col 2xl:grid 2xl:grid-cols-2 2xl:gap-0 2xl:max-w-[1592px] 3xl:mx-auto gap-4 md:gap-6 lg:gap-8"
  >
    <Card position="md:w-fit md:mx-auto" title="Current Conditions">
      <div
        slot="content"
        class="flex flex-col gap-2 sm:gap-4 m-6 max-w-[280px] mx-auto sm:mx-2 md:mx-8 sm:max-w-[927px]"
      >
        <div
          class="flex flex-col items-center gap-2 md:gap-8 sm:flex-row justify-center"
        >
          <CurrentCondition
            condition={$condition}
            position="col-start-1 col-span-2 row-start-1 row-span-2 "
          />
          <div
            class=" border border-transparent grid gap-2 sm:gap-8 sm:col-span-2 row-start-1 row-span-2"
          >
            <DataCard
              position=""
              title="Temperature"
              reading={$temp}
              unit={$tempUnits}
              gaugeType="number"
              description="Current temperature reading."
            ></DataCard>
            <DataCard
              position=""
              title="Air Quality"
              reading={$airQuality}
              unit="μg/m3"
              gaugeType="gauge"
              description="Current particulates <2.5 microns in size."
            ></DataCard>
          </div>
        </div>

        <DataCard
          position=""
          title="Light Level"
          reading={$light}
          unit=""
          gaugeType="gauge"
          description="Current light level on a scale of 1 to 10."
        ></DataCard>
        <DataCard
          position=""
          title="Humidity"
          reading={$humidity}
          unit="%"
          gaugeType="number"
          description="Current relative humidity."
        ></DataCard>
        <DataCard
          position=""
          title="Air Pressure"
          reading={$airPressure}
          unit={$airPressureUnits}
          gaugeType="context"
          description="Current air pressure."
        ></DataCard>
      </div>
    </Card>
    <div
      class="flex flex-col gap-4 md:gap-6 lg:gap-8 relative md:mx-auto md:max-w-[792px] 2xl:grid"
    >
      <Card
        position="relative z-10 col-start-2 col-span-1"
        title="Compare Data"
      >
        <DataCompare slot="content" />
      </Card>
      <GraphCard position=" col-start-2 col-span-1" />
    </div>
  </main>
</article>
