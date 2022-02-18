<script>
    import Banner from './components/Bannar.svelte';
    import Banners from './banners';

    let dismissedBanners = [];
    if(localStorage.getItem("pcpb.banners") !== null){
        dismissedBanners = JSON.parse(localStorage.getItem("pcpb.banners"));
        dismissedBanners = dismissedBanners.filter(dismissedBanner => Banners.findIndex(item => item.id === dismissedBanner) !== -1);
        localStorage.setItem("pcpb.banners", JSON.stringify(dismissedBanners));
    }

    function handleDismiss(e){
        dismissedBanners = dismissedBanners; // apparently, this tricks Svelte into updating, because adding to an array doesn't...
        dismissedBanners.push(e.detail.id);
        localStorage.setItem("pcpb.banners", JSON.stringify(dismissedBanners));
    }
</script>

{#each Banners as banner (banner.id)}
    {#if !dismissedBanners.includes(banner.id)}
        {#if (!banner.startDate || banner.startDate <= Date.now()) && (!banner.endDate || banner.endDate >= Date.now())}
        <Banner id={banner.id} icon={banner.icon ?? "info"} classNames={banner.classNames ?? ""} dismissable={banner.dismissable ?? false} on:dismiss={handleDismiss}>
            {@html banner.html}
        </Banner>
        {/if}
    {/if}
{/each}