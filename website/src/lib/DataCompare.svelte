<script lang="ts">
  import DataDropdown from "./DataDropdown.svelte";
  let dataType: "Temperature" | "Air Quality" | "Humidity" | "Air Pressure";
  import {
    tempUnits,
    tempDiff,
    airPressureUnits,
    airQualityDiff,
    airPressureDiff,
    humidityDiff,
    pubTemp,
    pubHumidity,
    pubAirQuality,
    pubAirPressure,
  } from "../stores";
</script>

<div class=" grid md:grid-cols-[1fr_2fr] p-4 md:px-6 md:pb-6 sm:flex-row sm:gap-0 gap-4 justify-center">
  <div class=" flex flex-col h-full gap-4 sm:gap-2">
    <DataDropdown bind:data={dataType} />
    <div
      class=" 2xl:h-44 mx-6 sm:mx-2 text-center min-h-36 backdrop-blur-sm bg-gradient-to-br from-blue-50/20 to-blue-200/15 border border-blue-900/35 rounded flex justify-center items-center"
    >
    <p class="mx-6 2xl:text-lg">
      {#if dataType === "Temperature"}
        Temperature in Farenheight or Celcius
      {:else if dataType === "Air Quality"}
        Measure of particulate matter smaller than 2.5 microns per cubic meter
      {:else if dataType === "Humidity"}
        Relative water concentration in the air
      {:else if dataType === "Air Pressure"}
        Air pressure in millibars (mb) or inches of mercury (in-Hg)
      {/if}
    </p>
    </div>
  </div>
  <div
    class=" sm:ml-6 grid grid-cols-2 backdrop-blur-sm bg-gradient-to-br from-blue-500/50 to-blue-800/50 border border-blue-900/25 gap-4 text-center rounded-lg"
  >
    <div
      class=" backdrop-blur-sm bg-gradient-to-br from-blue-50/20 to-blue-200/15 border border-blue-900/35 ml-2 my-2 rounded-lg"
    >
      <h4 class="text-xl mt-4 2xl:text-2xl">Results</h4>
      <hr class="w-1/3 mx-auto" />
      {#if dataType === "Temperature"}
        {#if parseFloat($tempDiff) > 0}
          <p class="text-4xl 2xl:text-5xl mt-4">+{$tempDiff}{$tempUnits}</p>
          <p class="text-sm mx-4">
            Weathernaut readings are {$tempDiff}{$tempUnits} higher than publicly
            available data
          </p>
        {:else if parseFloat($tempDiff) < 0}
          <p class="text-4xl 2xl:text-5xl mt-4">{$tempDiff}{$tempUnits}</p>
          <p class="text-sm mx-4">
            Weathernaut readings are {Math.abs(parseFloat($tempDiff))}{$tempUnits} lower than
            publicly available data
          </p>
        {:else}
          <p class="text-4xl 2xl:text-5xl mt-4">{$tempDiff}{$tempUnits}</p>
          <p class="text-sm mx-4">
            Weathernaut readings are equal to publicly available data
          </p>
        {/if}
      {:else if dataType === "Air Quality"}
        {#if parseFloat($airQualityDiff) > 0}
          <p class="text-2xl sm:text-4xl 2xl:text-5xl mt-4 ">+{$airQualityDiff} <span class="text-base">μg/m3</span></p>
          <p class="text-sm mx-4">
            Weathernaut readings are {$airQualityDiff} μg/m3 higher than publicly available
            data
          </p>
        {:else if parseFloat($airQualityDiff) < 0}
          <p class="text-2xl sm:text-4xl 2xl:text-5xl mt-4">{$airQualityDiff} <span class="text-base">μg/m3</span></p>
          <p class="text-sm mx-4">
            Weathernaut readings are {Math.abs(parseFloat($airQualityDiff))} μg/m3 lower than publicly
            available data
          </p>
        {:else}
          <p class="text-2xl sm:text-4xl 2xl:text-5xl mt-4">{$airQualityDiff} <span class="text-base">μg/m3</span></p>
          <p class="text-sm mx-4">
            Weathernaut readings are equal to publicly available data
          </p>
        {/if}
      {:else if dataType === "Humidity"}
        {#if parseFloat($humidityDiff) > 0}
          <p class="text-4xl 2xl:text-5xl mt-4">+{$humidityDiff}%</p>
          <p class="text-sm mx-4">
            Weathernaut readings are {$humidityDiff}% higher than publicly
            available data
          </p>
        {:else if parseFloat($humidityDiff) < 0}
          <p class="text-4xl 2xl:text-5xl mt-4">{$humidityDiff}%</p>
          <p class="text-sm mx-4">
            Weathernaut readings are {Math.abs(parseFloat($humidityDiff))}% lower than
            publicly available data
          </p>
        {:else}
          <p class="text-4xl 2xl:text-5xl mt-4">{$humidityDiff}%</p>
          <p class="text-sm mx-4">
            Weathernaut readings are equal to publicly available data
          </p>
        {/if}
      {:else if dataType === "Air Pressure"}
        {#if parseFloat($airPressureDiff) > 0}
          <p class="text-2xl sm:text-4xl 2xl:text-5xl mt-4">
            +{$airPressureDiff}<span class="text-base">{$airPressureUnits}</span
            >
          </p>
          <p class="text-sm mx-4">
            Weathernaut readings are {$airPressureDiff}
            {$airPressureUnits} higher than publicly available data
          </p>
        {:else if parseFloat($airPressureDiff) < 0}
          <p class="text-2xl sm:text-4xl 2xl:text-5xl mt-4">
            {$airPressureDiff}<span class="text-base">{$airPressureUnits}</span>
          </p>
          <p class="text-sm mx-4">
            Weathernaut readings are {Math.abs(parseFloat($airPressureDiff))}
            {$airPressureUnits} lower than publicly available data
          </p>
        {:else}
          <p class="text-2xl sm:text-4xl 2xl:text-5xl mt-4">
            {$airPressureDiff}<span class="text-base">{$airPressureUnits}</span>
          </p>
          <p class="text-sm mx-4">
            Weathernaut readings are equal to publicly available data
          </p>
        {/if}
      {/if}
    </div>
    <div
      class=" backdrop-blur-sm bg-gradient-to-br from-blue-50/20 to-blue-200/15 border border-blue-900/35 mr-2 my-2 rounded-lg"
    >
      <h4 class="text-xl mt-4 2xl:text-2xl">Public Data</h4>
      <hr class="w-1/3 mx-auto" />
      {#if dataType === "Temperature"}
        <p class="text-4xl 2xl:text-5xl mt-4">{$pubTemp} {$tempUnits}</p>
        <p class="text-sm w-[80%] mx-auto">
          Temperature reading from external API data
        </p>
      {:else if dataType === "Air Quality"}
        <p class="text-nowrap text-2xl sm:text-4xl 2xl:text-5xl mt-4">{$pubAirQuality} <span class="text-base">μg/m3</span></p>
        <p class="text-sm w-[80%] mx-auto">
          Air quality PM 2.5 reading from external API data
        </p>
      {:else if dataType === "Humidity"}
        <p class="text-4xl 2xl:text-5xl mt-4">{$pubHumidity}%</p>
        <p class="text-sm w-[80%] mx-auto">
          Humidity reading from external API data
        </p>
      {:else if dataType === "Air Pressure"}
        <p class="text-2xl sm:text-4xl 2xl:text-5xl mt-4">
          {$pubAirPressure}<span class="text-base">{$airPressureUnits}</span>
        </p>
        <p class="text-sm w-[80%] mx-auto">
          Air pressure reading from external API data
        </p>
      {/if}
    </div>
  </div>
</div>
