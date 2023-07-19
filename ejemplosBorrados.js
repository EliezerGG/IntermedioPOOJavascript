const strigifiedComplexObj = JSON.stringify(obj1);
const obj2 = JSON.parse(strigifiedComplexObj);

const numeritos = [1,2,3,4,5,6,7,8,9,1,22,33,44]
let numerito = 0;

for(let index = 0; index < numeritos.length; index++ ){
        numerito = numeritos[index];
        console.log({index, numerito});
    }
    
    function recursiva(numbersArray){
            if(numbersArray.length !=0){
                    const firstNum = numbersArray[0];
                    console.log(firstNum);
            
                    numbersArray.shift();
                    return recursiva(numbersArray)
                }else{
                
                    }
}



function deepCopy(){
    if(validacion){
        // llamados recursivos
    }else{
        // llamdos normales, sin recursividad
    }
}

