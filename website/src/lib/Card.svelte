<script lang="ts">
    export let title:string|null = null;
    export let position:string;
</script>
<section class={position+" rounded-lg backdrop-blur-sm bg-gradient-to-br from-blue-300/30 to-blue-600/30 border border-blue-900/25 text-slate-50 font-coda"}>
    {#if title}
    <h2 class="text-2xl text-center 2xl:text-left 2xl:ml-8 2xl:text-3xl font-tomorrow m-4">{title}</h2>
    {/if}
    <slot name="content"></slot>
</section>