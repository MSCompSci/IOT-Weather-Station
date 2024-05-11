<script lang="ts">
    export let group:string;
    export let label:string;
    export let color:string;
  </script>
  
  <label title="Toggle {label} data visibility">
    <div class="relative hover:scale-105">
        <input class="sr-only peer" id="radio-{label}" type="radio" name="data type" value={label} bind:group={group}/>
        <div class="backdrop-blur-sm bg-gradient-to-br from-blue-50/20 to-blue-200/15 border border-blue-900/35 shadow  block h-8 w-16 rounded-full  peer-focus-within:border-black peer-focus-within:border-2 "></div>
        <div class:translate-x-8={group.includes(label)}
        class:bg-gradient-to-br={!group.includes(label)}
        class:bg-transparent={!group.includes(label)}
        class={color+"  backdrop-blur-sm  from-blue-50/20 to-blue-200/15 border-blue-900/35   preload absolute text-slate-950  shadow-xl border flex justify-center w-7 h-7 rounded-full left-[2px] top-[2px]  transition"}>
        </div>
        <span class="sr-only">Toggle {label}</span>
    </div>
    
    <p class="text-xs 2xl:text-sm">{label}</p>
</label>
  
  