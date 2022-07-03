<script>
    import {modalStore} from '../stores';

    import Msg from '../components/Msg.svelte';

    export let nameId;
    export let name;

    function onClose(){
        $modalStore = null;
    }
</script>

<div class="bg-black bg-opacity-70 w-full h-full fixed top-0 left-0 z-10" on:click={onClose}></div>
<div class="flex flex-col fixed
top-5 left-5 right-5
lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2
min-w-[50%] min-h-fit
z-20 p-10 bg-white bg-opacity-80 shadow-xl rounded-lg">
    <div class="font-bold text-lg flex flex-row justify-between mb-2">
        <Msg id={nameId} defaultMessage={name} />
        <span class="cursor-pointer select-none" on:click={onClose}>&cross;</span>
    </div>
    <div class="flex-grow">
        <slot></slot>
    </div>
</div>