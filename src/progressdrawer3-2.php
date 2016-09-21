<?php

//
// Mrcomputer1's Post Count Progress Bar
// Copyright (C) 2016 Mrcomputer1
// License: GPL-3.0
// ----
// You must give credit on all things you use this script (or a modified version of it) on.
// You are forbidden to remove this notice
//

// progressdrawer3-2.php
// The "small (posts)" size of the progress bar
// Mrcomputer1, 2016

// API docs: github.com/Mrcomputer1/PostCountProgressBar/wiki/API_Documentation

$colorconfig = $_GET['color'];
$colorconfig = explode(":", $colorconfig);

$img = imagecreate(100, 20);
	$clr = explode(",", $colorconfig[0]);
$background = imagecolorallocate($img, $clr[0], $clr[1], $clr[2]); // 0, 0, 0 - Black
	$clr = explode(",", $colorconfig[1]);
$colour = imagecolorallocate($img, $clr[0], $clr[1], $clr[2]); // 255, 0, 0 - Red
	$clr = explode(",", $colorconfig[2]);
$text = imagecolorallocate($img, $clr[0], $clr[1], $clr[2]); // 255, 255, 255 - White

$i = 0;
$i3 = 0;
while($i != 100){
	imageline($img, $i3, 0, $i3, 20, $colour);
	$i = $i + 1;
	$i3 = $i3 + 1;
}

$myi = $_GET['c'];
$i = 0;
$i1 = 0;
	$clr = explode(",", $colorconfig[3]);
$colour = imagecolorallocate($img, $clr[0], $clr[1], $clr[2]); // 0, 255, 0 - Green
while($i != $myi){
	imageline($img, $i1, 0, $i1, 20, $colour);
	$i = $i + 1;
	$i1 = $i1 + 1;
}

imagestring($img, "5", 10, 2, $_GET['ca'] . "/" . $_GET['ctc'] . "", $text);

header( "Content-type: image/png" );
imagepng( $img );
imagecolordeallocate( $colour );
imagecolordeallocate( $text );
imagecolordeallocate( $background );
imagedestroy( $img );
