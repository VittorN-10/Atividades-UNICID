function configurarFormulario() {
    const formulario = document.querySelector("#form-voluntario");

    if (!formulario) {
        return;
    }

    const dadosSalvos = carregarDados("voluntario");

    if (dadosSalvos) {
        Object.keys(dadosSalvos).forEach(campo => {
            const elemento = formulario.querySelector(
                `[name="${campo}"]`
            );

            if (elemento) {
                elemento.value = dadosSalvos[campo];
            }
        });
    }

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!formulario.checkValidity()) {
            formulario.reportValidity();
            return;
        }

        const dados = Object.fromEntries(
            new FormData(formulario)
        );

        salvarDados("voluntario", dados);

        alert("Cadastro realizado com sucesso!");
    });
}