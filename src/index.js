//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2019 Mrcomputer1
// MIT License
//

import {ProgressBar} from './ProgressBar';
import {ProgressBarExtension, ProgressBarTheme, ProgressBarGenerator, CanvasGenerator} from './Extensions';
import {CanvasBigGenerator} from './generators/CanvasBig';
import {CanvasSmallGenerator} from './generators/CanvasSmall';
import {CanvasBackgroundPostsGenerator} from './generators/CanvasBackgroundPosts';
import {CanvasBackgroundPercentGenerator} from './generators/CanvasBackgroundPercent';
import {TextGenerator} from './generators/Text';
import {ThemeDefault} from './themes/Default';
import {ThemeWhite} from './themes/White';
import {ThemeBlue} from './themes/Blue';
import {AutoSizeExtension} from './extensions/AutoSize';
import {AutoClearExtension} from './extensions/AutoClear';

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