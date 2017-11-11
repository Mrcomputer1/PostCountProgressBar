//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2017 Mrcomputer1
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
        this._language = null;
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
        var percent = current / total * 100;
        this.current = current;
        this.total = total;
        this.percent = percent;
        return this;
    }
    generate(){
        for(var ext of this._extensions){
            ext.run(this);
        }
        this._generator.run(this);
    }
}