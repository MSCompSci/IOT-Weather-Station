<script lang="ts">
  export let title: string;
  export let gaugeType: "number" | "gauge" | "context";
  export let description: string | null = null;
  export let reading: number|string;
  export let unit: string;
  export let position: string;
  import Gauge from "./Gauge.svelte";
</script>

<div
  class={position +
    "w-full h-full p-1 rounded-lg backdrop-blur-sm bg-gradient-to-br from-blue-500/50 to-blue-800/50 border border-blue-900/25 text-slate-50 font-coda flex flex-row "}
>
  <div
    class=" w-24 sm:min-w-32 h-24 aspect-square self-center backdrop-blur-sm bg-gradient-to-br from-blue-50/20 to-blue-200/15 border border-blue-900/35  rounded-lg m-[2%] flex items-center justify-center"
  >
    {#if gaugeType === "number"}
      <p class="text-3xl">{reading}{unit}</p>
    {:else if gaugeType === "gauge"}
      <div
        class="relative grid grid-cols-1 grid-rows-1 justify-center items-center content-center text-center"
      >
        <div class="relative col-start-1 row-start-1 col-span-1 row-span-1 w-full h-full flex items-center justify-center">
          {#if unit === "μg/m3" && typeof(reading)==="number"}
            <Gauge value={reading} max={600} min={0} unit={unit}></Gauge>
          {:else if typeof(reading)==="number"}
            <Gauge value={reading} max={10} min={0} unit={unit}></Gauge>
          {/if}
        </div>
      </div>
    {:else if gaugeType === "context"}
      <div class="flex flex-col justify-center items-center">
        {#if (unit==="in-Hg"&&reading < "29.92")||unit==="mb"&&reading<"1013.2"}
        <p>Low</p>
        {:else if (unit==="in-Hg"&&reading > "29.92")||unit==="mb"&&reading>"1013.2"}
        <p>High</p>
        {:else}
        <p>Average</p>
        {/if}
        <p class="text-3xl">{reading}</p>
        <p class="text-sm">{unit}</p>
      </div>
    {/if}
  </div>
  <div class="mt-2 mx-1">
    <h3 class="text-2xl">{title}</h3>
    <p class="mt-2 pr-4 text-sm">{description}</p>
  </div>
</div>
