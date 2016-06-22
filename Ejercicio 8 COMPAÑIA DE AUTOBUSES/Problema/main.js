//Escribe aquí tu código

// Una compañía de viajes cuenta con tres tipos de autobuses (A, B y C), cada 
// uno tiene un precio por kilómetro recorrido por persona, los costos respectivos 
// son $2.0, $2.5 y $3.0.

// Se requiere determinar el costo total y por persona del viaje considerando 
// que cuando éste se presupuesta debe haber un mínimo de 20 personas, de lo
//  contrario el cobro se realiza con base en este número límite


function costoTotal(){
	var bus=document.getElementById('num_one').value;
	bus=toUpperCase(bus);
	var people=document.getElementById('num_two').value;
	var total;
	var costo;

	switch (bus) {
		case A:
			costo=2;			
			total = people*costo;
			document.getElementById('resultado').value=total;
			break;		
		case B:
			costo=2.5;
			total = people*costo;
			document.getElementById('resultado').value=total;
			break;		
		case C:
			costo=3;
			total = people*costo;
			document.getElementById('resultado').value=total;
			break;

		default:
			break;
	}

};

function mensaje(letra){
	var msm=document.createElement('h2');
	var text=document.createTextNode(letra);
	msm.appendChild(text);
	document.body.appendChild(msm);
};