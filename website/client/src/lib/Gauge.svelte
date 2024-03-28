<script lang="ts">
  import { onMount } from "svelte";
  import "./gauge.js";
  let canvas:HTMLCanvasElement;
  let gauge:Object;
  let opts = {
    angle: 0.07, // The span of the gauge arc
    lineWidth: 0.12, // The line thickness
    radiusScale: 1, // Relative radius
    pointer: {
      length: 0.6, // // Relative to gauge radius
      strokeWidth: 0.035, // The thickness
      color: "#000000", // Fill color
    },
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: "#1D4ED8", // Colors
    colorStop: "#1E3A8A", // just experiment with them
    strokeColor: "#EFF6FF", // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true, // High resolution support
  };
  export let value = 0;
  export let max = 100;
  export let min = 0;


  onMount(() => {
    // let target = document.getElementById(canvasID);
    gauge = new Donut(canvas).setOptions(opts);
    gauge.maxValue = max;
    gauge.setMinValue(min);
    gauge.animationSpeed = 32; 
    gauge.set(value);
    
  });
    function setGauge(value){
        if(gauge){
            gauge.set(value)
        }
    }
   $: value, setGauge(value)

</script>
<canvas class=" opacity-65 top-0 left-0 mt-4 h-24" bind:this={canvas}>
</canvas>
<p class="absolute z-30 left-6 top-20 text-sm">{min}</p>
<p class="absolute z-30 left-[90px] top-20 text-sm">{max}</p>
