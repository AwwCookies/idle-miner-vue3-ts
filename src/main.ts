import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

/**
 * Returns the image URL corresponding to the specified icon code.
 * @param {string} iconCode - The icon code to look up.
 * @returns {string} - The URL of the image corresponding to the icon code.
 * @throws {Error} - If the icon code is missing or not in a valid format.
 */
export function getImageFromIconCode(iconCode: string) {
    if (!iconCode) {
        const error = new Error("Icon code is required. Please provide a valid icon code.");
        error.stack = new Error().stack;
        throw error;
    }

    const [type, name] = iconCode.split(":");
    if (!type || !name) {
        const error = new Error("Icon code is not in valid format. Please provide an icon code in the format 'type:name'.");
        error.stack = new Error().stack;
        throw error;
    }

    return `/imgs/${type}/${name.toLowerCase().replace(" ", "_")}.png`;
}


/**
 * Replaces all occurrences of icon codes in a string with <img> tags that display the corresponding images.
 * @param {string} string - The string to modify.
 * @returns {string} - The modified string with icon codes replaced by <img> tags.
 */
function replaceIcons(string: string) {
    return string.replace(/(\w+:\w+)/g, (match) => {
        return `<img src="${getImageFromIconCode(match)}" alt="${match}">`;
    });
}



const app = createApp(App)

// Register global functions
app.config.globalProperties.$replaceIcons = replaceIcons
app.config.globalProperties.$getImageFromIconCode = getImageFromIconCode

app.mount('#app')
