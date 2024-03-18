<script lang="ts">
    export let title:string;
    export let gaugeType:"number"|"gauge"|"context";
    export let description:string|null = null;
    export let reading:string;
    export let unit:string;
    export let position:string;
</script>
<div class={position+" bg-slate-100 border rounded flex flex-row "}>
    <div class=" self-center border bg-slate-50 w-32 h-24 rounded m-[2%] flex items-center justify-center">
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