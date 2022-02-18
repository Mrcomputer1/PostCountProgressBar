<script>
    import TextInputField from '../components/TextInputField.svelte';
    import NumberInputField from '../components/NumberInputField.svelte';

    import { LINK_CLASS } from '../common-styles';

    import {progressBarConfigStore, modalStore} from '../stores';

    function onPostClick(e){
        e.preventDefault();

        $modalStore = "count-finder";
    }
</script>

<NumberInputField id="posts" bind:value={$progressBarConfigStore.posts} required>
    Current Posts <span class={LINK_CLASS + " cursor-pointer"} on:click={onPostClick}>(find)</span>
</NumberInputField>

<NumberInputField id="total" bind:value={$progressBarConfigStore.total} required>Goal Posts</NumberInputField>

<TextInputField id="unit" bind:value={$progressBarConfigStore.unit}>Unit</TextInputField>