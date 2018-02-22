function Mostrar()
{

	var flag=true;
	var positivo=0;
	var negativo=1;
	var respuesta;
	var numero;

	
 	do
	{	
		numero =parseInt(prompt("ingrese un numero"));
		if (numero >=0 )
		{
			positivo = positivo + numero ;
		}
		else
		{
			negativo = negativo * numero;
			flag=false;
		}
		
		respuesta = prompt("Desea continuar: ");
	}while(respuesta =='s');
	
	



document.getElementById('suma').value=positivo;
if(!flag)
{
	negativo = 0;
}
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN