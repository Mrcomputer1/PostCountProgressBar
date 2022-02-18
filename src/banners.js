/*
 * Schema:
 * 
 * id: A UUID. (https://www.uuidgenerator.net/ or `npx uuid v4`) - NO DEFAULT, REQUIRED FOR DISMISSABLE
 * html: The HTML content of the banner. - NO DEFAULT, REQUIRED
 * icon: https://google.com/design/icons/ - DEFAULT: `info`
 * dismissable: If the banner can be dismissed, requires an ID. - DEFAULT: false
 * startDate: Start date in number of milliseconds since Jan 1, 1970 12:00:00 AM UTC - DEFAULT: no start date (always "started")
 * endDate: End date in number of milliseconds since Jan 1, 1970 12:00:00 AM UTC - DEFAULT: no end date (never "ended")
 * classNames: CSS classes to apply to the banner, tailwindcss available - DEFAULT: ""
*/
import {LINK_CLASS} from './common-styles';

export default [
    {
        id: "1d80e6b9-c1ea-4755-8947-6cbad9e3b9ba",
        html: `
        <strong>Welcome to the updated Post Count Progress Bar website!</strong><br>
        New Features:
        <ul class="list-disc list-inside">
            <li>New website built using <a href="https://svelte.dev/" target="_blank" class="${LINK_CLASS}">Svelte</a> and <a href="https://tailwindcss.com" target="_blank" class="${LINK_CLASS}">Tailwind CSS</a>.</li>
            <li>Custom themes, which you can save and share.</li>
            <li>Lookup your post count with ScratchDB.</li>
        </ul>
        If you find any issues, you can report them on <a href="https://github.com/Mrcomputer1/PostCountProgressBar/issues" target="_blank" class="${LINK_CLASS}">GitHub</a> or on my <a href="https://scratch.mit.edu/users/Mrcomputer1/#comments" target="_blank" class="${LINK_CLASS}">Scratch profile</a>.<br>
        The old version of this website is still available <a href="https://mrcomputer1.github.io/PostCountProgressBar/old/" class="${LINK_CLASS}">here</a>.
        `,
        dismissable: true,
        endDate: 1650240000000 // 18/04/2022 12:00:00 AM UTC
    }
];