<script lang="ts">
  import Dropdown from "./Dropdown.svelte";
  import DarkMode from "./DarkMode.svelte";
  type Location = {
    city: string;
    state: string;
  };
  export let location: Location = { city: "Oswego", state: "NY" };
</script>

<header class=" h-24 bg-slate-300 flex flex-row items-center">
  <div class=" mx-8 grid grid-cols-3 items-center border w-full h-fit">
    <span class="flex flex-row gap-4 col-start-1">
      <img src="" alt="Logo" />
      <span class="text-2xl">{location.city + ", " + location.state}</span>
    </span>
    <h1 class=" text-2xl col-start-2 text-center">IOT Weather Station</h1>
    <menu class="flex flex-row items-center justify-end gap-4 col-start-3">
      <li>
        <Dropdown />
      </li>
      <li>
        <DarkMode/>
      </li>
    </menu>
  </div>
</header>
