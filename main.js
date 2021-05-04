lastpositionofx=0;
lastpositionofy=0;
color="";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
width=screen.width;
new_width=screen.width-70;
new_heigth=screen.height-300;
if (width<992){
    document.getElementById("myCanvas").width=new_width;
    document.getElementById("myCanvas").height=new_height;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
    color=document.getElementById("pencolor").value;
    lastpositionofx=e.touches[0].clientX-canvas.offsetLeft;
    lastpositionofy=e.touches[0].clientY-canvas.offsetTop;
    
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
currentPositionx=e.touches[0].clientX-canvas.offsetLeft;
currentpositiony=e.touches[0].clientY-canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle=color;
    ctx.moveTo(lastpositionofx,lastpositionofy);
    ctx.lineTo(currentPositionx,currentpositiony);
    ctx.stroke();

lastpositionofx=currentPositionx
lastpositionofy=currentpositiony
}
function clearcanvas(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}