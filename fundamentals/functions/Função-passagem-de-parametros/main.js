function clicar(){
    let n1 = document.querySelector('input#n1')
    let n2 = document.querySelector('input#n2')

    if(n1.value.length == 0 || n2.value.length == 0){
        window.alert('verifique as suas informações')

    } else {
        if(!number1(n1.value) && !number2(n2.value)){
            window.alert('hahahah')
        }
    }
}

function number1(n){
    if(Number(n) < 100){
        return true
    } else {
        return false
    }
}

function number2(n){
    if(Number(n) < 100) {
        return true
    } else {
        return false
    }
}

/* a ideia é as duas funções deem um retorno FALSE, para que na hora de usar '!' ele caia como true
wscrevendo na tela 'hahaha' */