
/*
=====================================================
    DADOS DOS PROJETOS
=====================================================
*/

export const campanhas = [
    {
        titulo: "Campanha Alimento que Transforma",
        descricao:
            "A campanha arrecada alimentos não perecíveis que são destinados a famílias em situação de vulnerabilidade. As doações são organizadas e distribuídas pela equipe de voluntários da ONG."
    },

    {
        titulo: "Inverno Solidário",
        descricao:
            "Durante os períodos de frio, realizamos a arrecadação de roupas, cobertores e agasalhos. Os materiais recebidos são encaminhados para pessoas e famílias que necessitam de apoio."
    },

    {
        titulo: "Material Escolar para Todos",
        descricao:
            "Essa campanha arrecada materiais escolares, como cadernos, lápis, mochilas e outros itens necessários para estudantes. As doações contribuem para que crianças e adolescentes tenham melhores condições para estudar."
    }
];


export const voluntariados = [
    {
        titulo: "Distribuição de Alimentos",
        descricao:
            "Os voluntários podem participar da organização e distribuição das cestas básicas arrecadadas durante nossas campanhas."
    },

    {
        titulo: "Apoio Comunitário",
        descricao:
            "Os voluntários também podem colaborar em ações realizadas diretamente nas comunidades, auxiliando na organização dos eventos e no atendimento às pessoas."
    },

    {
        titulo: "Oficinas Educativas",
        descricao:
            "Voluntários podem contribuir com conhecimentos e habilidades em oficinas educativas, culturais e profissionalizantes oferecidas pela ONG."
    }
];


/*
=====================================================
RENDERIZAÇÃO DA PÁGINA INICIAL
=====================================================
*/

export function renderInicio() {

    return `

                <section id="quem-somos">

                    <h2>Quem Somos?</h2>

                    <p>
                        A ONG Esperança e Ação é uma organização sem fins
                        lucrativos dedicada a promover ações sociais e apoiar
                        pessoas em situação de vulnerabilidade.
                    </p>

                    <p>
                        Nosso trabalho é realizado por meio de campanhas
                        de arrecadação, distribuição de alimentos, doação
                        de roupas, atividades comunitárias e projetos
                        voltados para a melhoria da qualidade de vida
                        da população.
                    </p>

                    <img
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a"
                        alt="Voluntários realizando uma ação social em comunidade"
                    >

                </section>


                <section id="missao">

                    <h2>Nossa Missão</h2>

                    <p>
                        Nossa missão é promover solidariedade, inclusão
                        e cidadania, contribuindo para a construção de
                        uma sociedade mais justa e igualitária.
                    </p>

                </section>


                <section id="como-ajudar">

                    <h2>Como Você Pode Ajudar?</h2>

                    <p>
                        Existem diversas formas de contribuir com o trabalho
                        da ONG Esperança e Ação. Você pode participar como
                        voluntário, realizar doações ou colaborar com nossas
                        campanhas e projetos.
                    </p>

                    <p>
                        Toda contribuição é importante e pode fazer a diferença
                        na vida de muitas pessoas.
                    </p>

                    <a href="/cadastro" data-link>
                        Quero ser voluntário
                    </a>

                </section>


                <section id="contato">

                    <h2>Entre em Contato</h2>

                    <address>

                        <p>
                            <strong>Telefone:</strong>

                            <a href="tel:+5511999999999">
                                (11) 99999-9999
                            </a>
                        </p>

                        <p>
                            <strong>E-mail:</strong>

                            <a href="mailto:contato@esperancaeacao.org.br">
                                contato@esperancaeacao.org.br
                            </a>
                        </p>

                        <p>
                            <strong>Endereço:</strong>

                            Avenida Paulista, 1000 -
                            São Paulo, SP
                        </p>

                    </address>

                </section>

            `;
}


/*
=====================================================
RENDERIZAÇÃO DA PÁGINA DE PROJETOS
=====================================================
*/

export function renderProjetos() {

    return `

                <section id="projetos">

                    <h2>Apresentação dos Projetos</h2>

                    <p>
                        A ONG Esperança e Ação desenvolve diferentes
                        projetos sociais com o objetivo de ajudar pessoas
                        em situação de vulnerabilidade e incentivar a
                        participação da comunidade.
                    </p>

                    <p>
                        Nossas iniciativas são realizadas por meio de
                        campanhas de arrecadação, ações voluntárias e
                        atividades comunitárias. Cada projeto busca
                        promover solidariedade e contribuir para uma
                        sociedade mais justa.
                    </p>

                </section>


                <section id="campanhas">

                    <h2>Campanhas de Doação</h2>

                    ${campanhas.map(campanha => `

                        <article>

                            <h3>
                                ${campanha.titulo}
                            </h3>

                            <p>
                                ${campanha.descricao}
                            </p>

                        </article>

                    `).join("")}

                </section>


                <section id="voluntariado">

                    <h2>Ações de Voluntariado</h2>

                    ${voluntariados.map(acao => `

                        <article>

                            <h3>
                                ${acao.titulo}
                            </h3>

                            <p>
                                ${acao.descricao}
                            </p>

                        </article>

                    `).join("")}

                </section>


                <section id="participar">

                    <h2>Como Participar?</h2>

                    <p>
                        Você pode ajudar a ONG Esperança e Ação realizando
                        doações, participando de nossas campanhas ou
                        tornando-se um voluntário.
                    </p>

                    <p>
                        Toda ajuda é importante para que possamos continuar
                        desenvolvendo nossas ações sociais.
                    </p>

                    <a href="/cadastro" data-link>
                        Quero ser voluntário
                    </a>

                </section>

            `;
}


