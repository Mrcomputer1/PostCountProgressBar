<script>
    import {createEventDispatcher} from 'svelte';

    const dispatch = createEventDispatcher();

    export let id = null;
    export let classNames = "";
    export let icon = "info";

    export let dismissable = false;

    function onDismiss(e){
        dispatch("dismiss", {
            id: e.target.dataset.id
        });
    }
</script>

<div class="relative flex flex-row
lg:left-1/2 lg:right-0 lg:-translate-x-1/2 lg:rounded-md lg:w-1/2
min-w-[50%]
shadow-md p-3 mb-5 bg-white bg-opacity-70 dark:bg-black dark:bg-opacity-70 dark:text-gray-200 {classNames}">
    <span class="mr-5 material-icons select-none">{icon}</span>
    <p class="text-left flex-grow"><slot></slot></p>
    {#if dismissable && id !== null}
        <button class="ml-5 cursor-pointer" on:click={onDismiss} data-id={id}>&cross;</button>
    {/if}
</div>