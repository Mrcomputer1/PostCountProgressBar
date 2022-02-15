//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2022 Mrcomputer1
// MIT License
//

const {ProgressBar} = require('./ProgressBar');
const {ProgressBarExtension, ProgressBarTheme, ProgressBarGenerator, CanvasGenerator} = require('./Extensions');
const {CanvasBigGenerator} = require('./generators/CanvasBig');
const {CanvasSmallGenerator} = require('./generators/CanvasSmall');
const {CanvasBackgroundPostsGenerator} = require('./generators/CanvasBackgroundPosts');
const {CanvasBackgroundPercentGenerator} = require('./generators/CanvasBackgroundPercent');
const {TextGenerator} = require('./generators/Text');
const {ThemeDefault} = require('./themes/Default');
const {ThemeWhite} = require('./themes/White');
const {ThemeBlue} = require('./themes/Blue');
const {ThemeCustom} = require('./themes/Custom');
const {AutoSizeExtension} = require('./extensions/AutoSize');
const {AutoClearExtension} = require('./extensions/AutoClear');

// Core
module.exports = ProgressBar;
module.exports.ProgressBar = ProgressBar;
module.exports.extension = ProgressBarExtension;
module.exports.generator = ProgressBarGenerator;
module.exports.canvasGenerator = CanvasGenerator;
module.exports.theme = ProgressBarTheme;

// Generators
module.exports.generators = {};
module.exports.generators.CanvasBigGenerator = CanvasBigGenerator;
module.exports.generators.CanvasSmallGenerator = CanvasSmallGenerator;
module.exports.generators.CanvasBackgroundPostsGenerator = CanvasBackgroundPostsGenerator;
module.exports.generators.CanvasBackgroundPercentGenerator = CanvasBackgroundPercentGenerator;
module.exports.generators.TextGenerator = TextGenerator;

// Themes
module.exports.themes = {};
module.exports.themes.default = ThemeDefault;
module.exports.themes.white = ThemeWhite;
module.exports.themes.blue = ThemeBlue;
module.exports.themes.custom = ThemeCustom;

// Extensions
module.exports.extensions = {};
module.exports.extensions.autoSize = AutoSizeExtension;
module.exports.extensions.autoClear = AutoClearExtension;