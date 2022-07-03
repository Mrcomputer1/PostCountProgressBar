<script>
    import {modalStore} from './stores';

    import CountFinderModal from './modals/CountFinderModal.svelte';
    import FavouriteCustomThemesModal from './modals/FavouriteCustomThemesModal.svelte';
    import SaveFavouriteThemeModal from './modals/SaveFavouriteThemeModal.svelte';
    import ImportCustomThemeModal from './modals/ImportCustomThemeModal.svelte';
    import SettingsModal from './modals/SettingsModal.svelte';
</script>

{#if $modalStore === "count-finder"}
    <CountFinderModal />
{:else if $modalStore === "favourite-custom-themes"}
    <FavouriteCustomThemesModal />
{:else if $modalStore === "save-favourite-theme"}
    <SaveFavouriteThemeModal />
{:else if $modalStore === "import-custom-theme"}
    <ImportCustomThemeModal />
{:else if $modalStore === "settings"}
    <SettingsModal />
{/if}