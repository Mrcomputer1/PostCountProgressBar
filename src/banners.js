/*
 * Schema:
 * 
 * id: A UUID. (https://www.uuidgenerator.net/ or `npx uuid v4`) - NO DEFAULT, REQUIRED FOR DISMISSABLE
 * html: The HTML content of the banner. - NO DEFAULT, REQUIRED
 * icon: https://google.com/design/icons/ - DEFAULT: `info`
 * dismissable: If the banner can be dismissed, requires an ID. - DEFAULT: false
 * startDate: Start date in number of milliseconds since Jan 1, 1970 12:00:00 AM UTC - DEFAULT: no start date (always "started")
 * endDate: End date in number of milliseconds since Jan 1, 1970 12:00:00 AM UTC - DEFAULT: no end date (never "ended")
 * classNames: CSS classes to apply to the banner, tailwindcss available (remember dark: alternatives) - DEFAULT: ""
*/
import {LINK_CLASS} from './common-styles';

export default [
    // RIP Technoblade
    {
        id: "1fa47d21-e874-450a-b833-c924692d5563",
        html: `Rest in peace Technoblade 🐖👑`,
        icon: "sentiment_very_dissatisfied", // :( face
        dismissable: false,
        endDate: 1659312000000 // 01/08/2022 12:00:00 AM UTC
    },
    
    // Dark mode+translation support
    {
        id: "e8eaa57d-0e62-441b-a883-bcbeeee41338",
        html: `
        <strong>Dark mode and translation support.</strong><br>
        You can toggle dark mode and change language in the Settings menu at the bottom of the page.<br>
        If you find any issues, you can report them on <a href="https://github.com/Mrcomputer1/PostCountProgressBar/issues" target="_blank" class="${LINK_CLASS}">GitHub</a> or on my <a href="https://scratch.mit.edu/users/Mrcomputer1/#comments" target="_blank" class="${LINK_CLASS}">Scratch profile</a>.<br>
        Instructions for translating can be found <a href="https://github.com/Mrcomputer1/PostCountProgressBar/wiki/Translating" target="_blank" class="${LINK_CLASS}">here</a>.
        `,
        dismissable: true,
        endDate: 1658102400000 // 18/07/2022 12:00:00 AM UTC
    }
];