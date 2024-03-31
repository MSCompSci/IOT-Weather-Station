<script lang="ts">
    export let position:string;
    import Toggle from "./Toggle.svelte";
    import { Tabs, TabItem } from 'flowbite-svelte';
    import Graph from "./Graph.svelte";
</script>
<section class={position+" backdrop-blur-sm bg-gradient-to-br from-blue-300/30 to-blue-600/30 border border-blue-900/25 text-slate-50 font-coda p-8 rounded-lg "}>

    <Tabs style="pill" contentClass="p-0 bg-gradient-to-br from-blue-300/30 to-blue-600/30 rounded-lg mt-4" class="flex flex-row items-center justify-between text-sm font-medium text-center disabled:cursor-not-allowed">
        <div class="flex mx-auto sm:mx-0 flex-row gap-2 bg-gradient-to-br from-blue-300/30 to-blue-600/30 p-2 backdrop-blur-sm rounded-lg">
            <TabItem 
            disabled
            defaultClass="inline-block  font-medium text-center disabled:cursor-not-allowed"
            inactiveClasses="px-4 py-2 rounded-lg hover:text-gray-600 hover:bg-gray-50 bg-gradient-to-br from-blue-50/30 to-blue-200/30 "
            activeClasses="px-4 py-2 rounded-lg hover:bg-gray-50 bg-gradient-to-br hover:from-blue-500/60 hover:to-blue-700/60 from-blue-700/60 to-blue-900/60 border-blue-900/25">
                <span slot="title" class="text-xl">Forecast</span>
                
            </TabItem>
            <TabItem 
            open
            
            defaultClass="inline-block font-medium text-center disabled:cursor-not-allowed"
            inactiveClasses="px-4 py-2 rounded-lg hover:text-gray-600 hover:bg-gray-50 bg-gradient-to-br from-blue-50/30 to-blue-200/30 "
            activeClasses="px-4 py-2 rounded-lg hover:bg-gray-50 bg-gradient-to-br hover:from-blue-500/60 hover:to-blue-700/60 from-blue-700/60 to-blue-900/60 border-blue-900/25">
                <span slot="title" class="text-xl">Past Data</span>
                <Graph/>
            </TabItem>
        </div>
        <menu class="flex flex-row flex-wrap w-full sm:w-fit gap-2 justify-center items-center mt-4">
            <li>
                <Toggle color="bg-red-500" label="Temperature"></Toggle>
            </li>
            <li>
                <Toggle color="bg-blue-500" label="Humidity"></Toggle>
            </li>
            <li>
                <Toggle color="bg-purple-500" label="Air Quality"></Toggle>
            </li>
            <li>
                <Toggle color="bg-green-500" label="Air Pressure"></Toggle>
            </li>
            <li>
                <Toggle color="bg-amber-500" label="Light Level"></Toggle>
            </li>
        </menu>
    </Tabs>
</section>