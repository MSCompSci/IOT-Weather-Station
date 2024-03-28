<script lang="ts">
    import DataDropdown from "./DataDropdown.svelte";
    let publicData:string = "50"
    let reading:string="60"
    let dataType:"Temperature" | "Air Quality" | "Humidity" | "Air Pressure";
    import {temp, tempUnits, airPressureUnits, airQuality, humidity, airPressure, pubTemp, pubHumidity, pubAirQuality, pubAirPressure} from '../stores'
</script>
<div class="grid grid-cols-[1fr_2fr] grid-rows-1 gap-4 mt-4">
    <div class="flex flex-col h-full gap-4">
        <DataDropdown bind:data={dataType}/>
        <div class=" text-center min-h-36 backdrop-blur-sm bg-gradient-to-br from-blue-50/20 to-blue-200/15 border border-blue-900/35 rounded w-full h-full flex justify-center items-center mx-auto">
            {#if dataType==="Temperature"}
                <p>Temperature description</p>
            {:else if dataType==="Air Quality"}
                <p>Air quality description</p>
            {:else if dataType==="Humidity"}
                <p>Humidity description</p>
            {:else if dataType==="Air Pressure"}
                <p>Air pressure description</p>
            {/if}
        </div>
    </div>
    <div class="  flex flex-row backdrop-blur-sm bg-gradient-to-br from-blue-500/50 to-blue-800/50 border border-blue-900/25 gap-4 text-center rounded-lg">
        <div class="w-3/5  backdrop-blur-sm bg-gradient-to-br from-blue-50/20 to-blue-200/15 border border-blue-900/35 ml-2 my-2  rounded-lg">
            <h4 class="text-xl mt-4">Results</h4>
            <hr class="w-1/3 mx-auto"/>
            <p class="text-6xl mt-2">{reading}</p>
        </div>
        <div class="w-4/5 backdrop-blur-sm bg-gradient-to-br from-blue-50/20 to-blue-200/15 border border-blue-900/35 mr-2 my-2 rounded-lg">
            <h4 class="text-xl mt-4">Public Data</h4>
            <hr class="w-1/3 mx-auto"/>
            
                {#if dataType==="Temperature"}
                <p class="text-5xl mt-2">{$pubTemp} {$tempUnits}</p>
                <p class="text-sm w-[80%] mx-auto">Temperature reading from external API data</p>
                {:else if dataType==="Air Quality"}
                <p class="text-5xl mt-2">{$pubAirQuality} AQI</p>
                <p class="text-sm w-[80%] mx-auto">Air quality reading from external API data</p>
                {:else if dataType==="Humidity"}
                <p class="text-5xl mt-2">{$pubHumidity}%</p>
                <p class="text-sm w-[80%] mx-auto">Humidity reading from external API data</p>
                {:else if dataType==="Air Pressure"}
                <p class="text-5xl mt-2">{$pubAirPressure}<span class="text-base">{$airPressureUnits}</span></p>
                <p class="text-sm w-[80%] mx-auto">Air pressure reading from external API data</p>
                {/if}
            

        </div>
    </div>
</div>