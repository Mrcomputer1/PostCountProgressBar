//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2022 Mrcomputer1
// MIT License
//

import {ProgressBarTheme, ProgressBarGenerator, ProgressBarExtension} from './Extensions';

export class ProgressBar{
	constructor(){
		this.unit = null;
		this.total = null;
		this.current = null;
		this.percent = null;

		this._theme = null;
		this._generator = null;
		this._extensions = [];
	}

	use(extension){
		if(extension instanceof ProgressBarTheme){
			this._theme = extension;
		}else if(extension instanceof ProgressBarGenerator){
			this._generator = extension;
		}else if(extension instanceof ProgressBarExtension){
			this._extensions.push(extension);
		}else{
			throw new Error("Invalid extension.");
		}

		return this;
	}

	setUnit(unit){
		this.unit = unit;
		return this;
	}

	setProgress(current, total){
		this.current = current;
		this.total = total;
		this.percent = Math.round(current / total * 100);
		return this;
	}

	generate(){
		for(const ext of this._extensions){
			ext.run(this);
 		}
		
		this._generator.run(this);
	}

	download(callback){
		this._generator.getDownloadLink(callback);
	}

	releaseDownload(){
		this._generator.releaseDownloadLink();
	}
	
	getDownloadExtension(){
		return this._generator.getDownloadExtension();
	}
}