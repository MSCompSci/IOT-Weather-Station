<script lang="ts">
  import Toggle from "./Toggle.svelte";
  let toggleSelected = "Temperature";
  type ToggleCon = { label: string; color: string };
  let toggles: ToggleCon[] = [
    {
      label: "Temperature",
      color: "bg-red-500",
    },
    {
      label: "Humidity",
      color: "bg-blue-500",
    },
    {
      label: "Air Quality",
      color: "bg-purple-500",
    },
    {
      label: "Air Pressure",
      color: "bg-green-500",
    },
    {
      label: "Light Level",
      color: "bg-amber-500",
    },
  ];
  //toggleSelected.includes(toggleCon.label)
</script>

<menu
  class="flex flex-row flex-wrap w-full sm:w-fit gap-2 justify-center items-center mt-4"
>
  {#each toggles as toggleCon}
    <Toggle
      bind:group={toggleSelected}
      label={toggleCon.label}
      color={toggleCon.color}
    />
  {/each}
</menu>
