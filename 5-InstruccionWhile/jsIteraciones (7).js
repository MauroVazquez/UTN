function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='s';
	var promedio;

	do
	{	
		numero =parseInt (prompt("ingrese un numero"));
			contador++;
			acumulador= acumulador + numero;
			respuesta =prompt("Desea continuar");
	
	}while(respuesta =='s');

  promedio/contador

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador.toFixed(2);

}//FIN DE LA FUNCIÓN