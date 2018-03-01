function Mostrar()
{

    var numero = prompt("ingrese número");
    var contadorPares = 0;
    for (var i=1 ; i <= numero ; i ++ )
    {
        
        if( i % 2 ==0)
		{
        
            contadorPares++;
            console.log(i)
			
		}
       
    }
console.log(contadorPares);
}//FIN DE LA FUNCIÓN