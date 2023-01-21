var canvas = document.getElementById("canvas");
var ox = canvas.width / 2;
var oy = canvas.height / 2;
ctx.font = "42px serif";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillStyle = "#800";
ctx.fillRect(ox / 2, oy / 2, ox, oy);

download_img = function(el) {
    //get image URI from canvas object
    var imageURI = canvas.toDataURL("image.png");
    el.href = imageURI
}