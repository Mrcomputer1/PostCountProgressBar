<script>
    import {onMount} from 'svelte';

    import Msg from '../components/Msg.svelte';

    onMount(() => window.dispatchEvent(new CustomEvent("progressBarDownloadEvent")));
</script>

<Msg id="pages.generate.text" defaultMessage="Your progress bar has been generated!" />