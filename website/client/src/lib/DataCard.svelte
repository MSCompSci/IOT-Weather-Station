<script lang="ts">
    export let title:string;
    export let gaugeType:"number"|"gauge"|"context";
    export let description:string|null = null;
    export let reading:string;
    export let unit:string;
    export let position:string;
</script>
<div class={position+" rounded-lg backdrop-blur-sm bg-gradient-to-br from-blue-500/50 to-blue-800/50 border border-blue-900/25 text-slate-50 font-coda flex flex-row "}>
    <div class=" self-center backdrop-blur-sm bg-gradient-to-br from-blue-50/20 to-blue-200/15 border border-blue-900/35 w-32 h-24 rounded-lg m-[2%] flex items-center justify-center">
        {#if gaugeType==="number"}
            <p class="text-3xl">{reading}{unit}</p>
        {:else if gaugeType==="gauge"}
        <p class="text-3xl">{reading}{unit}</p>
        {:else if gaugeType==="context"}
        <p class="text-3xl">{reading}{unit}</p>
        {/if}
    </div>
    <div class="mt-4">
        <h3 class="text-2xl">{title}</h3>
        <p class="mt-2">{description}</p>
    </div>


</div>