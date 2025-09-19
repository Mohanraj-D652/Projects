const Decrese_Button = document.getElementById("decrese_button");
const Reset_Button = document.getElementById("Reset_button");
const increase_Button = document.getElementById("increase_button");

const count_Label = document.getElementById("counter");

let count = 0;

increase_Button.onclick = function(){
    count++;
    count_Label.textContent = count;
}

Reset_Button.onclick = function(){
    count = 0
    count_Label.textContent = count;
}

Decrese_Button.onclick = function(){
    count--;

   if(count < 0){
    count = 0

   }
    count_Label.textContent = count
}
