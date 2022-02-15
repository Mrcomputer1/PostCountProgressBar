//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2022 Mrcomputer1
// MIT License
//

import {ProgressBarGenerator} from '../Extensions';

function escapeHTML(text) {
	var safe = text + "";
	safe.replace(/"/g, "&quot;");
	safe.replace(/'/g, "&#039;");
	safe.replace(/&/g, "&amp;");
	safe.replace(/</g, "&lt;");
	safe.replace(/>/g, "&gt;");
	return safe;
}

export class TextGenerator extends ProgressBarGenerator{
	constructor(element){
		super(element);
		
		document.querySelector(element).innerHTML = "";
		this.downloadText = null;
	}

    run(progressBar){
		let txt = "";
		let dltxt = "";

		txt += escapeHTML(progressBar.current) + "/" + escapeHTML(progressBar.total) + " " + escapeHTML(progressBar.unit) + " ";
		dltxt = txt;

		for(let i = 0; i != progressBar.percent + 1; i++){
			dltxt += "[color=" + progressBar._theme.complete + "]|[/color]";
			txt += "<span style='color:" + escapeHTML(progressBar._theme.complete) + "'>|</span>";
		}

		for(let i = 0; i != progressBar.percent + 1; i++){
			dltxt += "[color=" + progressBar._theme.incomplete + "]|[/color]";
			txt += "<span style='color:" + escapeHTML(progressBar._theme.incomplete) + "'>|</span>";
		}

		txt += " " + escapeHTML(progressBar.percent) + "%";
		dltxt += " " + escapeHTML(progressBar.percent) + "%";
		
		document.querySelector(this.element).innerHTML = txt;
		this.downloadText = dltxt;
    }

    getSize(){
        return null;
    }

	getDownloadLink(callback){
		const b = new Blob([this.downloadText], {type: "text/plain"});
		callback(URL.createObjectURL(b));
	}
	
	getDownloadExtension(){
		return ".txt";
	}
}