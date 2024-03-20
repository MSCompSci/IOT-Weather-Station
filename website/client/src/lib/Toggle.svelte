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
        class="bg-slate-400 border-slate-300 shadow dark:bg-black block h-9 w-20 rounded-full border dark:border-slate-900 peer-focus-within:border-black peer-focus-within:border-2 dark:peer-focus-within:border-white"
      ></div>
      <div
        class:translate-x-11={toggle}
        class:bg-slate-50={!toggle}
        class:dark:bg-slate-500={!toggle}
        class={color+" border-slate-200  dark:border-slate-700 preload absolute text-slate-950 dark:text-slate-50 shadow-xl border flex justify-center w-8 h-8 rounded-full left-[2px] top-[2px]  transition"}
      >
        <i
          aria-hidden="true"
          class=" fa-solid fa-xl self-center"
        ></i>
      </div>
      <span class="sr-only">Toggle {label}</span>
    </div>
    <p>{label}</p>
  </label>
  
  