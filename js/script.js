function teste(){
    let nome = document.getElementById("nome").value;
    let senha = document.getElementById("senha").value;

    if(nome != "cainho" && senha != "123"){
        alert("Usuario ou senhas inválidos");
    }

    alert(nome);
    alert(senha);
}