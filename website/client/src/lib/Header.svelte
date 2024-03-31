<script lang="ts">
  import Dropdown from "./Dropdown.svelte";
  import Banner from "./Banner.svelte";
  type Location = {
    city: string;
    state: string;
  };
  export let location: Location = { city: "Oswego", state: "NY" };
</script>

<header class=" font-tomorrow h-24 backdrop-blur-sm bg-gradient-to-b from-blue-700/60 to-blue-900/60 text-slate-50  flex flex-col gap-0 items-center">
  <div class=" px-8 py-4 grid grid-cols-3  items-center w-full h-fit ">
    <span class="flex flex-row items-center gap-4 col-start-1">
      <img class="aspect-square w-14" src="../../static/IoT_Logo.png" alt="Logo" />
      <span class="text-xl hidden sm:block">{location.city + ", " + location.state}</span>
    </span>
    <h1 class=" backdrop-blur-sm bg-gradient-to-b from-blue-700/80 to-blue-900/80 w-fit mx-auto py-2 px-4 rounded-lg sm:text-3xl col-start-2 text-center">Weathernaut</h1>
    <menu class="flex flex-row items-center justify-end col-start-3">
      <li>
        <Dropdown />
      </li>
    </menu>
  </div>
  <!-- <Banner/> -->
</header>
