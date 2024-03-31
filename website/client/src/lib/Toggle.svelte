<script lang="ts">
    let toggle: boolean = false;
    export let label:string;
    export let color:string;
  </script>
  
  <label
    for="{label}-toggle"
    title="Toggle {label}"
    class="flex flex-col items-center cursor-pointer select-none"
  >
    <div class="relative hover:scale-105">
      <input
        id="{label}-toggle"
        type="checkbox"
        class="sr-only peer"
        value=""
        bind:checked={toggle}
      />
      <div
        class="backdrop-blur-sm bg-gradient-to-br from-blue-50/20 to-blue-200/15 border border-blue-900/35 shadow  block h-8 w-16 rounded-full  peer-focus-within:border-black peer-focus-within:border-2 "
      ></div>
      <div
        class:translate-x-8={toggle}
        class:bg-gradient-to-br={!toggle}
        class:bg-transparent={!toggle}
        class={color+"  backdrop-blur-sm  from-blue-50/20 to-blue-200/15 border-blue-900/35   preload absolute text-slate-950  shadow-xl border flex justify-center w-7 h-7 rounded-full left-[2px] top-[2px]  transition"}
      >
        <i
          aria-hidden="true"
          class=" fa-solid fa-xl self-center"
        ></i>
      </div>
      <span class="sr-only">Toggle {label}</span>
    </div>
    <p class="text-xs 2xl:text-sm">{label}</p>
  </label>
  
  