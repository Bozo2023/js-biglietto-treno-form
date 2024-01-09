const factor=0.21;
const min=0.2;
const max=0.4
let km=document.getElementById("km");
let age=document.getElementById("eta");
costo= km*0.21
document.getElementById("good").addEventListener("click",function(){
costo.value=(km.value*factor)-(min*(km.value*factor))
})