<script>
    import { intlStore } from '../i18n';

    export let id;
    export let defaultMessage;
    export let values = {};

    let message = $intlStore.formatMessage({
        id, defaultMessage
    }, values);
</script>

{#if typeof message === "string"}
    {message}
{:else}
    {#each message as part}
        {#if typeof part === "string"}
            {part}
        {:else}
            <!-- Something is casuing Svelte to not convert {...parts.attrs}, so we get this hack for now... Very likely to break at some point. -->
            <svelte:element this={part.tag} {...eval("ctx[5].attrs")}>{part.body}</svelte:element>
        {/if}
    {/each}
{/if}