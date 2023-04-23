const handleSubmit = (event) => {
    event.preventDefault();

    const data = document
    const nome = document.querySelector('input[name=nome]').value;
    const sobrenome = document.querySelector('input[name=sobrenome]').value;
    const cpf = document.querySelector('input[name=cpf]').value;

    fetch('https://api.sheetmonkey.io/form/853sSBTkJFG9ZGcKAEsxHD', {

        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, sobrenome, cpf}),
    }).then(() => alert('dados enviados'))
}

document.querySelector('form').addEventListener('submit', handleSubmit)