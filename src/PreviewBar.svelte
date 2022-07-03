<script>
    import {ProgressBar, themes, generators} from '@mrcomputer1/post-count-progress-bar';

    import {formatMsg} from './i18n';

    import {progressBarConfigStore, progressBarDownloadUrl, activeStepStore} from './stores';

    let progressBar = null;

    function rebuildProgressBar(){
        if(progressBar !== null){
            progressBar.releaseDownload();
        }

        if($progressBarConfigStore.posts > $progressBarConfigStore.total){
            alert(formatMsg("app.preview.errors.goal-met", "You've already met your goal! You should increase your goal!"));
            $activeStepStore = 1;
            return false;
        }

        progressBar = new ProgressBar()
            .setProgress($progressBarConfigStore.posts, $progressBarConfigStore.total)
            .setUnit($progressBarConfigStore.unit)
            .use(new generators[$progressBarConfigStore.style]("#progress-bar-container"));

        if($progressBarConfigStore.theme === "custom"){
            const themeConfig = $progressBarConfigStore.customTheme;
            progressBar.use(new themes.custom(
                themeConfig.background,
                themeConfig.incomplete,
                themeConfig.complete,
                themeConfig.text
            ));
        }else{
            progressBar.use(new themes[$progressBarConfigStore.theme]())
        }
            
        progressBar.generate();

        return true;
    }

    function downloadProgressBar(){
        if(!rebuildProgressBar())
            return;
        
        progressBar.download(url => {
            $progressBarDownloadUrl = {
                url,
                ext: progressBar.getDownloadExtension()
            };
        });
    }
</script>

<svelte:window on:progressBarRebuildEvent={rebuildProgressBar} on:progressBarDownloadEvent={downloadProgressBar} />

<div class="py-2 flex justify-center">
    <div id="progress-bar-container" class="overflow-x-auto"></div>
</div>