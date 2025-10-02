'use stric';

let numArray = [];

    for (let i = 0; i < 6; i++) {
        numArray.push(prompt("Ingrese un número: "));
        document.write(numArray[i] + '<br>');
        console.log(numArray[i]);
    }

    let ordenedArray = numArray.sort((a, b) => b - a);
        document.write(`<br>Lista Ordenada: ${ordenedArray}`);
        console.log(ordenedArray);
            
    let reverseOrdenedArray = ordenedArray.reverse();
        document.write("<br><br>Lista invertida: "+ reverseOrdenedArray);
        document.write("<br><br>Cantidad de elementos en el Array: "+ numArray.length);
        console.log(numArray.length);

        function buscarValor() {
            let valor = prompt("Que valor busca: ");
                if (numArray.includes(valor) === true)
                {
                    document.write("El valor "+ valor +" existe en la posicion: "+ numArray.indexOf(valor) +".");
                } else {
                    document.write("El valor "+ valor +" no se encuentra en el arreglo.");
                }
        }
