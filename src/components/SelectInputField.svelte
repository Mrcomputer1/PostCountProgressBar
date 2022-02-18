<script>
    import {INPUT_FIELD_CLASS} from '../common-styles';

    export let value;
    export let id;
    export let required = false;
</script>

<div class="flex flex-col items-center py-1">
    <label for={id} class="pb-1 font-bold"><slot name="name"></slot></label>
    <select class={INPUT_FIELD_CLASS} id={id} bind:value={value} required={required}>
        <slot></slot>
    </select>
</div>