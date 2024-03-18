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
<Banner id="banner" divClass="z-10 flex justify-between p-4 dark:bg-slate-700 dark:border-slate-600" dismissable={false}>
    <p class="flex items-center font-normal text-slate-500 dark:text-slate-200 text-base">
      <span>
        <button type="button" on:click={dialogToggle}>
            {shortMessage}
            <span class="sr-only">View full message</span>
            <i class:fa-chevron-up={open} class:fa-chevron-down={!open} class="fa-solid fa-xl"></i>
        </button>
      </span>
    </p>
</Banner>
<dialog bind:this={dialog} class="relative w-full text-center py-8 bg-slate-100 dark:bg-slate-700 dark:text-slate-200 border-b dark:border-slate-600">
    <h2>{fullMessage}</h2>
</dialog>