<script lang="ts">
    export let position:string;
    import Toggle from "./Toggle.svelte";
</script>
<section class={position+" backdrop-blur-sm bg-gradient-to-br from-blue-300/30 to-blue-600/30 border border-blue-900/25 text-slate-50 font-coda p-8 rounded "}>
    <menu class="flex flex-row gap-2 justify-end ">
        <Toggle color="bg-red-500" label="Temperature"></Toggle>
        <Toggle color="bg-blue-500" label="Humidity"></Toggle>
        <Toggle color="bg-purple-500" label="Air Quality"></Toggle>
        <Toggle color="bg-green-500" label="Air Pressure"></Toggle>
        <Toggle color="bg-amber-500" label="Light Level"></Toggle>
    </menu>
</section>