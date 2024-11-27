document.getElementById('formContato').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if(nome && email && mensagem) {
        document.getElementById('responseMessage').innerHTML = "<p style='color: green;'>Mensagem enviada com sucesso!</p>";
        document.getElementById('formContato').reset();
    } else {
        document.getElementById('responseMessage').innerHTML = "<p style='color: red;'>Por favor, preencha todos os campos.</p>";
    }
});
