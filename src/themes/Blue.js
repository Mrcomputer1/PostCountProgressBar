//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2022 Mrcomputer1
// MIT License
//

import {ProgressBarTheme} from '../Extensions';

export class ThemeBlue extends ProgressBarTheme{
	constructor(){
		super();
		
		this.background = "#287aff";
		this.incomplete = "#ff0000";
		this.complete = "#00ff00";
		this.text = "#ffffff";
	}
}