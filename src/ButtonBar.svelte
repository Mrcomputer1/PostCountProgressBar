<script>
    import Button from './components/Button.svelte';

    import {activeStepStore, progressBarDownloadUrl} from './stores';

    export let form;

    function validateButtonPress(){
        if(!form.checkValidity()){
            form.reportValidity();
            return false;
        }else return true;
    }

    function prevPage(){
        if(!validateButtonPress())
            return;
        $activeStepStore -= 1;
    }

    function nextPage(){
        if(!validateButtonPress())
            return;
        $activeStepStore += 1;
    }

    function previewDownload(){
        if(!validateButtonPress())
            return;

        if($activeStepStore !== 4){
            onPreview();
        }else{
            onDownload();
        }
    }

    function onPreview(){
        window.dispatchEvent(new CustomEvent("progressBarDownloadEvent"));
    }

    function onDownload(){
        let a = document.createElement("a");
        a.download = "ProgressBar" + $progressBarDownloadUrl.ext;
        a.href = $progressBarDownloadUrl.url;
        a.style.display = "none";
        document.body.appendChild(a);
        a.click();
        a.parentNode.removeChild(a);
    }
</script>

<div class="py-1 flex flex-col sm:flex-row justify-evenly">
    {#if $activeStepStore !== 1}
    <Button on:click={prevPage}>Back</Button>
    {/if}
    <Button on:click={previewDownload} success={$activeStepStore === 4}>
        {#if $activeStepStore === 4}
        Download
        {:else}
        Preview
        {/if}
    </Button>
    {#if $activeStepStore !== 4}
    <Button on:click={nextPage}>Next</Button>
    {/if}
</div>