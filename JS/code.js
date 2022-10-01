function ToRadians(degrees){
    return degrees * Math.PI / 180;
}

function GetRandomInteger(a, b){
    if (a > b){
        small = b;
        large = a;
    }
    else{
        small = a;
        large = b;
    }
    
    let x = parseInt(Math.random() * (large - small + 1)) + small
    return x;
}

function RandomColour(){
    let r = GetRandomInteger(0, 255);
    let g = GetRandomInteger(0, 255);
    let b = GetRandomInteger(0, 255);
    return "rgba(" + r + ", " + g + ", " + b + ", 1.0)";
}

let can = document.getElementById("drawingCanvas");
let brush = can.getContext("2d");
let x = 55;
let y = 50;
let radius = 10;
let dX = 10;

function DrawCircle(){
    brush.clearRect(0,0,can.width, can.height);
    brush.beginPath();
    brush.arc(x, y, radius, ToRadians(0), ToRadians(360));
    brush.strokeStyle = RandomColour();
    brush.closePath();
    brush.stroke();

    
    //Make circle bounce
    if(x + dX + radius - 1  < can.width){
        x += dX;
    }
    else{
        dX = -dX;
    }

    if(x + dX - radius >= 0){
        x += dX;
    }
    else{
        dX = -dX;
    }
    
    
}

setInterval(DrawCircle, 100);