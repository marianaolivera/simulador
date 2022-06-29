let cantidad =parseInt(prompt("Ingrese cantidad de laminas:")) /* El cliente coloca la cantidad de laminas que desea comprar*/ 
function calcularTotal (){
   let total = cantidad*2000
   alert("El monto total es =$"+total)
   return total

}
/*Esta función multiplica la cantidad de laminas que desa comprar el cliente por el monto del producto*/ 

function descuentoPromo (){
   let despPromo = calcularTotal()
   let descFinal = despPromo/1.1
   alert("El monto con descuento por promocion es = $"+descFinal.toFixed(2))
   return descFinal
}
/*La función hace el descuento del 10 % sobre el monto total*/

descuentoPromo()
