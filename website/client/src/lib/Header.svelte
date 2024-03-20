<script lang="ts">
  import Dropdown from "./Dropdown.svelte";
  import DarkMode from "./DarkMode.svelte";
  import Banner from "./Banner.svelte";
  type Location = {
    city: string;
    state: string;
  };
  export let location: Location = { city: "Oswego", state: "NY" };
</script>

<header class=" h-24 bg-slate-50 dark:bg-slate-700 dark:text-slate-50  flex flex-col items-center">
  <div class=" px-8 py-4 grid grid-cols-3 border-b dark:border-slate-600 items-center w-full h-fit ">
    <span class="flex flex-row items-center gap-4 col-start-1">
      <img class="aspect-square w-14" src="../../static/IoT_Logo.png" alt="Logo" />
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
  <Banner/>
</header>
