//Escribe aquí tu código

function pagar(){
	var precio_inicial = parseFloat(document.getElementById('num_one').value);
	var dsct_1 = 0.15;
	var dsct_2 = 0.08;

	if(precio_inicial > 2500){
		var descuento_uno = precio_inicial * dsct_1;
		document.getElementById('num_two').value = descuento_uno;
		var precio_final = precio_inicial - descuento_uno;
		document.getElementById('num_three').value = precio_final;
	}
	else{
		var descuento_dos = precio_inicial * dsct_2;
		document.getElementById('num_two').value = descuento_dos;
		var precio_final = precio_inicial - descuento_dos;
		document.getElementById('num_three').value = precio_final;
	}
}




