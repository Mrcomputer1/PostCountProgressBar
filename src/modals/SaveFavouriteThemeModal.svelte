<script>
    import {v4 as uuidv4} from 'uuid';

    import Modal from '../components/Modal.svelte';
    import TextInputField from '../components/TextInputField.svelte';
    import Button from '../components/Button.svelte';

    import {progressBarConfigStore, modalStore, savedThemesStore} from '../stores';

    let name = "My Amazing Custom Theme";

    function save(){
        let theme = {
            id: uuidv4(),
            name,
            background: $progressBarConfigStore.customTheme.background,
            complete: $progressBarConfigStore.customTheme.complete,
            incomplete: $progressBarConfigStore.customTheme.incomplete,
            text: $progressBarConfigStore.customTheme.text
        };
        $savedThemesStore.push(theme);

        let themes = [];
        if(localStorage.getItem("pcpb.themes") !== null){
            themes = JSON.parse(localStorage.getItem("pcpb.themes"));
        }

        themes.push(theme.id);
        localStorage.setItem("pcpb.themes", JSON.stringify(themes));
        localStorage.setItem("pcpb.themes." + theme.id, JSON.stringify([
            theme.name, theme.background, theme.complete, theme.incomplete, theme.text
        ]));

        $modalStore = null;
    }
</script>

<Modal name="Save a custom theme">
    <TextInputField bind:value={name} required>Name</TextInputField>

    <div class="pt-6 flex w-1/2 mx-auto">
        <Button on:click={save}>Save Theme</Button>
    </div>
</Modal>