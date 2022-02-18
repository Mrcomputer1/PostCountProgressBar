<script>
    export let value;
    export let id;
    export let required = false;
</script>

<div class="flex flex-row justify-between py-1">
    <label for={id} class="font-bold"><slot></slot></label>
    <input type="color" id={id} bind:value={value} required={required}>
</div>