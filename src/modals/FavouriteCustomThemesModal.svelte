<script>
    import Modal from '../components/Modal.svelte';
    import SelectInputField from '../components/SelectInputField.svelte';
    import Button from '../components/Button.svelte';

    import {formatMsg} from '../i18n';
    import Msg from '../components/Msg.svelte';

    import {progressBarConfigStore, modalStore, savedThemesStore} from '../stores';

    let theme = null;

    function load(){
        let wantedTheme = $savedThemesStore.find(item => item.id === theme);
        if(!wantedTheme){
            alert(formatMsg("modals.favourites.errors.none-selected", "No theme selected or it couldn't be found."));
            return;
        }

        $progressBarConfigStore.customTheme.background = wantedTheme.background;
        $progressBarConfigStore.customTheme.complete = wantedTheme.complete;
        $progressBarConfigStore.customTheme.incomplete = wantedTheme.incomplete;
        $progressBarConfigStore.customTheme.text = wantedTheme.text;

        $modalStore = null;
    }

    function delTheme(){
        if(!confirm(formatMsg("generic.confirmation", "Are you sure?")))
            return;

        $savedThemesStore = $savedThemesStore.filter(item => item.id !== theme);
        
        let themes = localStorage.getItem("pcpb.themes");
        if(themes !== null){
            themes = JSON.parse(themes);

            themes = themes.filter(item => item !== theme);
            localStorage.setItem("pcpb.themes", JSON.stringify(themes));
            localStorage.removeItem("pcpb.themes." + theme);
        }

        $modalStore = null;
    }

    function shareTheme(){
        let wantedTheme = $savedThemesStore.find(item => item.id === theme);

        let url = document.location.href.split("?")[0];
        let params = new URLSearchParams({
            sharedtheme: btoa(JSON.stringify(wantedTheme))
        });
        url += "?" + params.toString();

        prompt(formatMsg("modals.favourites.share-url", "Here is your share URL"), url);
    }
</script>

<Modal nameId="modals.favourites.title" name="Load a custom theme">
    <SelectInputField id="custom-theme" bind:value={theme}>
        <span slot="name"><Msg id="modals.favourites.header" defaultMessage="Favourite Themes" /></span>
        {#each $savedThemesStore as theme (theme.id)}
            <option value={theme.id}>{theme.name}</option>
        {/each}
    </SelectInputField>

    <div class="pt-6 flex flex-col sm:flex-row justify-evenly">
        <Button on:click={load} disabled={theme == null}>
            <Msg id="modals.favourites.load-btn" defaultMessage="Load Theme" />
        </Button>
        <Button on:click={shareTheme} disabled={theme == null}>
            <Msg id="modals.favourites.share-btn" defaultMessage="Share Theme" />
        </Button>
        <Button on:click={delTheme} disabled={theme == null}>
            <Msg id="modals.favourites.delete-btn" defaultMessage="Delete Theme" />
        </Button>
    </div>
</Modal>