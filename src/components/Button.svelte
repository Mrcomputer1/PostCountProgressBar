<script>
    export let success = false;
    export let disabled = false;
    export let working = false;
</script>

<button type="button" on:click class:animate-pulse="{working}" class:bg-blue-300="{!success}" class:dark:bg-blue-900="{!success}" class:bg-green-500="{success}" class:dark:bg-green-800="{success}" class="flex-grow m-2 p-2 rounded-md shadow-md hover:shadow-lg hover:bg-opacity-80 transition duration-300 disabled:grayscale disabled:dark:text-gray-200 disabled:bg-opacity-100 disabled:shadow-md" disabled={disabled}>
    {#if working}<span class="material-icons select-none animate-spin align-bottom text-base">sync</span>{/if}
    <slot></slot>
</button>