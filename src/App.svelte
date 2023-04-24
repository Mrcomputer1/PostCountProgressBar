<script>
    import StepsBar from './StepsBar.svelte';
    import ButtonBar from './ButtonBar.svelte';
    import PreviewBar from './PreviewBar.svelte';

    import ModalContainer from './ModalContainer.svelte';
    import BannerContainer from './BannerContainer.svelte';

    import ProgressPage from './pages/ProgressPage.svelte';
    import ThemePage from './pages/ThemePage.svelte';
    import StylePage from './pages/StylePage.svelte';
    import GeneratePage from './pages/GeneratePage.svelte';

    import Msg from './components/Msg.svelte';

    import { LINK_CLASS } from './common-styles';

    import {activeStepStore, modalStore} from './stores';

    let form;

    function openSettings(e){
        $modalStore = "settings";
    }
</script>

<div class="absolute left-0 text-center w-full h-full">
    <div class="relative top-10 invisible">Hi :)</div>

    <BannerContainer />

    <div class="relative flex flex-col
    lg:left-1/2 lg:-translate-x-1/2 lg:max-w-fit lg:min-w-[50%] lg:max-h-fit lg:min-h-[80%]
    bg-white bg-opacity-50 dark:bg-black dark:text-gray-200 dark:bg-opacity-50
    p-5 rounded-lg shadow-xl">
        <h1 class="font-bold text-2xl"><Msg id="app.title" defaultMessage="Post Count Progress Bar" /></h1>

        <StepsBar />

        <form class="flex-grow py-2" bind:this={form}>
            {#if $activeStepStore === 1}
            <ProgressPage />
            {:else if $activeStepStore === 2}
            <ThemePage />
            {:else if $activeStepStore === 3}
            <StylePage />
            {:else if $activeStepStore === 4}
            <GeneratePage />
            {/if}
        </form>

        <PreviewBar />
        <ButtonBar form={form} />
    </div>

    <div class="relative top-5 left-1/2 -translate-x-1/2 w-fit rounded-md p-3 bg-white bg-opacity-30 dark:bg-black dark:bg-opacity-30 dark:text-gray-200 shadow-sm">
        <Msg id="app.copyright" defaultMessage={"Copyright © {currentDate, date, ::y}"} values={{currentDate: new Date()}} />
        <a href="https://scratch.mit.edu/users/Mrcomputer1" target="_blank" class={LINK_CLASS}>Mrcomputer1</a> &bullet;
        <a href="https://github.com/Mrcomputer1/PostCountProgressBar/blob/master/LICENSE" target="_blank" class={LINK_CLASS}>
            <Msg id="app.license" defaultMessage="MIT License" />
        </a> &bullet;
        <a href="https://github.com/Mrcomputer1/PostCountProgressBar" target="_blank" class={LINK_CLASS}>
            <Msg id="app.source-code" defaultMessage="Source Code" />
        </a> &bullet;
        <button class={LINK_CLASS + " cursor-pointer"} on:click={openSettings}>
            <Msg id="app.settings" defaultMessage="Settings" />
        </button>
    </div>
</div>

<ModalContainer />