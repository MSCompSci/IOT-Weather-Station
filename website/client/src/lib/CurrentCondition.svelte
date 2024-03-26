<script lang="ts">
    export let condition:string;
    export let position:string;
</script>
<div class={position+" rounded-lg aspect-square backdrop-blur-sm bg-gradient-to-br from-blue-500/50 to-blue-800/50 border border-blue-900/25 text-slate-50 font-coda flex flex-col gap-2 items-center justify-center"}>
    <h3 class="sr-only">Current Condition</h3>
    {#if condition === "Sunny" || condition==="Clear" || condition==="Mostly Clear" || condition==="Mostly Sunny"}
    <i class="fa-regular fa-sun fa-6x"></i>
    {:else if condition==="Partly Cloudy" || condition==="Partly Sunny"}
    <i class="fa-solid fa-cloud-sun fa-6x"></i>
    {:else if condition==="Mostly Cloudy" || condition==="Cloudy"}
    <i class="fa-solid fa-cloud-sun fa-6x"></i>
    {:else if condition==="Scattered Showers"}
    <i class="fa-solid fa-cloud-sun-rain fa-6x"></i>
    {:else if condition==="Rain"}
    <i class="fa-solid fa-cloud-rain fa-6x"></i>
    {:else if condition==="Heavy Showers"}
    <i class="fa-solid fa-cloud-showers-heavy fa-6x"></i>
    {:else if condition==="Thunderstorm"}
    <i class="fa-solid fa-cloud-bolt fa-6x"></i>
    {:else if condition==="Snow"}
    <i class="fa-solid fa-snowflake fa-6x"></i>
    {:else if condition==="Windy"}
    <i class="fa-solid fa-wind fa-6x"></i>
    {/if}
    <p class="text-2xl">{condition}</p>
</div>