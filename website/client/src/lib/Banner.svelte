<script lang="ts">
    import { Banner } from 'flowbite-svelte';
    import { Alert } from 'flowbite-svelte';
    import "@fortawesome/fontawesome-free/css/all.min.css";
    export let shortMessage:string = "Test Message"
    export let fullMessage:string = "Test full message"
    let dialog:HTMLDialogElement;
    let open = false;
    function dialogToggle(){
        if(!open){
            dialog.show();
            open=true;
        }
        else {
            dialog.close()
            open=false;
        }
    }
</script>
<div id="banner" class=" h-full w-full flex justify-center p-4 mt-2 bg-gradient-to-b from-blue-700/60 to-blue-900/60 backdrop-blur-sm">
    <p class="flex items-center font-normal text-slate-50  text-base">
        <span>
          <button type="button" on:click={dialogToggle}>
              {shortMessage}
              <span class="sr-only">View full message</span>
              <i class:fa-chevron-up={open} class:fa-chevron-down={!open} class="fa-solid fa-xl"></i>
          </button>
        </span>
      </p>
</div>
<dialog bind:this={dialog} class="relative w-full text-center py-8">
    <h2>{fullMessage}</h2>
</dialog>