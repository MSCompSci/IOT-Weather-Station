<script lang="ts">
  import Header from "./lib/Header.svelte";
  import { onMount } from "svelte";
  onMount(()=>{
    let theme = checkTheme();
    if(theme) {
      setTheme(theme);
    }
    else {
      setTheme("false")
    }
  })
  function checkTheme() {
    // Check for existing theme/preference
    if (
      typeof sessionStorage !== undefined &&
      sessionStorage.getItem("theme")
    ) {
      // console.log("found ", sessionStorage.getItem("theme"));
      return sessionStorage.getItem("theme");
    }
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      // console.log("not set, prefers dark");
      return "true";
    }
    // console.log("set light");
    return "false";
  }
  function setTheme(theme:string) {
    // Set dark/light theme
    if (theme === "true") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    sessionStorage.setItem("theme", theme);
  }
</script>

<article class="bg-slate-50 dark:bg-slate-800 w-full min-h-screen">
  <Header location={{city:"Oswego",state:"NY"}}/>
  <main></main>
</article>
