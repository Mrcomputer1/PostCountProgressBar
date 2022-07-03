<script>
    import SelectInputField from '../components/SelectInputField.svelte';

    import Msg from '../components/Msg.svelte';

    import {progressBarConfigStore} from '../stores';
</script>

<SelectInputField bind:value={$progressBarConfigStore.style} id="style" required>
    <span slot="name">
        <Msg id="pages.style.style" defaultMessage="Style" />
    </span>
    
    <option value="CanvasBigGenerator"><Msg id="pages.style.styles.CanvasBigGenerator" defaultMessage="Big" /></option>
    <option value="CanvasSmallGenerator"><Msg id="pages.style.styles.CanvasSmallGenerator" defaultMessage="Medium" /></option>
    <option value="CanvasBackgroundPostsGenerator"><Msg id="pages.style.styles.CanvasBackgroundPostsGenerator" defaultMessage="Small (Posts)" /></option>
    <option value="CanvasBackgroundPercentGenerator"><Msg id="pages.style.styles.CanvasBackgroundPercentGenerator" defaultMessage="Small (Percent)" /></option>
    <option value="TextGenerator"><Msg id="pages.style.styles.TextGenerator" defaultMessage="Text" /></option>
</SelectInputField>