function Mostrar()
{


    var numero = prompt("ingrese número");
    var esPrimo=true;
    for (var i=2 ; i < numero ; i ++ )
    {
        
        if( i % numero  ==0)
		{
        esPrimo=false;
          break;
		}
      
    }
 if(esPrimo)
    {
        alert(numero + " no es un numero primo");

    }
    else
    {
        alert( numero + " es primo")
    }

}//FIN DE LA FUNCIÓN