function fixNumeroVoz(chute){

let numeros = {
    'zero': 0,
    'zero zero': 0,
    '00': 0,
    '01': 1,
    'é': 1,
    'um': 1,
    'dois': 2,
    'três': 3,
    'quatro': 4,
    'cinco': 5,
    'seis': 6,
    'sete': 7,
    'oito': 8,
    'nove': 9,
    'dez': 10
    }
    
    for(valor in numeros){
        if(chute === valor){
            chute = numeros[valor];   
        }         
    }
    return chute;
    

}


