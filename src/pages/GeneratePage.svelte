<script>
    import {onMount} from 'svelte';

    onMount(() => window.dispatchEvent(new CustomEvent("progressBarDownloadEvent")));
</script>

Your progress bar has been generated!