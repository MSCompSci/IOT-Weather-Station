<script lang="ts">
    import "@fortawesome/fontawesome-free/css/all.min.css";
    import { onMount } from "svelte";
    let darkTheme: boolean = false;
    onMount(() => {
      let theme = sessionStorage.getItem("theme");
      if (theme === "true") {
        darkTheme = true;
      }
      else if(theme==="false"){
        darkTheme = false;
      }
      else {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        // console.log("not set, prefers dark");
        darkTheme = true;
        return;
        }
        darkTheme = false;
        return;
      }
    });
  
    function setTheme() {
      if (darkTheme === true) {
        sessionStorage.setItem("theme", "true");
        document.documentElement.classList.add("dark");
      } else {
        sessionStorage.setItem("theme", "false");
        document.documentElement.classList.remove("dark");
      }
    }
  </script>
  
  <label
    for="dm-toggle"
    title="Toggle Dark Mode"
    class="flex items-center cursor-pointer select-none"
  >
    <div class="relative hover:scale-105">
      <input
        id="dm-toggle"
        type="checkbox"
        class="sr-only peer"
        value=""
        bind:checked={darkTheme}
        on:change={setTheme}
      />
      <div
        class="bg-slate-400 border-slate-300 shadow dark:bg-black block h-11 w-20 rounded-full border dark:border-slate-900 peer-focus-within:border-black peer-focus-within:border-2 dark:peer-focus-within:border-white"
      ></div>
      <div
        class:translate-x-9={darkTheme}
        class="bg-slate-100 border-slate-200 dark:bg-slate-700 dark:border-slate-700 preload absolute text-slate-950 dark:text-slate-50 shadow-xl border flex justify-center w-10 h-10 rounded-full left-[2px] top-[2px]  transition"
      >
        <i
          aria-hidden="true"
          class=" fa-solid fa-xl self-center"
          class:fa-moon={darkTheme}
          class:fa-sun={!darkTheme}
        ></i>
      </div>
      <span class="sr-only">Toggle Dark Mode</span>
    </div>
  </label>
  
  