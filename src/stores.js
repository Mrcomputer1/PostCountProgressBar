import { writable } from "svelte/store";

const query = new URLSearchParams(document.location.search);

export const activeStepStore = writable(1);

export const progressBarConfigStore = writable({
    posts: query.has("posts") ? parseInt(query.get("posts")) : 50,
    total: query.has("goal") ? parseInt(query.get("goal")) : 100,
    unit: query.get("unit") ?? "posts",
    theme: query.get("theme") ?? "default",
    style: query.get("style") ?? "CanvasBigGenerator",
    customTheme: {
        complete: query.get("custom[complete]") ?? "#00ff00",
        incomplete: query.get("custom[incomplete]") ?? "#ff0000",
        background: query.get("custom[background]") ?? "#000000",
        text: query.get("custom[text]") ?? "#ffffff"
    }
});

export const progressBarDownloadUrl = writable({
    url: null,
    ext: ".dat"
});

export const modalStore = writable(query.has("sharedtheme") ? "import-custom-theme" : null);

// Themes Loader
let themes = [];

function loadThemes(){
    if(query.has("resetthemes")){
        if(confirm("Are you sure you want to reset theme storage?")){
            try{
                let themeInfo = localStorage.getItem("pcpb.themes");
                if(themeInfo !== null){
                    themeInfo = JSON.parse(themeInfo);

                    for(let theme of themeInfo){
                        localStorage.removeItem("pcpb.themes." + theme);
                    }
                    localStorage.removeItem("pcpb.themes");
                }
                localStorage.removeItem("pcpb.banners");

                history.replaceState(null, "", document.location.href.split("?")[0]);
            }catch(e){
                console.error(e);
            }
        }
    }

    if(localStorage.getItem("pcpb.themes") !== null){
        for(let theme of JSON.parse(localStorage.getItem("pcpb.themes"))){
            let themeData = localStorage.getItem("pcpb.themes." + theme);
            if(themeData !== null){
                themeData = JSON.parse(themeData);
                let themeConfig = {
                    name: themeData[0],
                    background: themeData[1],
                    complete: themeData[2],
                    incomplete: themeData[3],
                    text: themeData[4]
                };
                themeConfig.id = theme;
                themes.push(themeConfig);
            }
        }
    }
}
loadThemes();

export const savedThemesStore = writable(themes);