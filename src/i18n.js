import { writable, get } from 'svelte/store';

import { createIntl, createIntlCache } from '@formatjs/intl';

// State
const intlCache = createIntlCache();

let intl = createIntl({
    locale: "en-AU",
    defaultLocale: "en-AU",
    messages: {},
    onError: console.error,
    onWarn: console.warn
}, intlCache);
export const intlStore = writable(intl);

// Determine Language
let language = "en-AU";

const query = new URLSearchParams(document.location.search);

if(query.has("lang")){
    language = query.get("lang");
}else if(localStorage.getItem("pcpb.language") !== null){
    language = localStorage.getItem("pcpb.language");
}

// Functions
async function loadLanguage(langId){
    if(langId === "en-AU"){
        intl = createIntl({
            locale: langId,
            defaultLocale: "en-AU",
            messages: {},
            onError: console.error,
            onWarn: console.warn
        }, intlCache);
        intlStore.set(intl);

        document.title = formatMsg("app.title", "Post Count Progress Bar");

        // Update unit value if not already adjusted
        const {progressBarConfigStore} = await import("./stores.js");

        const unit = formatMsg("app.default-unit", "posts");
        const config = get(progressBarConfigStore);
        if(config.unit === config.defaultUnit)
            config.unit = unit;
        config.defaultUnit = unit;
        progressBarConfigStore.set(config);

        return;
    }

    try{
        const res = await fetch(`languages/${langId}.json`);
        const json = await res.json();

        intl = createIntl({
            locale: langId,
            defaultLocale: "en-AU",
            messages: json,
            onError: console.error,
            onWarn: console.warn
        }, intlCache);
        intlStore.set(intl);

        document.title = formatMsg("app.title", "Post Count Progress Bar");

        // Update unit value if not already adjusted
        const {progressBarConfigStore} = await import("./stores.js");

        const unit = formatMsg("app.default-unit", "posts");
        const config = get(progressBarConfigStore);
        if(config.unit === config.defaultUnit)
            config.unit = unit;
        config.defaultUnit = unit;
        progressBarConfigStore.set(config);
    }catch(e){
        alert("Something went wrong while loading language data. " + e);
        console.error(e);
        return;
    }
}

export async function setLanguage(langId){
    localStorage.setItem("pcpb.language", langId);
    await loadLanguage(langId);
}
window._debug_setLanguage = setLanguage;

export function formatMsg(id, defaultMessage, values){
    return intl.formatMessage({
        id, defaultMessage: defaultMessage ?? id
    }, values);
}

// Load Active Language
if(language !== "en-AU"){
    loadLanguage(language);
}