/*
=====================================================
RENDERIZAÇÃO DO CADASTRO
=====================================================
*/

export function renderCadastro() {

    return `

                <h2>
                    Cadastro de Voluntário
                </h2>

                <p>
                    Preencha o formulário abaixo para fazer parte
                    das ações da ONG Esperança e Ação.
                </p>


                <form id="form-voluntario">


                    <!-- DADOS PESSOAIS -->

                    <fieldset>

                        <legend>
                            Dados Pessoais
                        </legend>


                        <label for="nome">
                            Nome completo:
                        </label>

                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                        >


                        <br><br>


                        <label for="email">
                            E-mail:
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        >


                        <br><br>


                        <label for="nascimento">
                            Data de nascimento:
                        </label>

                        <input
                            type="date"
                            id="nascimento"
                            name="nascimento"
                            required
                        >


                        <br><br>


                        <label for="cpf">
                            CPF:
                        </label>

                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            pattern="[0-9]{3}\.[0-9]{3}\.[0-9]{3}-[0-9]{2}"
                            placeholder="000.000.000-00"
                            required
                        >


                        <br><br>


                        <label for="telefone">
                            Telefone:
                        </label>

                        <input
                            type="tel"
                            id="telefone"
                            name="telefone"
                            pattern="\([0-9]{2}\) [0-9]{5}-[0-9]{4}"
                            placeholder="(11) 99999-9999"
                            required
                        >

                    </fieldset>


                    <!-- ENDEREÇO -->

                    <fieldset>

                        <legend>
                            Endereço
                        </legend>


                        <label for="cep">
                            CEP:
                        </label>

                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            pattern="[0-9]{5}-[0-9]{3}"
                            placeholder="00000-000"
                            required
                        >


                        <br><br>


                        <label for="rua">
                            Rua:
                        </label>

                        <input
                            type="text"
                            id="rua"
                            name="rua"
                            required
                        >


                        <br><br>


                        <label for="numero">
                            Número:
                        </label>

                        <input
                            type="number"
                            id="numero"
                            name="numero"
                            required
                        >


                        <br><br>


                        <label for="bairro">
                            Bairro:
                        </label>

                        <input
                            type="text"
                            id="bairro"
                            name="bairro"
                            required
                        >


                        <br><br>


                        <label for="cidade">
                            Cidade:
                        </label>

                        <input
                            type="text"
                            id="cidade"
                            name="cidade"
                            required
                        >


                        <br><br>


                        <label for="estado">
                            Estado:
                        </label>

                        <select
                            id="estado"
                            name="estado"
                            required
                        >

                            <option value="">
                                Selecione
                            </option>

                            <option value="SP">
                                São Paulo
                            </option>

                            <option value="RJ">
                                Rio de Janeiro
                            </option>

                            <option value="MG">
                                Minas Gerais
                            </option>

                            <option value="PR">
                                Paraná
                            </option>

                            <option value="SC">
                                Santa Catarina
                            </option>

                        </select>

                    </fieldset>


                    <!-- INTERESSE -->

                    <fieldset>

                        <legend>
                            Interesse em Voluntariado
                        </legend>


                        <label for="area">
                            Área de interesse:
                        </label>

                        <select
                            id="area"
                            name="area"
                            required
                        >

                            <option value="">
                                Selecione
                            </option>

                            <option value="doacoes">
                                Campanhas de Doação
                            </option>

                            <option value="alimentos">
                                Distribuição de Alimentos
                            </option>

                            <option value="educacao">
                                Oficinas Educativas
                            </option>

                            <option value="comunidade">
                                Apoio Comunitário
                            </option>

                        </select>


                        <br><br>


                        <label for="disponibilidade">
                            Disponibilidade:
                        </label>

                        <input
                            type="text"
                            id="disponibilidade"
                            name="disponibilidade"
                            required
                        >


                        <br><br>


                        <label for="mensagem">
                            Por que deseja ser voluntário?
                        </label>

                        <br>

                        <textarea
                            id="mensagem"
                            name="mensagem"
                            rows="5"
                            cols="40"
                        ></textarea>

                    </fieldset>


                    <!-- CONFIRMAÇÃO -->

                    <fieldset>

                        <legend>
                            Confirmação
                        </legend>


                        <label>

                            <input
                                type="checkbox"
                                id="termos"
                                name="termos"
                                required
                            >

                            Confirmo que as informações fornecidas
                            são verdadeiras.

                        </label>


                        <br><br>


                        <button type="submit">
                            Enviar Cadastro
                        </button>

                    </fieldset>

                </form>

            `;
}
