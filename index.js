let cantidad =parseInt(prompt("Ingrese cantidad de laminas:"))
function calcularTotal (){
   let total = cantidad*2000
   alert("el monto total es =$"+total)
   return total

}

function descuentoPromo (){
   let despPromo = calcularTotal()
   let descFinal = despPromo/1.1
   alert("El monto con descuento por promocion es = $"+descFinal.toFixed(2))
   return despPromo
}

descuentoPromo()
