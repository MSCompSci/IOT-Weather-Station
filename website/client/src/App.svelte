<script lang="ts">
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import Header from "./lib/Header.svelte";
  import Card from "./lib/Card.svelte";
  import CurrentCondition from "./lib/CurrentCondition.svelte";
  import DataCard from "./lib/DataCard.svelte";
  import DataCompare from "./lib/DataCompare.svelte";
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
  <main class="max-w-[1472px] mt-20 gap-8 mx-8 2xl:mx-auto grid grid-cols-1 xl:grid-cols-2  ">
    <Card position="xl:col-start-1 xl:col-span-1 xl:row-span-3" title="Current Conditions">
      <div slot="content" class="mt-4 grid gap-y-3 gap-x-8 grid-cols-[1fr_2fr] grid-rows-5">
        <CurrentCondition condition="Sunny" position="row-span-2"/>
        <DataCard position="xl:row-start-1 xl:col-start-2 row-span-1" title="Temperature" reading="100" unit="°F" gaugeType="number" description="Description"></DataCard>
        <DataCard position="xl:row-start-2 xl:col-start-2 row-span-1" title="Temperature" reading="100" unit="°F" gaugeType="number" description="Description"></DataCard>
        <DataCard position="xl:row-start-3 xl:col-start-1 xl:col-span-2 row-span-1" title="Temperature" reading="100" unit="°F" gaugeType="number" description="Description"></DataCard>
        <DataCard position="xl:row-start-4 xl:col-start-1 xl:col-span-2 row-span-1" title="Temperature" reading="100" unit="°F" gaugeType="number" description="Description"></DataCard>
        <DataCard position="xl:row-start-5 xl:col-start-1 xl:col-span-2 row-span-1" title="Temperature" reading="100" unit="°F" gaugeType="number" description="Description"></DataCard>
      </div>
    </Card>
    <Card position="xl:col-start-2 xl:col-span-1 xl:row-span-1" title="Compare Data">
      <DataCompare slot="content"/>
    </Card>
  </main>
</article>
