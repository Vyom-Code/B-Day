const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.ImagefromUrl ('BirthdayImage.jpg'), function(Img) {
block_image_object.scaleToWidth(700);
block_image_object.scaleToWidth(510);
block_image_object.set ({
    top:0,
    left:0


    });
    canvas.add(block_image_object);
});
	
}

function playSound(){
	x.play()
}
fabric.Image.fromUrl(get_image, function(Img))