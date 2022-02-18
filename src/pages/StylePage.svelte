<script>
    import SelectInputField from '../components/SelectInputField.svelte';

    import {progressBarConfigStore} from '../stores';
</script>

<SelectInputField bind:value={$progressBarConfigStore.style} id="style" required>
    <span slot="name">
        Style
    </span>
    
    <option value="CanvasBigGenerator">Big</option>
    <option value="CanvasSmallGenerator">Medium</option>
    <option value="CanvasBackgroundPostsGenerator">Small (Posts)</option>
    <option value="CanvasBackgroundPercentGenerator">Small (Percent)</option>
    <option value="TextGenerator">Text</option>
</SelectInputField>