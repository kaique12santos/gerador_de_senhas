document.addEventListener('DOMContentLoaded',function(){

    let sliderElement = document.querySelector("#slider");
    let buttonElement = document.querySelector("#button");

    let sizePassword = document.querySelector("#valor");
    let password = document.querySelector("#password");

    let containerPassword = document.querySelector("#container-password");

    let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let novaSenha = '';

    let minValue = 5;
    let maxValue = 25;
    let defaultValue = 12;

    sliderElement.min = minValue;
    sliderElement.max = maxValue;
    sliderElement.value = defaultValue;
    
    sizePassword.innerHTML = sliderElement.value;

    slider.oninput = function() {
        sizePassword.innerHTML = this.value;
    }


    buttonElement.addEventListener('click',function(){

        let pass = '';
        for(let i = 0, n = charset.length; i < sliderElement.value; ++i){
            pass += charset.charAt(Math.floor(Math.random() * n));
        }
    
        console.log(pass)
        containerPassword.classList.remove("hide");
        password.innerHTML = pass;
        novaSenha = pass;
    });

    password.addEventListener('click', function(){
        alert("Senha copiada com sucesso!")
        navigator.clipboard.writeText(novaSenha);
    });
});

