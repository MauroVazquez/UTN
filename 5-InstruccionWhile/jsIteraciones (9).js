function Mostrar()
{

	//var contador=0;
	var mayor ;
	var  menor ;
	var numero;
	var respuesta='s';
	flag = 0;
	do
	{	
		numero =parseInt(prompt("ingrese un numero"));
	/*	contador++;
		if(contador==1)

		{
			mayor = numero
			menor = numero
		}*/
		if (numero > mayor || flag ==0)
		{
			mayor = numero  ;
		}
		if(numero < menor || flag==0)
		{
			menor = numero
			
		}
		flag = 1 
		respuesta = prompt("Desea continuar?: ");
	}while(respuesta =='s');

	document.getElementById('maximo').value="El numero es " +mayor;
	document.getElementById('minimo').value="El numero es" +menor;

}//FIN DE LA FUNCIÓN