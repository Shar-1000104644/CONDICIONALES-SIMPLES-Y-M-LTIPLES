//Escribe aquí tu código

// “El náufrago satisfecho” ofrece hamburguesas sencillas, dobles y triples, las
//  cuales tienen un costo de $20.00, $25.00 y $28.00 respectivamente.
//   La empresa acepta tarjetas de crédito con un cargo de 5 % sobre la compra. 
//   Suponiendo que los clientes adquieren sólo un tipo de hamburguesa, 
//   realice un algoritmo para determinar cuánto debe pagar una persona 
//   por N hamburguesas.

function hamburguesas (){
	var hmb=document.getElementById('num_one').value;
	var cantidad=document.getElementsByName('num_two').value;
	var total;

	switch (hmb) {
		case sencillas:
				costo=20;
			break;
		case dobles:
				costo=25;
			break;
		case triples:
				costo=28;
			break;
		default:
			// statements_def
			break;

	total=hmb*cantidad;
	document.getElementById('costo').value=total;
	}

};