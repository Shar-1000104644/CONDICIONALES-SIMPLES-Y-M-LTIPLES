//Escribe aquí tu código



// Ejercicio #4: Almacenes “El harapiento distinguido”

// Almacenes “El harapiento distinguido” tiene una promoción: a todos los trajes que tienen un precio superior a $2500.00 se les aplicará un descuento de 15 %, a todos los demás se les aplicará sólo 8 %.

// Realice un algoritmo para determinar el precio final que debe pagar una persona por comprar un traje y de cuánto es el descuento que obtendrá.

// Represéntelo mediante el pseudocódigo, el diagrama de flujo



function pagar(){
	var precio_inicial = parseFloat(document.getElementById('num_one').value);
	var dsct_1 = 0.15;
	var dsct_2 = 0.08;

	if(precio_inicial > 2500){
		var descuento_uno = precio_inicial * dsct_1;
		document.getElementById('num_two').value = descuento_uno;
		var precio_final = precio_inicial-descuento_uno;
		document.getElementById('num_three').value = precio_final;
	}
	else{
		var descuento_dos = precio_inicial * dsct_2;
		document.getElementById('num_two').value = descuento_dos;
		var precio_final = precio_inicial-descuento_dos;
		document.getElementById('num_thre').value = precio_final;
	}
}




