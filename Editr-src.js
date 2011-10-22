var Editr = function(image){
		var cvs = document.createElement('canvas');
		cvs.setAttribute('width', image.width);
		cvs.setAttribute('height', image.height);
		var ctx = cvs.getContext('2d');
		ctx.drawImage(image, 0, 0);
		var imgData = origData = ctx.getImageData(0, 0, image.width, image.height);
		
		ctx.grayScale = function(){
			var px = imgData.data;
	    	var length = px.length;
	    	for (var i = 0 ; i < length; i+= 4 ) {
			    var gray = (px[i] + px[i+1] + px[i+2]) / 3;
		        imgData.data[i] = gray;
		        imgData.data[i+1] = gray;
		        imgData.data[i+2] = gray;   
		     }
		     return ctx;
		}
		
		ctx.sepia = function(){
			var px = imgData.data;
        	var length = px.length;
	        for (var i = 0 ; i < length; i+= 4 ) {
            	var red = (px[i] * .393) + (px[i+1] * .769) + (px[i+2] * .189);
		        var green = (px[i] * .349) + (px[i+1] * .686) + (px[i+2] * .168);
		        var blue = (px[i] * .272) + (px[i+1] * .534) + (px[i+2] * .131);
		        imgData.data[i] = red;
		        imgData.data[i+1] = green;
		        imgData.data[i+2] = blue; 
			}
			return ctx;
		}
		
		ctx.invert = function(){
			var px = imgData.data;
	       	var length = px.length;
	       	for (var i = 0 ; i < length; i+= 4 ) {
		      	imgData.data[i] = 255 - px[i];
		      	imgData.data[i+1] = 255 - px[i+1];
		     	imgData.data[i+2] = 255 - px[i+2];   
		    }
			return ctx;
		}
		
		ctx.monoRed = function(){
			var px = imgData.data;
			var length = px.length;
			for (var i = 0 ; i < length; i+= 4 ) {
	      	    imgData.data[i+1] = 0;
	     	    imgData.data[i+2] = 0;   
	     	}
			return ctx;
		}
		
		ctx.monoGreen = function(){
			var px = imgData.data;
    	   	var length = px.length;
    	   	for (var i = 0 ; i < length; i+= 4 ) {
	      	    imgData.data[i] = 0;
	     	    imgData.data[i+2] = 0;   
	     	}
			return ctx;
		}
		
		ctx.monoBlue = function(){
			var px = imgData.data;
    	   	var length = px.length;
    	   	for (var i = 0 ; i < length; i+= 4 ) {
	      	    imgData.data[i] = 0;
	     	    imgData.data[i+1] = 0;   
	     	}
			return ctx;
		}
		
		ctx.replace = function(){
			ctx.putImageData(imgData, 0, 0);
			image.setAttribute('src', ctx.canvas.toDataURL('image/png'));
		}
		
		ctx.dataURL = function(){
			return ctx.canvas.toDataURL('image/png');
		}
		
		return ctx;
	}