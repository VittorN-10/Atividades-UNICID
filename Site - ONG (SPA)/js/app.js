import {
    renderInicio,
    renderProjetos,
    renderCadastro
} from "./paginas.js";

import { renderizar } from "./router.js";

const rotas = {
    "/": renderInicio,
    "/projetos": renderProjetos,
    "/cadastro": renderCadastro
};

renderizar();
        renderizar();