// Task 1 JS
function clickMe(){
    alert('This is the Alert Box');
}

// Task 2 JS
function image(){
    alert('Thanks for clicking on this image');
}

// Task 3 JS
function delet() {
    var td = event.target.parentNode; 
    var tr = td.parentNode;
    tr.parentNode.removeChild(tr);
}

// task 5 JS
var num = 0;
document.getElementById("count").innerText = num;

function increment() {
    num = num + 1;
    document.getElementById("count").innerText = num;
}

function decrement() {
    num = num - 1;
    document.getElementById("count").innerText = num;
}