//dom

const horas = document.querySelector('#horas')
const minutos = document.querySelector('#minutos')
const segundos = document.querySelector('#segundos')


//evento

setInterval(relogio,1000)



//funcões

function relogio (){

let hoje = new Date ()
let hr = hoje.getHours ()
let min = hoje.getMinutes ()
let seg = hoje.getSeconds ()

if (hr<10){
    hr= '0 '+ hr
}

if (min<10){
    min= '0 '+ min
}
if (seg<10){
    seg= '0 '+ seg
}

horas.textContent = hr
minutos.textContent = min
segundos.textContent = seg


}