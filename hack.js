const boxA = document.createElement("div");
document.body.appendChild(boxA);

boxA.style.width = "10px";
boxA.style.height = "10px";
boxA.style.backgroundColor = "blue";
boxA.style.position = "absolute";

boxA.style.top = "0px";  
boxA.style.left = "0px"; 

let moveA = 0;
function animateA() {
    moveA += 8;  
    if (moveA > window.innerHeight) {
        moveA = -10;  
    }
    boxA.style.top = moveA + "px"; 
    boxA.style.left = moveA + "px";

    requestAnimationFrame(animateA);
}
animateA();

const boxB = document.createElement("div");
document.body.appendChild(boxB);

boxB.style.width = "10px";
boxB.style.height = "10px";
boxB.style.backgroundColor = "red";
boxB.style.position = "absolute";

boxB.style.bottom = "0px";  
boxB.style.right = "0px"; 

let moveB = 0;
function animateB() {
    moveB += 8;  
    if (moveB > window.innerHeight) {
        moveB = -10;  
    }
    boxB.style.bottom = moveB + "px"; 
    boxB.style.right = moveB + "px";

    requestAnimationFrame(animateB);
}
animateB();

const boxC = document.createElement("div");
document.body.appendChild(boxC);

boxC.style.width = "10px";
boxC.style.height = "10px";
boxC.style.backgroundColor = "blue";
boxC.style.position = "absolute";

boxC.style.top = "0px";  
boxC.style.right = "0px"; 

let moveC = 0;
function animateC() {
    moveC += 8;  
    if (moveC > window.innerHeight) {
        moveC = -10;  
    }
    boxC.style.top = moveC + "px"; 
    boxC.style.right = moveC + "px";

    requestAnimationFrame(animateC);
}
animateC();

const boxD = document.createElement("div");
document.body.appendChild(boxD);

boxD.style.width = "10px";
boxD.style.height = "10px";
boxD.style.backgroundColor = "red";
boxD.style.position = "absolute";

boxD.style.bottom = "0px";  
boxD.style.left = "0px"; 

let moveD = 0;
function animateD() {
    moveD += 8;  
    if (moveD > window.innerHeight) {
        moveD = -10;  
    }
    boxD.style.bottom = moveD + "px"; 
    boxD.style.left = moveD + "px";

    requestAnimationFrame(animateD);
}
animateD();
















