var Editr = function (image) {
	var cvs = document.createElement('canvas'), ctx, imgData;
	cvs.setAttribute('width', image.width);
	cvs.setAttribute('height', image.height);
	ctx = cvs.getContext('2d');
	ctx.drawImage(image, 0, 0);
	imgData = ctx.getImageData(0, 0, image.width, image.height);
	//GrayScale
	ctx.grayScale = function () {
		var px = imgData.data, length = px.length, i, gray;
		for (i = 0; i < length; i += 4) {
			gray = (px[i] + px[i + 1] + px[i + 2]) / 3;
		    imgData.data[i] = gray;
		    imgData.data[i + 1] = gray;
			imgData.data[i + 2] = gray;   
		 }
		 ctx.putImageData(imgData, 0, 0);
		 return ctx;
	}
	//Sepia
	ctx.sepia = function () {
		var px = imgData.data, length = px.length, i, red, green, blue;
	    for (i = 0; i < length; i += 4) {
			red = (px[i] * 0.393) + (px[i + 1] * 0.769) + (px[i + 2] * 0.189);
			green = (px[i] * 0.349) + (px[i + 1] * 0.686) + (px[i + 2] * 0.168);
			blue = (px[i] * 0.272) + (px[i + 1] * 0.534) + (px[i + 2] * 0.131);
		    imgData.data[i] = red;
		    imgData.data[i + 1] = green;
		    imgData.data[i + 2] = blue; 
		}
		ctx.putImageData(imgData, 0, 0);
		return ctx;
	}
	//Invert
	ctx.invert = function () {
		var px = imgData.data, length = px.length, i;
	    for (i = 0; i < length; i += 4) {
		    imgData.data[i] = 255 - px[i];
		    imgData.data[i + 1] = 255 - px[i + 1];
		    imgData.data[i + 2] = 255 - px[i + 2];   
		}
		ctx.putImageData(imgData, 0, 0);
		return ctx;
	}
	//Monochromatic Red
	ctx.monoRed = function () {
		var px = imgData.data, length = px.length, i;
		for (i = 0; i < length; i += 4) {
			imgData.data[i + 1] = 0;
			imgData.data[i + 2] = 0;   
	    }
	    ctx.putImageData(imgData, 0, 0);
		return ctx;
	}
	//Monochromatic Green
	ctx.monoGreen = function () {
		var px = imgData.data, length = px.length, i;
    	for (i = 0; i < length; i += 4) {
	      	imgData.data[i] = 0;
	     	imgData.data[i + 2] = 0;   
	    }
	    ctx.putImageData(imgData, 0, 0);
		return ctx;
	}
	//Monochromatic Blue
	ctx.monoBlue = function () {
		var px = imgData.data, length = px.length, i;
    	for (i = 0; i < length; i += 4) {
	      	imgData.data[i] = 0;
	     	imgData.data[i + 1] = 0;   
	    }
	    ctx.putImageData(imgData, 0, 0);
		return ctx;
	}
	//180 Rotate
	ctx.rotate180 = function () {
		var image = document.createElement('img');
		image.setAttribute('src', ctx.canvas.toDataURL('image/png'));
		ctx.translate(image.width-1, image.height-1);
		ctx.rotate(Math.PI);
		ctx.drawImage(image, 0, 0, image.width, image.height);   
		return ctx;
	}
	//Flip Horizontally
	ctx.flipHorizontal = function () {
		var image = document.createElement('img');
		image.setAttribute('src', ctx.canvas.toDataURL('image/png'));
   		ctx.translate(image.width, 0);
		ctx.scale(-1, 1);
		ctx.drawImage(image, 0, 0, image.width, image.height);   
		return ctx;
	}
	//Replace image on the DOM
	ctx.replace = function () {
		image.setAttribute('src', ctx.canvas.toDataURL('image/png'));
	}
	//Return the DataURL
	ctx.dataURL = function () {
		return ctx.canvas.toDataURL('image/png');
	}
	
	return ctx;
}