//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2019 Mrcomputer1
// MIT License
//

import {CanvasGenerator} from '../Extensions';

// 100, 20
export class CanvasBackgroundPostsGenerator extends CanvasGenerator{
	run(progressBar){
		var ctx = this.canvas.getContext("2d");
		// Background
		ctx.fillStyle = progressBar._theme.incomplete;
		ctx.fillRect(0, 0, 100, 20);
		// Green Lines
		ctx.fillStyle = progressBar._theme.complete;
		ctx.beginPath();
		for(var i = 0; i != progressBar.percent + 1; i++){
			ctx.fillRect(i*1, 0, 1, 20);
		}
		// Text
		ctx.fillStyle = progressBar._theme.text;
		ctx.font = "1em sans-serif";
		ctx.fillText(progressBar.current + "/" + progressBar.total, 5, 16);
	}
	getSize(){
		return [100, 20];
	}
}