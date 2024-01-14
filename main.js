//Inizialisation des constantes.
const nomeHtml=document.getElementById("nominativo")
const kmHtml=document.getElementById("km")
const fasciaEtaHtml =document.getElementById("eta")
//console.log(nomeHtml.value,kmHtml.value,fasciaEtaHtml.value) 
const Risultato=document.getElementById("good")
const carrozzaHtml=document.getElementById("CodiceCarrozza")
const codiceHtml =document.getElementById("Cp")
const nomeEndHtml=document.getElementById("Resultname")
const tipoHtml=document.getElementById("tipo")
const priceHtml=document.getElementById("price")




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
    nomeEndHtml.innerHTML=nomeHtml.value
    if(fasciaEtaHtml.value==="minorenne"){
            tipoHtml.innerHTML="biglietto scontato del 20%"
            priceHtml.innerHTML=((kmHtml.value*0.21)*0.8).toFixed(2) +"euro"
    }else if(fasciaEtaHtml.value==="maggiorenne"){
        tipoHtml.innerHTML="biglietto standard"
        priceHtml.innerHTML=(kmHtml.value*0.21).toFixed(2) +"euro"
    }else if(fasciaEtaHtml.value==="anziano"){
        tipoHtml.innerHTML="biglietto scontato del 40%"
        priceHtml.innerHTML=((kmHtml.value*0.21)*0.6).toFixed(2) + "euro"  
     }
    
})
function RandomNumber(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}