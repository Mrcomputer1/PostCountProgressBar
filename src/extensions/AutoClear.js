//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2017 Mrcomputer1
// MIT License
//

import {ProgressBarExtension} from '../Extensions';

export class AutoClearExtension extends ProgressBarExtension{
    run(progressBar){
        document.querySelector(progressBar._generator.canvas).getContext("2d").clearRect(0, 0, progressBar._generator.getSize()[0], progressBar._generator.getSize()[1]);
    }
}