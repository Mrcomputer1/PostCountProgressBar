//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2017 Mrcomputer1
// MIT License
//

import {ProgressBarTheme} from '../Extensions';

export class ThemeDefault extends ProgressBarTheme{
    constructor(){
        super();
        this.background = "#000000";
        this.incomplete = "#ff0000";
        this.complete = "#00ff00";
        this.text = "#ffffff";
    }
}