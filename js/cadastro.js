document.getElementById("formCadastro").addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirmaSenha").value;

    if (senha !== confirmaSenha) {
        alert("As senhas não coincidem.");
        return;
    }

    const usuario = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        senha: senha
    };

    localStorage.setItem("usuario", JSON.stringify(usuario));
    alert("Cadastro realizado com sucesso!");

    window.location.href = "login.html";
});
