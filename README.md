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
bar.generate();
// bar._generator.getSize() returns a Array of two numbers. Index 0 is X and Index 1 is Y.
// Note: getSize() can return null if no exact sizes are available (like the text generator).
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

### download(Function callback)
Generates a download link and returns it in the callback function.

### getDownloadExtension()
Returns the extension of the download file, with a `.`

For example, the canvas generators return `.png` and the text generators return `.txt`

## progressBar.extension

### run(ProgressBar bar)
Called when ran

## progressBar.theme

### constructor()

```
super();
// Sets the following
this.background
this.incomplete
this.complete
this.text
```

## progressBar.generator

### constructor(String element)
```
super();
// Sets the following
this.element
```

### run(ProgressBar bar)
Called when ran

### getSize()
The exact size of the generated progress bar or null if no exact size.

### getDownloadLink(Function callback)
Generates a download link for the progress bar.

### getDownloadExtension()
Returns the extension of the download.

## progressBar.canvasGenerator

### constructor(String element)
The constructor is not required. But if you do use it you must include `super(element);` at the top.

### run(ProgressBar bar)
Called when ran

### getSize()
The needed size of the canvas

## progressBar.generators

### CanvasBigGenerator(String element)
done/goal posts (100 lines) percent%

`element` must be either a div element (which will be emptied and a canvas created inside) or a canvas.

### CanvasSmallGenerator(String element)
done/goal posts (bar) percent%

`element` must be either a div element (which will be emptied and a canvas created inside) or a canvas.

### CanvasBackgroundPosts(String element)
Background is progress bar

Posts count is on top

`element` must be either a div element (which will be emptied and a canvas created inside) or a canvas.

### CanvasBackgroundPercent(String element)
Background is progress bar

Percent is on top

`element` must be either a div element (which will be emptied and a canvas created inside) or a canvas.

### Text(String element)
done/goal posts (bar) percent%.

Background and text colour are ignored for the text generator.

## progressBar.themes

### default
Black background, white text, green complete lines, red incomplete lines

### white
White background, black text, green complete lines, red incomplete lines

### blue
Blue background, white text, green complete lines, red incomplete lines

## progressBar.extensions

## autoClear
Clear the canvas before generating. Only for use when generating to a canvas.

## autoSize
Set the canvas size before generating. Only for use when generating to a canvas.