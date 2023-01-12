function deleteNth(arr,n){
    //criar um objeto
    let obj = {};
    //criar uma nova array com apenas os numeros que não ocorram mais que N 
    let novo = arr.forEach((element, index, newArray) => {
        
        //Se for a primeira ocorrencia adicionar ela na array de objetos de ocorrencia
        if( obj.find(  ) === arr ){
            obj.element = 1;
        }
        //se ela ja existir adicionar a quantidade de ocorrencias na chave (ocorrencia++);

        //quantidade de ocorrencias é maior ou igual a N? se sim não passo para array, se não, passo para a array.


    });


    return novo;
}

deleteNth([20,37,20,21], 1)
deleteNth([1,1,3,3,7,2,2,2,2], 3)