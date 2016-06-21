// //Escribe aquí tu código

// El director de una escuela está organizando un viaje de estudios, y 
// requiere determinar cuánto debe cobrar a cada alumno y cuánto debe 
// pagar a la compañía de viajes por el servicio. La forma de cobrar es 
// la siguiente: si son 100 alumnos o más, el costo por cada alumno es 
// de $65.00; de 50 a 99 alumnos, el costo es de $70.00, de 30 a 49, 
// de $95.00, y si son menos de 30, el costo de la renta del autobús 
// es de $4000.00, sin importar el número de alumnos.

// Realice un algoritmo que permita determinar el pago a la compañía de
//  autobuses y lo que debe pagar cada alumno por el viaje

function calcular(){
	var alumnos = document.getElementById('num_one').value;
	var costoA1=65;
	var costoB1 = alumnos*costoA1;  //100 alumnos o más
	var costoA2=70;
	var costoB2 = alumnos*costoA2;	//de 50 a 99 alumnos
	var costoA3 =95;
	var costoB3 = alumnos*costoA3;  //de 30 a 49
	var costoB4 =4000;				//si son menos de 30
	var costoA4 = Math.round(costoB4/alumnos);

	if(alumnos>= 100){
		document.getElementById('num_two').value = costoB1;
		document.getElementById('num_three').value = costoA1;
		escribir('Costo de la renta del autobús es:' + ' ' + costoB1 + ' ' + 'Lo que debe pagar cada alumno es:' + ' ' + costoA1);

	}
	else if(alumnos>=50 || alumnos>=99){
		document.getElementById('num_two').value = costoB2;
		document.getElementById('num_three').value = costoA2;
		escribir('Costo de la renta del autobús es:' + ' ' + costoB2 + ' ' + 'Lo que debe pagar cada alumno es:' + ' ' + costoA2);
		
	}
	else if(alumnos>=30 || alumnos>=49){
		document.getElementById('num_two').value = costoB3;
		document.getElementById('num_three').value = costoA3;
		escribir('Costo de la renta del autobús es:' + ' ' + costoB3 + ' ' + 'Lo que debe pagar cada alumno es:' + ' ' + costoA3);
		
	}
	else{
		document.getElementById('num_two').value = costoB4;
		document.getElementById('num_three').value = costoA4;
		escribir('Costo de la renta del autobús es:' + ' ' + costoB4 + ' ' + 'Lo que debe pagar cada alumno es:' + ' ' + costoA4);
		
	}

}

function escribir(mensaje){
	var texto = document.createElement('h2');
	var letra = document.createTextNode(mensaje);
	texto.appendChild(letra);
	document.body.appendChild(texto);
}

