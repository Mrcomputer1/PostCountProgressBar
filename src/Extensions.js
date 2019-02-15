//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2019 Mrcomputer1
// MIT License
//

export class ProgressBarExtension{
	constructor(){
	}
	run(progressBar){
	}
}

export class ProgressBarTheme extends ProgressBarExtension{
	constructor(){
		super();
		this.background = null;
		this.incomplete = null;
		this.complete = null;
		this.text = null;
	}
}

export class ProgressBarGenerator extends ProgressBarExtension{
	constructor(element){
		super();
		this.element = element;
	}
    getSize(){
        return [0, 0];
    }
    run(progressBar){
    }
	getDownloadLink(callback){
	}
	getDownloadExtension(){
	}
}

export class CanvasGenerator extends ProgressBarGenerator{
	constructor(element){
		super(element);
		
		var e = document.querySelector(this.element);
		if(e.tagName.toLowerCase() == "canvas"){
			this.canvas = e;
			return;
		}
		e.innerHTML = "";
		
		var c = document.createElement("canvas");
		c.width = this.getSize()[0];
		c.height = this.getSize()[1];
		e.appendChild(c);
		
		this.canvas = c;
	}
	getDownloadLink(callback){
		this.canvas.toBlob(function(blob){
			callback(URL.createObjectURL(blob));
		}, "image/png");
	}
	getDownloadExtension(){
		return ".png";
	}
}