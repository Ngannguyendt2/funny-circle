function circle(x,y,radius) {
this.x=x;
this.y=y;
this.radius=radius;
}
function getRandomNumber() {
    return Math.floor(Math.random()*255);
}
function getRandomColor() {
    let red=getRandomNumber();
    let green=getRandomNumber();
    let blue=getRandomNumber();
    return "rgb(" + red + "," + green + "," + blue +")";
}
function createCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let rad=Math.floor(Math.random()*80);
    let y=Math.random()*window.innerHeight;
    let x=Math.random()*window.innerWidth;
    let cirCle= new circle(x, y, rad);
    ctx.beginPath();
    ctx.arc(cirCle.x, cirCle.y, cirCle.radius, 0, 2 * Math.PI);
  ctx.fillStyle=getRandomColor();
    ctx.fill();
}
function createMultiCircle() {
    for(let i=0;i<100;i++)
    {
        createCircle();
    }
}
createMultiCircle();