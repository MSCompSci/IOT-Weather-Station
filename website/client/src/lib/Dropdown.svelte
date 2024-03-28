<script lang="ts">
  import { Button, Dropdown, DropdownItem, Radio } from "flowbite-svelte";
  import { ChevronDownSolid } from "flowbite-svelte-icons";
  import {units} from "../stores"
</script>

<Button size="lg" class="font-coda bg-gradient-to-b from-blue-700/80 to-blue-900/80 backdrop-blur-sm" color="none"
  ><span class="min-w-20">{$units}</span><ChevronDownSolid
    class=" h-3 ms-2 text-white dark:text-white w-3"
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
