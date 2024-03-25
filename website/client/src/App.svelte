<script lang="ts">
  import "@fortawesome/fontawesome-free/css/all.min.css";
  import Header from "./lib/Header.svelte";
  import Card from "./lib/Card.svelte";
  import CurrentCondition from "./lib/CurrentCondition.svelte";
  import DataCard from "./lib/DataCard.svelte";
  import DataCompare from "./lib/DataCompare.svelte";
  import GraphCard from "./lib/GraphCard.svelte";
</script>

<article class="bg-[url('../static/background.jpg')] bg-cover bg-fixed bg-center w-full min-h-screen ">
  <Header location={{city:"Oswego",state:"NY"}}/>
  <main class="max-w-[1472px] mt-20 gap-8 mx-8 2xl:mx-auto grid grid-cols-1 xl:grid-cols-2 grid-rows-1 ">
    <Card position="row-start-1 col-start-1 col-span-1 row-span-1" title="Current Conditions">
      <div slot="content" class="mt-4 grid gap-y-3 gap-x-8 grid-cols-[1fr_2fr] grid-rows-5">
        <CurrentCondition condition="Sunny" position="row-span-2"/>
        <DataCard position="xl:row-start-1 xl:col-start-2 row-span-1" title="Temperature" reading="100" unit="°F" gaugeType="number" description="Description"></DataCard>
        <DataCard position="xl:row-start-2 xl:col-start-2 row-span-1" title="Temperature" reading="100" unit="°F" gaugeType="number" description="Description"></DataCard>
        <DataCard position="xl:row-start-3 xl:col-start-1 xl:col-span-2 row-span-1" title="Temperature" reading="100" unit="°F" gaugeType="number" description="Description"></DataCard>
        <DataCard position="xl:row-start-4 xl:col-start-1 xl:col-span-2 row-span-1" title="Temperature" reading="100" unit="°F" gaugeType="number" description="Description"></DataCard>
        <DataCard position="xl:row-start-5 xl:col-start-1 xl:col-span-2 row-span-1" title="Temperature" reading="100" unit="°F" gaugeType="number" description="Description"></DataCard>
      </div>
    </Card>
    <div class="row-span-1 h-full grid grid-rows-[75fr_100fr] gap-y-8">
      <Card position="col-start-2 col-span-1" title="Compare Data">
        <DataCompare slot="content"/>
      </Card>
      <GraphCard position=" col-start-2 col-span-1"/>
    </div>
  </main>
</article>
