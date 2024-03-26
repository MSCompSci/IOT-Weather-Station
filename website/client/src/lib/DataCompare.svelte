<script lang="ts">
    import DataDropdown from "./DataDropdown.svelte";
    let publicData:string = "50"
    let reading:string="60"
</script>
<div class="grid grid-cols-[1fr_2fr] grid-rows-1 gap-4 mt-4">
    <div class="flex flex-col h-full gap-4">
        <DataDropdown/>
        <div class="backdrop-blur-sm bg-gradient-to-br from-blue-50/20 to-blue-200/15 border border-blue-900/35 rounded w-full h-full flex justify-center items-center mx-auto">
            {#if reading>publicData}
            <p class="text-5xl">{Number(reading)-Number(publicData)}</p>
            {:else if reading<publicData}
            <p class="text-5xl">{Number(publicData)-Number(reading)}</p>
            {:else}
            <p class="text-5xl">{"="}</p>
            {/if}
        </div>
    </div>
    <div class="  flex flex-row backdrop-blur-sm bg-gradient-to-br from-blue-500/50 to-blue-800/50 border border-blue-900/25 gap-4 text-center rounded-lg">
        <div class="w-3/5  backdrop-blur-sm bg-gradient-to-br from-blue-50/20 to-blue-200/15 border border-blue-900/35 ml-2 my-2  rounded-lg">
            <h4 class="text-xl mt-4">Results</h4>
            <hr class="w-1/3 mx-auto"/>
            {#if reading>publicData}
            <p class="mt-4 mx-4 text-sm ">Station readings are {Number(reading)-Number(publicData)} higher than publicly available data.</p>
            {:else if reading<publicData}
            <p class="mt-4 mx-4 text-sm">Station readings are {Number(publicData)-Number(reading)} lower than publicly available data.</p>
            {:else}
            <p class="mt-4 mx-4 text-sm">Station readings are the same as publicly available data.</p>
            {/if}
        </div>
        <div class="w-4/5 backdrop-blur-sm bg-gradient-to-br from-blue-50/20 to-blue-200/15 border border-blue-900/35 mr-2 my-2 rounded-lg">
            <h4 class="text-xl mt-4">Public Data</h4>
            <hr class="w-1/3 mx-auto"/>

                <p class="text-3xl">{publicData}</p>

        </div>
    </div>
</div>