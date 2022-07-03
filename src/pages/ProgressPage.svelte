<script>
    import TextInputField from '../components/TextInputField.svelte';
    import NumberInputField from '../components/NumberInputField.svelte';

    import { LINK_CLASS } from '../common-styles';

    import Msg from '../components/Msg.svelte';

    import {progressBarConfigStore, modalStore} from '../stores';

    function onPostClick(e){
        e.preventDefault();

        $modalStore = "count-finder";
    }
</script>

<NumberInputField id="posts" bind:value={$progressBarConfigStore.posts} required>
    <Msg id="pages.progress.current-posts" defaultMessage="Current Posts" />
    <span class={LINK_CLASS + " cursor-pointer"} on:click={onPostClick}>
        <Msg id="pages.progress.current-posts.find" defaultMessage="(find)" />
    </span>
</NumberInputField>

<NumberInputField id="total" bind:value={$progressBarConfigStore.total} required>
    <Msg id="pages.progress.goal-posts" defaultMessage="Goal Posts" />
</NumberInputField>

<TextInputField id="unit" bind:value={$progressBarConfigStore.unit}>
    <Msg id="pages.progress.unit" defaultMessage="Unit" />
</TextInputField>