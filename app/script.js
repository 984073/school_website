var image = document.getElementById("image")


var images = ["image1.jpg", "image2.jpg", "image3.jpg"];

var index = 0;

function updateImage() {

image.src = images[index];

index = (index + 1) % images.length;

}

setInterval(updateImage,2000);