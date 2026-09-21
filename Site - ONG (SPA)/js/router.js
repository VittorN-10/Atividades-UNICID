import { configurarFormulario } from "./formulario.js";

export function configurarRouter(rotas) {

    function renderizar(rota = window.location.pathname) {
        const app = document.querySelector("#app");

        const pagina = rotas[rota] || rotas["/"];

        app.innerHTML = pagina();

        configurarFormulario();

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    document.addEventListener("click", function (event) {
        const link = event.target.closest("[data-link]");

        if (!link) {
            return;
        }

        event.preventDefault();

        const rota = link.getAttribute("href");

        history.pushState({}, "", rota);

        renderizar(rota);
    });

    window.addEventListener("popstate", function () {
        renderizar();
    });

    renderizar();
}