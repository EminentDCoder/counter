//COUNTER CODE
var countDisplay = document.getElementById("count-display");
var increse = document.getElementById("increase");
var decrese = document.getElementById("decrease");
var zero = document.getElementById("reset");
var count = 0;

function increase(){
  count++;
  countDisplay.innerHTML = count;

}
function decrease(){
    if(count <= 0) {
        count = 1;
    }
    count--;
    countDisplay.innerHTML = count;
    

}

function reset(){
    if(zero.onclick){
        count = 0;
    }
    countDisplay.innerHTML = count;
}

increse.onclick = increase;
decrese.onclick = decrease;
zero.onclick = reset;