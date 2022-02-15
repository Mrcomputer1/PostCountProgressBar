//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2022 Mrcomputer1
// MIT License
//

import {CanvasGenerator} from '../Extensions';

export class CanvasSmallGenerator extends CanvasGenerator{
	run(progressBar){
		const ctx = this.canvas.getContext("2d");

		// Background
		ctx.fillStyle = progressBar._theme.background;
		ctx.fillRect(0, 0, 310, 20);

		// Red Lines
		ctx.fillStyle = progressBar._theme.incomplete;
		let doneI;
		for(let i = 0; i != 101; i++){
			ctx.fillRect(160+(i*1), 2, 1, 16);
			doneI = 160+(i*1);
		}

		// Green Lines
		ctx.fillStyle = progressBar._theme.complete;
		ctx.beginPath();
		for(let i = 0; i != progressBar.percent + 1; i++){
			ctx.fillRect(160+(i*1), 2, 1, 16);
		}
		
		// Text
		ctx.fillStyle = progressBar._theme.text;
		ctx.font = "1em sans-serif";
		ctx.fillText(progressBar.percent + "%", doneI+8, 16);
		ctx.fillText(progressBar.current + "/" + progressBar.total + " " + progressBar.unit, 5, 16);
	}
	
	getSize(){
		return [310, 20];
	}
}