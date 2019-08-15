function Circle(x, y, radius) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = 10;
    this.dy = 10;
    this.moveX=function () {
        this.x+=this.dx;
    }
    this.moveY=function () {
        this.y+=this.dy;
    }
    this.move=function () {
        this.moveX();
        this.moveY();
    }
}
function getRandomNumber() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    let red = getRandomNumber();
    let green = getRandomNumber();
    let blue = getRandomNumber();
    return "rgb(" + red + "," + green + "," + blue + ")";
}

function createCircle() {
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");
    let radius = Math.floor(Math.random() * 80);
    let color = getRandomColor()
    let y = Math.random() * window.innerHeight;
    let x = Math.random() * window.innerWidth;
    let circle = new Circle(x, y, radius);
    setInterval(function () {
        ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
        if (circle.x <= 0 + circle.radius || circle.x >= canvas.offsetWidth - circle.radius) {
            circle.dx = -circle.dx;
        }
        if (circle.y <= 0 + circle.radius || circle.y >= canvas.offsetHeight - circle.radius) {
            circle.dy = -circle.dy;
        }
        circle.move();
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }, 50);
}
createCircle();