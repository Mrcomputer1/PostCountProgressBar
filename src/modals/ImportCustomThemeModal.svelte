<script>
    import Modal from '../components/Modal.svelte';
    import Button from '../components/Button.svelte';

    import {progressBarConfigStore, modalStore, savedThemesStore} from '../stores';
    
    import { formatMsg } from '../i18n';
    import Msg from '../components/Msg.svelte';

    import { ProgressBar, themes, generators } from '@mrcomputer1/post-count-progress-bar';
    import { onMount } from 'svelte';

    const COLOUR_REGEX = /^#[a-z0-9]{6}$/i;
    const ID_REGEX = /^[a-z0-9\-]{0,36}$/i;

    function invalidSharedTheme(ref){
        alert(formatMsg("modals.import-theme.errors.invalid", "Invalid shared theme. (Ref:#{ref})", {ref}));
        
        closeModal();
    }
    
    function closeModal(){
        let newQuery = new URLSearchParams(document.location.search);
        newQuery.delete("sharedtheme");
        history.replaceState(null, "", document.location.href.split("?")[0] + "?" + newQuery.toString());

        $modalStore = null;
    }

    let sharedTheme = {};
    function processSharedTheme(){
        try{
            sharedTheme = JSON.parse(atob(new URLSearchParams(document.location.search).get("sharedtheme")));
            
            if(!sharedTheme.id || !sharedTheme.name || !sharedTheme.complete || !sharedTheme.incomplete || !sharedTheme.background || !sharedTheme.text){
                invalidSharedTheme(1); // Ref:1
                return;
            }

            if($savedThemesStore.findIndex(item => item.id === sharedTheme.id) !== -1){
                alert(formatMsg("modals.import-theme.errrors.non-unique", "You already have this theme."));
                closeModal();
                return;
            }

            if(!COLOUR_REGEX.test(sharedTheme.complete) || !COLOUR_REGEX.test(sharedTheme.incomplete) || !COLOUR_REGEX.test(sharedTheme.background) || !COLOUR_REGEX.test(sharedTheme.text)){
                invalidSharedTheme(2); // Ref:2
                return;
            }

            if(!ID_REGEX.test(sharedTheme.id)){
                invalidSharedTheme(3); // Ref:3
                return;
            }
        }catch(e){
            console.error(e);
            invalidSharedTheme(4); // Ref:4
        }
    }
    processSharedTheme();

    function importTheme(){
        $savedThemesStore.push(sharedTheme);

        let themes = [];
        if(themes !== null){
            themes = JSON.parse(localStorage.getItem("pcpb.themes"));
        }
        
        themes.push(sharedTheme.id);
        localStorage.setItem("pcpb.themes", JSON.stringify(themes));
        localStorage.setItem("pcpb.themes." + sharedTheme.id, JSON.stringify([
            sharedTheme.name,
            sharedTheme.background,
            sharedTheme.complete,
            sharedTheme.incomplete,
            sharedTheme.text
        ]));

        $progressBarConfigStore.theme = "custom";
        $progressBarConfigStore.customTheme.background = sharedTheme.background;
        $progressBarConfigStore.customTheme.complete = sharedTheme.complete;
        $progressBarConfigStore.customTheme.incomplete = sharedTheme.incomplete;
        $progressBarConfigStore.customTheme.text = sharedTheme.text;

        closeModal();
    }

    let progressBar;

    onMount(() => {
        progressBar = new ProgressBar()
            .setProgress(500, 1000)
            .setUnit("posts")
            .use(new generators.CanvasSmallGenerator("#progress-bar-shared-theme-preview"));
        progressBar.use(new themes.custom(sharedTheme.background, sharedTheme.incomplete, sharedTheme.complete, sharedTheme.text));
        progressBar.generate();
    });
</script>

<Modal nameId="modals.import-theme.title" name="A theme has been shared with you!">
    <div class="flex flex-col items-center">
        <strong class="pt-4">{sharedTheme.name}</strong>
        <div id="progress-bar-shared-theme-preview" class="pt-4"></div>
    </div>
    <div class="pt-6 flex flex-col sm:flex-row justify-evenly">
        <Button on:click={importTheme} success><Msg id="modals.import-theme.save-btn" defaultMessage="Save Theme" /></Button>
        <Button on:click={closeModal}><Msg id="modals.import-theme.dont-save-btn" defaultMessage="Don't Save" /></Button>
    </div>
</Modal>