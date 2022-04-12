function informaFaixaDoImc(imc) {
    if (imc < 18.50) {
        return "Seu IMC está abaixo do normal.";
    }
    if (imc >= 18.50 && imc <= 24.99) {
        return "Seu IMC está normal.";
    }
    if (imc > 24.99 && imc <= 29.99) {
        return "Você está na faixa de pré obesidade.";
    }
    if (imc > 29.99 && imc <= 34.99) {
        return "Você está na faixa de obesidade grau 1.";
    }

    if (imc > 34.99 && imc <= 39.99) {
        return "Você está na faixa de obesidade grau 2.";
    }

    if (imc >= 40) {
        return "Você está na faixa de obesidade grau 3";
    }

    return "Por favor, informe uma altura e um peso."
}

function limpaInput() {
    document.getElementById("altura").value = '';
    document.getElementById("peso").value = '';
    document.getElementById("altura").focus();
}


const botao = document.querySelector('.btn');


botao.addEventListener('click', function(event)  {
    
    event.preventDefault();
    let altura = document.getElementById("altura").value;
    let peso = document.getElementById("peso").value;

    const imc = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
     
    
    const resposta = document.querySelector('.resposta');
    if (imc) {
        resposta.innerHTML = "O seu IMC é " + imc.toFixed(2) + ". " + informaFaixaDoImc(imc);
    }else {
        resposta.innerHTML = informaFaixaDoImc(imc);

    }

    limpaInput();
    

    
    
   
    
    
    


})