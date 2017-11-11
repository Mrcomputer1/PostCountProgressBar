//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2017 Mrcomputer1
// MIT License
//

import {ProgressBarGenerator} from '../Extensions';

// 710, 20
export class CanvasBigGenerator extends ProgressBarGenerator{
    constructor(canvas){
        super()
        this.canvas = canvas;
    }
    run(progressBar){
        var ctx = document.querySelector(this.canvas).getContext("2d");
        // Background
        ctx.fillStyle = progressBar._theme.background;
        ctx.fillRect(0, 0, 710, 20);
        // Red Lines
        ctx.fillStyle = progressBar._theme.incomplete;
        var doneI;
        for(var i = 0; i != 101; i++){
            ctx.fillRect(160+(i*5), 2, 2, 16);
            doneI = 160+(i*5);
        }
        // Green Lines
        ctx.fillStyle = progressBar._theme.complete;
        ctx.beginPath();
        for(var i = 0; i != progressBar.percent + 1; i++){
            ctx.fillRect(160+(i*5), 2, 2, 16);
        }
        // Text
        ctx.fillStyle = progressBar._theme.text;
        ctx.font = "1em sans-serif";
        ctx.fillText(progressBar.percent + "%", doneI+8, 16);
        ctx.fillText(progressBar.current + "/" + progressBar.total + " " + progressBar.unit, 5, 16);
    }
    getSize(){
        return [710, 20];
    }
}