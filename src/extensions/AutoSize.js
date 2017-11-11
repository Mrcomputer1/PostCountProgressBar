//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2017 Mrcomputer1
// MIT License
//

import {ProgressBarExtension} from '../Extensions';

export class AutoSizeExtension extends ProgressBarExtension{
    run(progressBar){
        var canvas = document.querySelector(progressBar._generator.canvas);
        canvas.setAttribute("width", progressBar._generator.getSize()[0]);
        canvas.setAttribute("height", progressBar._generator.getSize()[1]);
    }
}