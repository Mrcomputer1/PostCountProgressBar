<script>
    import Msg from './components/Msg.svelte';

    import {activeStepStore} from './stores';
</script>

<div class="pt-3 hidden sm:flex justify-center">
    <div class="text-lg p-3 mx-2 rounded-lg bg-opacity-50 dark:bg-opacity-50" class:bg-white="{$activeStepStore === 1}" class:dark:bg-black="{$activeStepStore === 1}">
        <div class="w-10 leading-10 rounded-full text-center bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 inline-block">1</div>
        <Msg id="app.steps.progress" defaultMessage="Progress" />
    </div>
    <div class="text-lg p-3 mx-2 rounded-lg bg-opacity-50 dark:bg-opacity-50" class:bg-white="{$activeStepStore === 2}" class:dark:bg-black="{$activeStepStore === 2}">
        <div class="w-10 leading-10 rounded-full text-center bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 inline-block">2</div>
        <Msg id="app.steps.theme" defaultMessage="Theme" />
    </div>
    <div class="text-lg p-3 mx-2 rounded-lg bg-opacity-50 dark:bg-opacity-50" class:bg-white="{$activeStepStore === 3}" class:dark:bg-black="{$activeStepStore === 3}">
        <div class="w-10 leading-10 rounded-full text-center bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 inline-block">3</div>
        <Msg id="app.steps.style" defaultMessage="Style" />
    </div>
    <div class="text-lg p-3 mx-2 rounded-lg bg-opacity-50 dark:bg-opacity-50" class:bg-white="{$activeStepStore === 4}" class:dark:bg-black="{$activeStepStore === 4}">
        <div class="w-10 leading-10 rounded-full text-center bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 inline-block">4</div>
        <Msg id="app.steps.generate" defaultMessage="Generate" />
    </div>
</div>