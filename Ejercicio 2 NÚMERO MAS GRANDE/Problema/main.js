//Escribe aquí tu código

function mayor(){
	var numeroUno=parseInt(document.getElementById('num_one').value);
	var numeroDos=parseInt(document.getElementById('num_two').value);
	if(numeroUno>numeroDos){
		var letra = document.createElement("h1");
		var t = document.createTextNode('El número mayor es' + ' ' + numeroUno); 
		letra.appendChild(t); 
	    document.body.appendChild(letra);				
	}
	else if (numeroUno == numeroDos){
		var letra = document.createElement("h1");
		var t = document.createTextNode('Ambos números son iguales' + ' ' + numeroUno); 
		letra.appendChild(t); 
	    document.body.appendChild(letra);	
		}
	else if (numeroDos>numeroUno){
		var letra = document.createElement("h1");
		var t = document.createTextNode('El número mayor es' + ' ' + numeroDos); 
		letra.appendChild(t); 
	    document.body.appendChild(letra);
	}
}