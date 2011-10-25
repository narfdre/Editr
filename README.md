EditrJS 
========
A simple lightweight, library agnotistc image editor built in javascript. 

Currently in version 1.0

Supported
=========

Sepia Tone
Grayscale
Inverted
Monochromatic (Red, Green, Blue)
Horizontal Flip
180 Rorate
Vertical Flip(Can be accomplished by using rotate180() with flipHorizontal())

Future Support
==============
Revert
Saturation
More to come...

Usage
=======
First off, make sure that your img tag has the proper height and width of the image. It helps things run smoother. 

	Editr(image); //This parameter is just your img element. This alone will do nothing.
	
	Editr(image).sepia();//This will apply the sepia filter your your image


Two Types of usage

	Editr(image).sepia().replace(); //This replaces the image that was passed in at the spot
	
	Editr(image).sepia().dataURL(); //This will return the dataURL which you can then add as the src to any img tag in your site. 


Chainable

	Editr(image).sepia().grayScale().monoRed().replace() //This will go through each change and keep on applying the changes to the image and then replace the image. 


API
======

	.sepia()
	.grayScale()
	.invert()
	.monoRed()
	.monoBlue()
	.monoGreen()
	.rotate180()
	.flipHorizontal()