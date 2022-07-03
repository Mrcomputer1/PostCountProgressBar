<script>
    import SelectInputField from '../components/SelectInputField.svelte';
    import ColourInputField from '../components/ColourInputField.svelte';
    import Button from '../components/Button.svelte';

    import Msg from '../components/Msg.svelte';

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
        <Msg id="pages.theme.theme" defaultMessage="Theme" />
    </span>
    
    <option value="default"><Msg id="pages.theme.themes.default" defaultMessage="Default (Black background)" /></option>
    <option value="white"><Msg id="pages.theme.themes.white" defaultMessage="White" /></option>
    <option value="blue"><Msg id="pages.theme.themes.blue" defaultMessage="Blue" /></option>
    <option value="custom"><Msg id="pages.theme.themes.custom" defaultMessage="Custom" /></option>
</SelectInputField>

{#if $progressBarConfigStore.theme === "custom"}
<div class="py-3">
    <ColourInputField id="complete" bind:value={$progressBarConfigStore.customTheme.complete}>
        <Msg id="pages.theme.custom.complete" defaultMessage="Complete" />
    </ColourInputField>
    <ColourInputField id="incomplete" bind:value={$progressBarConfigStore.customTheme.incomplete}>
        <Msg id="pages.theme.custom.incomplete" defaultMessage="Incomplete" />
    </ColourInputField>
    <ColourInputField id="background" bind:value={$progressBarConfigStore.customTheme.background}>
        <Msg id="pages.theme.custom.background" defaultMessage="Background" />
    </ColourInputField>
    <ColourInputField id="text" bind:value={$progressBarConfigStore.customTheme.text}>
        <Msg id="pages.theme.custom.text" defaultMessage="Text" />
    </ColourInputField>

    <div class="py-2 flex flex-col sm:flex-row justify-evenly">
        <Button on:click={loadFav}>
            <Msg id="pages.theme.load-favourite-btn" defaultMessage="Load Favourite" />
        </Button>
        <Button on:click={saveFav}>
            <Msg id="pages.theme.save-favourite-btn" defaultMessage="Save Favourite" />
        </Button>
    </div>
</div>
{/if}