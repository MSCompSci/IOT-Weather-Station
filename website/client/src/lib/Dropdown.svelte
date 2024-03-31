<script lang="ts">
  import { Button, Dropdown, DropdownItem, Radio } from "flowbite-svelte";
  import { ChevronDownSolid } from "flowbite-svelte-icons";
  import {units} from "../stores"
</script>

<Button size="lg" class=" w-16 sm:w-auto font-coda bg-gradient-to-b from-blue-700/80 to-blue-900/80 backdrop-blur-sm" color="none"
  ><span class=" text-sm sm:text-base md:text-lg sm:min-w-20">{$units}</span><ChevronDownSolid
    class=" h-3 sm:ms-2 text-white dark:text-white w-3"
  /></Button
>
<Dropdown class="w-48 p-3 space-y-1">
  <DropdownItem class="rounded-md">
    <Radio class="font-coda" name="unitselect" bind:group={$units} value="Imperial">Imperial</Radio
    >
  </DropdownItem>
  <DropdownItem>
    <Radio class="font-coda" name="unitselect" bind:group={$units} value="Metric">Metric</Radio>
  </DropdownItem>
</Dropdown>
