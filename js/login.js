document.getElementById("formLogin").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (usuario && usuario.email === email && usuario.senha === senha) {
        localStorage.setItem('loggedIn', true);
        localStorage.setItem('userName', usuario.nome);
        alert("Login realizado com sucesso!");
        window.location.href = "index.html";
    } else {
        alert("E-mail ou senha incorretos.");
    }
});
