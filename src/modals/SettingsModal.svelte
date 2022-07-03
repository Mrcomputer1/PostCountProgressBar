<script>
    import Modal from '../components/Modal.svelte';
    import SelectInputField from '../components/SelectInputField.svelte';
    import Button from '../components/Button.svelte';

    import {setLanguage} from '../i18n';
    import Msg from '../components/Msg.svelte';

    import {modalStore} from '../stores';

    const SUPPORTED_LANGUAGES = [
        {id: "en-AU", name: "English (Australia) - Default"},
        {id: "en-US", name: "English (United States)"}
    ];

    let selectLang = null;
    let languageChanging = false;

    async function changeLanguage(){
        languageChanging = true;
        await setLanguage(selectLang);
        languageChanging = false;

        document.location.reload();
    }

    function toggleTheme(){
        document.documentElement.classList.toggle("dark");

        if(document.documentElement.classList.contains("dark")){
            localStorage.setItem("pcpb.dark-mode", "1");
        }else{
            localStorage.setItem("pcpb.dark-mode", "0");
        }
    }
</script>

<Modal nameId="modals.settings.title" name="Settings">
    <!-- Language -->
    <SelectInputField id="language" bind:value={selectLang}>
        <span slot="name"><Msg id="modals.settings.language" defaultMessage="Language" /></span>
        {#each SUPPORTED_LANGUAGES as lang (lang.id)}
            <option value={lang.id}>{lang.name} ({lang.id})</option>
        {/each}
    </SelectInputField>

    <div class="pt-3 flex flex-col sm:flex-row justify-evenly">
        <Button on:click={changeLanguage} disabled={selectLang === null || languageChanging} working={languageChanging}>
            <Msg id="modals.settings.language.change-btn" defaultMessage="Change Language" />
        </Button>
    </div>

    <!-- Dark Mode -->
    <div class="pt-6 flex flex-col sm:flex-row justify-evenly">
        <Button on:click={toggleTheme}>
            <Msg id="modals.settings.toggle-theme" defaultMessage="Toggle Theme" />
        </Button>
    </div>
</Modal>