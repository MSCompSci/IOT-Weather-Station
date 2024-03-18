<script lang="ts">
    export let title:string|null = null;
    export let position:string;
</script>
<section class={position+" bg-slate-100 border p-8 rounded"}>
    {#if title}
    <h2 class="text-2xl font-semibold ">{title}</h2>
    {/if}
    <slot name="content"></slot>
</section>