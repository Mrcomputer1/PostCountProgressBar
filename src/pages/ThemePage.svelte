<script>
    import {v4 as uuidv4} from 'uuid';

    import SelectInputField from '../components/SelectInputField.svelte';
    import ColourInputField from '../components/ColourInputField.svelte';
    import Button from '../components/Button.svelte';

    import {progressBarConfigStore, modalStore} from '../stores';

    function loadFav(e){
        $modalStore = "favourite-custom-themes";
    }

    function saveFav(){
        $modalStore = "save-favourite-theme";
    }
</script>

<SelectInputField bind:value={$progressBarConfigStore.theme} id="theme" required>
    <span slot="name">
        Theme
    </span>
    
    <option value="default">Default (Black background)</option>
    <option value="white">White</option>
    <option value="blue">Blue</option>
    <option value="custom">Custom</option>
</SelectInputField>

{#if $progressBarConfigStore.theme === "custom"}
<div class="py-3">
    <ColourInputField id="complete" bind:value={$progressBarConfigStore.customTheme.complete}>Complete</ColourInputField>
    <ColourInputField id="incomplete" bind:value={$progressBarConfigStore.customTheme.incomplete}>Incomplete</ColourInputField>
    <ColourInputField id="background" bind:value={$progressBarConfigStore.customTheme.background}>Background</ColourInputField>
    <ColourInputField id="text" bind:value={$progressBarConfigStore.customTheme.text}>Text</ColourInputField>

    <div class="py-2 flex flex-col sm:flex-row justify-evenly">
        <Button on:click={loadFav}>Load Favourite</Button>
        <Button on:click={saveFav}>Save Favourite</Button>
    </div>
</div>
{/if}