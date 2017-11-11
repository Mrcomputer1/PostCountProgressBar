# Post Count Progress Bar
Source code of Mrcomputer1's Post Count Progress Bar version 2 (see master-1.x for version 1 in PHP)

# API

```
var done = 50;
var goal = 100;

var bar = new progressBar();
bar.setProgress(done, goal)
    .setUnit("posts")
    .use(new progressBar.themes.default())
    .use(new progressBar.generators.CanvasBigGenerator("#canvas"));

// Generate the bar into the canvas with
// bar._generator.getSize() returns a Array of two numbers. Index 0 is X and Index 1 is Y.
bar.generate();
```

# progressBar API

## progressBar.ProgressBar

Note: `new progressBar` will work the same as `new progressBar.ProgressBar`

### use(extension/theme/generator ext)

Extensions will be run before the generator.

Generators are used when `generate()` is called.

Themes are used by the generator

### setProgress(int done, int goal)

### setUnit(String unit)

### generate()

Runs the generater

## progressBar.extension

### run(ProgressBar bar)
Called when ran

## progressBar.theme

### constructor()

```
// Sets the following
this.background
this.incomplete
this.complete
this.text
```

## progressBar.generator

### constructor(String canvas)
```
// Sets the following
this.canvas
```

### run(ProgressBar bar)
Called when ran

## progressBar.generators

### CanvasBigGenerator(String canvas)
done/goal posts (100 lines) percent%

### CanvasSmallGenerator(String canvas)
done/goal posts (bar) percent%

### CanvasBackgroundPosts(String canvas)
Background is progress bar

Posts count is on top

### CanvasBackgroundPercent(String canvas)
Background is progress bar

Percent is on top

## progressBar.themes

### default
Black background, white text, green complete lines, red incomplete lines

### white
White background, black text, green complete lines, red incomplete lines

## progressBar.extensions

## AutoClear
Clear the canvas before generating

## AutoSize
Set the canvas size before generating