//Escribe aquí tu código

// // “La langosta ahumada” es una empresa dedicada a ofrecer banquetes;
//  sus tarifas son las siguientes: el costo de platillo por persona es 
//  de $95.00, pero si el número de personas es mayor a 200 pero menor o 
//  igual a 300, el costo es de $85.00. Para más de 300 personas el costo
//   por platillo es de $75.00.
// // Se requiere un algoritmo que ayude a determinar el presupuesto que 
// se debe presentar a los clientes que deseen realizar un evento. 
// Mediante pseudocódigo y diagrama de flujo represente su solución.

function presupuesto(){

var persona = parseFloat(document.getElementById('num_one').value);

var opcionUno = persona*95;
var opcionDos = persona*85;
var opcionTres = persona*75;

	if (persona<=200){
		document.getElementById('num_two').value = opcionUno;
	}
	else if (persona>200 && persona<=300){
		document.getElementById('num_two').value = opcionDos;
	}
	else{
		document.getElementById('num_two').value = opcionTres;
	}
}


