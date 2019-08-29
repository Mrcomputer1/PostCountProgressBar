//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2019 Mrcomputer1
// MIT License
//

var {ProgressBar} = require('./ProgressBar');
var {ProgressBarExtension, ProgressBarTheme, ProgressBarGenerator, CanvasGenerator} = require('./Extensions');
var {CanvasBigGenerator} = require('./generators/CanvasBig');
var {CanvasSmallGenerator} = require('./generators/CanvasSmall');
var {CanvasBackgroundPostsGenerator} = require('./generators/CanvasBackgroundPosts');
var {CanvasBackgroundPercentGenerator} = require('./generators/CanvasBackgroundPercent');
var {TextGenerator} = require('./generators/Text');
var {ThemeDefault} = require('./themes/Default');
var {ThemeWhite} = require('./themes/White');
var {ThemeBlue} = require('./themes/Blue');
var {AutoSizeExtension} = require('./extensions/AutoSize');
var {AutoClearExtension} = require('./extensions/AutoClear');

module.exports = ProgressBar;
module.exports.ProgressBar = ProgressBar;
module.exports.extension = ProgressBarExtension;
module.exports.generator = ProgressBarGenerator;
module.exports.canvasGenerator = CanvasGenerator;
module.exports.theme = ProgressBarTheme;
module.exports.generators = {};
module.exports.generators.CanvasBigGenerator = CanvasBigGenerator;
module.exports.generators.CanvasSmallGenerator = CanvasSmallGenerator;
module.exports.generators.CanvasBackgroundPostsGenerator = CanvasBackgroundPostsGenerator;
module.exports.generators.CanvasBackgroundPercentGenerator = CanvasBackgroundPercentGenerator;
module.exports.generators.TextGenerator = TextGenerator;
module.exports.themes = {};
module.exports.themes.default = ThemeDefault;
module.exports.themes.white = ThemeWhite;
module.exports.themes.blue = ThemeBlue;
module.exports.extensions = {};
module.exports.extensions.autoSize = AutoSizeExtension;
module.exports.extensions.autoClear = AutoClearExtension;