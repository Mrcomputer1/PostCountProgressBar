//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2019 Mrcomputer1
// MIT License
//

import {ProgressBarExtension} from '../Extensions';

export class AutoSizeExtension extends ProgressBarExtension{
	run(progressBar){
		if(document.querySelector(progressBar._generator.element).tagName.toLowerCase() != "canvas"){
			console.warn("Unless you are generating directly to a canvas (which you're not), using AutoSize doesn't do anything and probably shouldn't be used.");
			return;
		}
		var canvas = progressBar._generator.canvas;
		canvas.setAttribute("width", progressBar._generator.getSize()[0]);
		canvas.setAttribute("height", progressBar._generator.getSize()[1]);
	}
}