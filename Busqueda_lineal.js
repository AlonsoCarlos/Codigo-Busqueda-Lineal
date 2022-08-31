const PromptSync = require('prompt-sync');
const prompt = require('prompt-sync')();
function lineal(search, arr) 
{
    let n = 0;
    let coincidencias = 'Coincidencias en: ';
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] == search)
        {
             
            if (n==0){
                coincidencias = coincidencias + i;
            }
            else
            {
                coincidencias = coincidencias + ', ' + i;
            }
            n++
        }
        
    }

    if(arr.length - 1 && n == 0)
    {
        coincidencias = "No hay coincidencias";
    }
    return coincidencias
}

let search = prompt('Palabra que deseas buscar: ');
let arr = ['Negro', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Rosa', 'Violeta', 'Blanco','Azul'];
console.log(lineal(search, arr));