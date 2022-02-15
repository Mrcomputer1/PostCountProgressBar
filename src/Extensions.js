//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2022 Mrcomputer1
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
        return null;
    }

	getDownloadLink(callback){
	}

	releaseDownloadLink(){
	}

	getDownloadExtension(){
	}
}

export class CanvasGenerator extends ProgressBarGenerator{
	constructor(element){
		super(element);

		this._generatedUrl = null;
		
		const e = document.querySelector(this.element);
		if(e.tagName.toLowerCase() == "canvas"){
			this.canvas = e;
			return;
		}
		e.innerHTML = "";
		
		const c = document.createElement("canvas");
		c.width = this.getSize()[0];
		c.height = this.getSize()[1];
		e.appendChild(c);
		
		this.canvas = c;
	}

	getSize(){
		return [0, 0];
	}

	getDownloadLink(callback){
		this.canvas.toBlob(function(blob){
			callback(URL.createObjectURL(blob));
		}, "image/png");
	}

	releaseDownloadLink(){
		if(this._generatedUrl != null)
			URL.revokeObjectURL(this._generatedUrl);
	}
	
	getDownloadExtension(){
		return ".png";
	}
}