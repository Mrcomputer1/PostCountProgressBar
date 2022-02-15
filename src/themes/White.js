//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2022 Mrcomputer1
// MIT License
//

import {ProgressBarTheme} from "../Extensions";

export class ThemeWhite extends ProgressBarTheme{
	constructor(){
		super();
		
		this.background = "#ffffff";
		this.incomplete = "#ff0000";
		this.complete = "#00ff00";
		this.text = "#000000";
	}
}