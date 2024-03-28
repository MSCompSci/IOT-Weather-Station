<script lang="ts">
    import { Button, Dropdown, DropdownItem, Radio } from "flowbite-svelte";
    import { ChevronDownSolid } from "flowbite-svelte-icons";
    export let data: "Temperature" | "Air Quality" | "Humidity" | "Air Pressure" = "Temperature";
  </script>
  
  <Button size="lg" class="font-coda bg-gradient-to-b from-blue-700/80 to-blue-900/80 backdrop-blur-sm" color="none"
    ><span class="min-w-20">{data}</span><ChevronDownSolid
      class=" h-3 ms-2 text-white dark:text-white w-3"
    /></Button
  >
  <Dropdown class="w-48 p-3 space-y-1">
    <DropdownItem class="rounded-md">
      <Radio name="dataselect" bind:group={data} value="Temperature">Temperature</Radio
      >
    </DropdownItem>
    <DropdownItem>
      <Radio name="dataselect" bind:group={data} value="Air Quality">Air Quality</Radio>
    </DropdownItem>
      <DropdownItem>
        <Radio name="dataselect" bind:group={data} value="Humidity">Humidity</Radio>
      </DropdownItem>
      <DropdownItem>
        <Radio name="dataselect" bind:group={data} value="Air Pressure">Air Pressure</Radio>
      </DropdownItem>
  </Dropdown>
  