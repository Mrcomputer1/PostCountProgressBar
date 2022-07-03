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
            <svelte:element this={part.tag} {...part.attrs}>{part.body}</svelte:element>
        {/if}
    {/each}
{/if}