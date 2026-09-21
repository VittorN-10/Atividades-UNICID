// Módulo principal responsável pela configuração das rotas
import { renderInicio, renderProjetos, renderCadastro } from "./paginas.js";
import { configurarRouter } from "./router.js";

const rotas = {
    "/": renderInicio,
    "/projetos": renderProjetos,
    "/cadastro": renderCadastro
};

configurarRouter(rotas);
