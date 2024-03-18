<script lang="ts">
    export let title:string|null = null;
    export let position:string;
</script>
<section class={position+" bg-slate-200 border p-8 rounded"}>
    {#if title}
    <h2 class="text-4xl font-semibold ">{title}</h2>
    {/if}
    <slot name="content"></slot>
</section>