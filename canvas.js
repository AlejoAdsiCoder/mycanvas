var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext('2d');
ctx.font = "16px Arial";

canvas.addEventListener("mouseover", function(e) {
    var cRect = canvas.getBoundingClientRect();  // Gets CSS pos, and width/height
    var canvasX = Math.round(e.clientX - cRect.left); // Substract the 'left' of the canvas
    var canvasY = Math.round(e.clientY - cRect.top);    // From the x/y positions to make
    ctx.clearRect(0,0, canvas.clientWidth, canvas.height); // (0,0 the top left of the canvas)
    ctx.fillText('X: '+canvasX+ ", Y: "+canvasY, 10, 20);
});