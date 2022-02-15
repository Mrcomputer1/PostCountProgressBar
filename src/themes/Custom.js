//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2022 Mrcomputer1
// MIT License
//

import {ProgressBarTheme} from '../Extensions';

export class ThemeCustom extends ProgressBarTheme{
	constructor(background, incomplete, complete, text){
		super();
		
		this.background = background;
		this.incomplete = incomplete;
		this.complete = complete;
		this.text = text;
	}
}