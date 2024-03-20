<script lang="ts">
    export let position:string;
    import Toggle from "./Toggle.svelte";
</script>
<section class={position+" bg-slate-200 border p-8 rounded "}>
    <menu class="flex flex-row gap-2 justify-end ">
        <Toggle color="bg-red-500" label="Temperature"></Toggle>
        <Toggle color="bg-blue-500" label="Humidity"></Toggle>
        <Toggle color="bg-purple-500" label="Air Quality"></Toggle>
        <Toggle color="bg-green-500" label="Air Pressure"></Toggle>
        <Toggle color="bg-yellow-500" label="Light Level"></Toggle>
    </menu>
</section>