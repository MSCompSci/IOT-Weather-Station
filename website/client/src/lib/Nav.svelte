<script>
  import {
    Navbar,
    NavBrand,
    NavUl,
    NavHamburger,
    DarkMode,
    NavLi,
  } from "flowbite-svelte";
</script>

<Navbar rounded color="form" class="w-5/6 mx-auto">
  <NavBrand href="/">
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >Logo</span
    >
  </NavBrand>
  <ul class="flex flex-row items-center gap-8">
    <li>Location</li>
    <li><DarkMode /></li>
  </ul>
</Navbar>
