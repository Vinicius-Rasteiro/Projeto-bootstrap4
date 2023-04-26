var botaoEntrar = document.querySelector(".btn"); 

botaoEntrar.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#formulario-login");

    var usuario = document.querySelector("#usuario");
    var senha = document.querySelector("#password");

    var valueUsuario = usuario.value;
    var valueSenha = senha.value;
    var ul = document.querySelector("#aviso-erro");
    ul.innerHTML = "";

    if(valueUsuario == ""){
        var li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = "Campo de usuário em branco";
        li.classList.add("corDoAviso");
    }
    ;if(valueSenha == ""){
        var li = document.createElement("li");
        ul.appendChild(li);
        li.textContent = "Campo de senha em branco";
        li.classList.add("corDoAviso");
    };
    if(valueSenha.length == 8 && valueUsuario.length == 8){
        form.reset();
    };
   
});













    // if(valueSenha.length != 8 || valueUsuario.length != 8){
    //         var li = document.createElement("li");
    //          ul.appendChild(li);
    //          li.textContent = "Usuário ou senha inválidos";
    //          li.classList.add("corDoAviso");
    // };
    //     ul.classList.add("invisivel");
    // }else{
    //     ul.classList.remove("invisivel");
    // }





