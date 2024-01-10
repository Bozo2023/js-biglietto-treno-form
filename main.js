//Inizialisation des constantes.
const nomeHtml=document.getElementById("nominativo")
const kmHtml=document.getElementById("km")
const fasciaEtaHtml =document.getElementById("eta")
//console.log(nomeHtml.value,kmHtml.value,fasciaEtaHtml.value) 
const Risultato=document.getElementById("good")
const carrozzaHtml=document.getElementById("CodiceCarrozza")
const codiceHtml =document.getElementById("Cp")

Risultato.addEventListener('click',function(){
    //console.log(nomeHtml.value,kmHtml.value,fasciaEtaHtml.value)

    console.log(element = document.querySelector('h1.new'));
    element.style.display='block';
    
    console.log(element = document.querySelector('.recap'));
    element.style.display='block';
    let CodiceCarrozza=RandomNumber(0,10)
    let codiceCp=RandomNumber(100,10000)
    carrozzaHtml.innerHTML= CodiceCarrozza
    codiceHtml.innerHTML=codiceCp
})
function RandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}