/*1-Suma de los negativos.
 2-Suma de los positivos.
  3-Cantidad de positivos. 
  4-Cantidad de negativos. 
  5-Cantidad de ceros. 
  6-Cantidad de números pares.
  7-Promedio de positivos.
  8-Promedios de negativos.
   9-Diferencia entre positivos y negativos, (positvos-negativos). */

function Mostrar()
{
	var acumuladorNeg = 0;
	var acumuladorPos =0;
	var contadorPositivos=0;
	var contadorNegativos=0;
	var contadorCeros=0;
	var contadorPares=0;
	var promedioPos =0;
	var promedioNeg =0;
	var diferencia;
	var numero;
	var seguir= "s";
	

	do
	{	
		numero =parseInt(prompt("ingrese un numero"));
		if(numero < 0)
		{
			contadorNegativos++;
			acumuladorNeg= acumuladorNeg + numero;
		}
		else if(numero >0)
		{
			contadorPositivos++;
			acumuladorPos = acumuladorPos + numero;
		}
		else
		{
			contadorCeros++;
		}
		if( numero % 2 ==0)
		{
			contadorPares++;
		}
	
		respuesta = prompt("Desea continuar?: ");
	}while(respuesta =='s');

	if( contadorPositivos !=0)
	{
		promedioPos = acumuladorPos / contadorPositivos;
	}
	if( contadorNegativos !=0)
	{
		promedioNeg = acumuladorNeg/ contadorNegativos;
	}
	diferencia = acumuladorPos - acumuladorNeg;

	document.write("La suma de los negativos es "+ acumuladorNeg +"<br/>");
	document.write("La suma de los positivos es "+ acumuladorPos +"<br/>");
	document.write("La cantidad de los negativos es "+ contadorNegativos +"<br/>");
	document.write("la cantidad de los positivos es "+ acumuladorNeg +"<br/>");
	document.write("la cantidad de pares es "+ contadorPares +"<br/>");
	document.write("La cantidad de ceros es  "+ contadorCeros +"<br/>");
	document.write("El promedio de positvos es  "+ promedioPos +"<br/>");
	document.write("El promedio de negativos es  "+ promedioNeg +"<br/>");
	document.write("la diferencia entre negativos y positivos es"+ diferencia +"<br/>");
}//FIN DE LA FUNCIÓN