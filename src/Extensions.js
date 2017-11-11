//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2017 Mrcomputer1
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
    getSize(){
        return [0, 0];
    }
    run(progressBar){
    }
}