var image =["pexels1.jpeg",
			"pexels3.jpeg",
			"pexels2.jpeg",
			"pexels4.jpeg",
			"pexels5.jpeg",
			"pexels6.jpeg",
			"pexels7.jpeg"];

var i=0;
function slides() {
		document.getElementById('slideimage').src = image[i];
		if (i<(image.length-1))
			i++;
		else
			i=0;
}		

setInterval(slides,2000)	