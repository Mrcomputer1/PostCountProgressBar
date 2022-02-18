<script>
    import {activeStepStore} from './stores';
</script>

<div class="pt-3 hidden sm:flex justify-center">
    <div class="text-lg p-3 mx-2 rounded-lg bg-opacity-50" class:bg-white="{$activeStepStore === 1}">
        <div class="w-10 leading-10 rounded-full text-center bg-white bg-opacity-80 inline-block">1</div>
        Progress
    </div>
    <div class="text-lg p-3 mx-2 rounded-lg bg-opacity-50" class:bg-white="{$activeStepStore === 2}">
        <div class="w-10 leading-10 rounded-full text-center bg-white bg-opacity-80 inline-block">2</div>
        Theme
    </div>
    <div class="text-lg p-3 mx-2 rounded-lg bg-opacity-50" class:bg-white="{$activeStepStore === 3}">
        <div class="w-10 leading-10 rounded-full text-center bg-white bg-opacity-80 inline-block">3</div>
        Style
    </div>
    <div class="text-lg p-3 mx-2 rounded-lg bg-opacity-50" class:bg-white="{$activeStepStore === 4}">
        <div class="w-10 leading-10 rounded-full text-center bg-white bg-opacity-80 inline-block">4</div>
        Generate
    </div>
</div>