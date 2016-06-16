//Escribe aquí tu código

function promediar(){
	var numeroUno=document.getElementById('num_one').value;
	var numeroDos=document.getElementById('num_two').value;
	var numeroTres=document.getElementById('num_thre').value;
	var resultado=(parseInt(numeroUno)+parseInt(numeroDos)+parseInt(numeroTres))/3;
	var resultado=resultado.toFixed(1)
	document.getElementById('promedio').value= resultado;
	if(resultado>=6){
		var letra = document.createElement("h1");
		var t = document.createTextNode('Tu promedio final es:' + ' ' + resultado + ' '+ 'Estas aprobado!'); 
		letra.appendChild(t); 
	    document.body.appendChild(letra);				
	}else{
		var letra = document.createElement("h1");
		var t = document.createTextNode('Tu promedio final es:' + ' ' + resultado + ' '+ 'Estas reprobado!'); 
		letra.appendChild(t); 
	    document.body.appendChild(letra);
	}
}