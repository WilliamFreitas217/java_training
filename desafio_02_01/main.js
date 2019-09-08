var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

console.log(inputElement);
console.log(buttonElement);

function revaluate(){
    var idade = inputElement.value;
    function checaIdade(idade){
        return new Promise(function(resolve, reject){
            if(idade > 18){
                resolve(true);
            } else{
                reject(false);
            }
        });
    }
    
    
    checaIdade(idade)  
        .then(function() {
            console.log("Maior que 18");  
        })  
        .catch(function() {    
            console.log("Menor que 18");  
        });
    inputElement.value = '';
}

buttonElement.onclick = revaluate;