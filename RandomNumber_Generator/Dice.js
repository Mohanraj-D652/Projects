const mybutton = document.getElementById("mybutton");
const mylabel = document.getElementById("mylabel");

const min = 1;
const max = 6;
let Random_Number;

mybutton.onclick = function(){
    Random_Number = Math.floor(Math.random()* max) * min + 1;
    mylabel.textContent = Random_Number;


}