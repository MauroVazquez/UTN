function Mostrar()
{

    var numero = prompt("ingrese número");
    var contadorDiv = 0;
    for (var i=1 ; i <= numero ; i ++ )
    {
        
        if( i % numero ==0)
		{
        
            contadorDiv++;
            console.log(i)
			
		}
       
    }
console.log(contadorDiv);


}//FIN DE LA FUNCIÓN