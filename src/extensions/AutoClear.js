//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2019 Mrcomputer1
// MIT License
//

import {ProgressBarExtension} from '../Extensions';

export class AutoClearExtension extends ProgressBarExtension{
	run(progressBar){
		if(document.querySelector(progressBar._generator.element).tagName.toLowerCase() != "canvas"){
			console.warn("Unless you are generating directly to a canvas (which you're not), using AutoClear doesn't do anything and probably shouldn't be used.");
			return;
		}
		progressBar._generator.canvas.getContext("2d").clearRect(0, 0, progressBar._generator.getSize()[0], progressBar._generator.getSize()[1]);
	}
}