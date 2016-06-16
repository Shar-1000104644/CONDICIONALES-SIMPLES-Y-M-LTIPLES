//Escribe aquí tu código
function clasificar(){
	var numero=parseInt(document.getElementById('num_one').value);
	if(numero>0){
		var letra = document.createElement('h1');
		var l = document.createTextNode('Este número es positivo');
		letra.appendChild(l);
		document.body.appendChild(letra);
	}
	else if (numero==0){
		var letra = document.createElement('h1');
		var l = document.createTextNode('EL CERO NO TIENE SIGNO, NO ES NI POSITIVO NI NEGATIVO');
		letra.appendChild(l);
		document.body.appendChild(letra);
	}
	else{
		var letra = document.createElement('h1');
		var l = document.createTextNode('Este número es negativo');
		letra.appendChild(l);
		document.body.appendChild(letra);}
}