
// ==========================================
// ENGAJA
// DASHBOARD PRINCIPAL
// Pesquisa, categorias, lojas e WhatsApp
// ==========================================

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // CONTATOS DAS LOJAS
    // Número autorizado para demonstração
    // Formato: código do país + DDD + telefone
    // ==========================================

    const lojasWhatsApp = {
        "Esporte Total": "5586995927749",
        "Tech Store": "5586995927749",
        "Fashion Store": "5586995927749",
        "Essência & Cia": "5586995927749"
    };


    // ==========================================
    // ELEMENTOS
    // ==========================================

    const campoPesquisa =
        document.getElementById("campoPesquisa");

    const btnPesquisar =
        document.getElementById("btnPesquisar");

    const btnExplorar =
        document.getElementById("btnExplorar");

    const btnVerTodos =
        document.getElementById("btnVerTodos");

    const btnVoltarInicio =
        document.getElementById("btnVoltarInicio");

    const produtos =
        document.querySelectorAll(".produto");

    const categorias =
        document.querySelectorAll(".categoria");

    const botoesProduto =
        document.querySelectorAll(".btn-produto");

    const botoesLoja =
        document.querySelectorAll(".btn-loja-card");


    // ==========================================
    // MENU MEU PERFIL
    // ==========================================

    const btnPerfil =
        document.getElementById("btnPerfil");

    const perfilDropdown =
        document.getElementById("perfilDropdown");

    const btnEntrar =
        document.getElementById("btnEntrar");

    const btnCriarConta =
        document.getElementById("btnCriarConta");


    // ==========================================
    // MODAL DE LOGIN
    // ==========================================

    const modalLogin =
        document.getElementById("modalLogin");

    const fecharLogin =
        document.getElementById("fecharLogin");

    const formLogin =
        document.getElementById("formLogin");


    // ==========================================
    // NEGOCIAÇÃO PELO WHATSAPP
    // ==========================================

    function negociarWhatsApp(nomeProduto, nomeLoja) {

        const telefone = lojasWhatsApp[nomeLoja];

        if (!telefone) {

            alert(
                "O WhatsApp desta loja ainda não foi cadastrado."
            );

            return;

        }

        const mensagem =
            `Olá! Encontrei o produto "${nomeProduto}" ` +
            `da loja "${nomeLoja}" no marketplace ENGAJA ` +
            "e gostaria de negociar. Poderia me passar " +
            "mais informações?";

        const linkWhatsApp =
            `https://wa.me/${telefone}?text=` +
            encodeURIComponent(mensagem);

        window.open(
            linkWhatsApp,
            "_blank",
            "noopener,noreferrer"
        );

    }


    // ==========================================
    // MENU "MEU PERFIL"
    // ==========================================

    if (btnPerfil && perfilDropdown) {

        btnPerfil.addEventListener(
            "click",
            function (event) {

                event.stopPropagation();

                perfilDropdown.classList.toggle("aberto");

            }
        );

    }


    // Fecha o menu quando clicar fora

    document.addEventListener(
        "click",
        function (event) {

            if (
                perfilDropdown &&
                btnPerfil &&
                !perfilDropdown.contains(event.target) &&
                !btnPerfil.contains(event.target)
            ) {

                perfilDropdown.classList.remove("aberto");

            }

        }
    );


    // ==========================================
    // BOTÃO ENTRAR
    // ==========================================

    if (btnEntrar) {

        btnEntrar.addEventListener(
            "click",
            function () {

                if (perfilDropdown) {
                    perfilDropdown.classList.remove("aberto");
                }

                if (modalLogin) {
                    modalLogin.classList.add("aberto");
                }

            }
        );

    }


    // ==========================================
    // BOTÃO CRIAR CONTA
    // ==========================================

    if (btnCriarConta) {

        btnCriarConta.addEventListener(
            "click",
            function () {

                if (perfilDropdown) {
                    perfilDropdown.classList.remove("aberto");
                }

                alert(
                    "A área de cadastro será desenvolvida " +
                    "nas próximas etapas do projeto."
                );

            }
        );

    }


    // ==========================================
    // FECHAR LOGIN
    // ==========================================

    if (fecharLogin) {

        fecharLogin.addEventListener(
            "click",
            function () {

                if (modalLogin) {
                    modalLogin.classList.remove("aberto");
                }

            }
        );

    }


    // ==========================================
    // FECHAR LOGIN CLICANDO FORA
    // ==========================================

    if (modalLogin) {

        modalLogin.addEventListener(
            "click",
            function (event) {

                if (event.target === modalLogin) {
                    modalLogin.classList.remove("aberto");
                }

            }
        );

    }


    // ==========================================
    // LOGIN
    // ==========================================

    if (formLogin) {

        formLogin.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                alert(
                    "O login será conectado ao banco de dados " +
                    "em uma próxima etapa."
                );

            }
        );

    }


    // ==========================================
    // PESQUISA DE PRODUTOS
    // ==========================================

    function pesquisar() {

        if (!campoPesquisa) {
            return;
        }

        const termo =
            campoPesquisa.value.trim().toLowerCase();

        // Campo vazio: mostrar todos os produtos

        if (termo === "") {

            produtos.forEach(
                function (produto) {
                    produto.style.display = "";
                }
            );

            return;

        }

        let encontrou = false;

        produtos.forEach(
            function (produto) {

                const nome =
                    (produto.dataset.nome || "").toLowerCase();

                const categoria =
                    (produto.dataset.categoria || "").toLowerCase();

                const texto =
                    produto.innerText.toLowerCase();

                if (
                    nome.includes(termo) ||
                    categoria.includes(termo) ||
                    texto.includes(termo)
                ) {

                    produto.style.display = "";
                    encontrou = true;

                } else {

                    produto.style.display = "none";

                }

            }
        );

        const produtosSection =
            document.getElementById("produtos");

        if (produtosSection) {

            produtosSection.scrollIntoView({
                behavior: "smooth"
            });

        }

        if (!encontrou) {

            alert(
                "Nenhum produto encontrado para: " +
                campoPesquisa.value
            );

        }

    }


    // ==========================================
    // BOTÃO PESQUISAR
    // ==========================================

    if (btnPesquisar) {
        btnPesquisar.addEventListener("click", pesquisar);
    }


    // ==========================================
    // PESQUISA COM ENTER
    // ==========================================

    if (campoPesquisa) {

        campoPesquisa.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {
                    pesquisar();
                }

            }
        );

    }


    // ==========================================
    // BOTÃO EXPLORAR
    // ==========================================

    if (btnExplorar) {

        btnExplorar.addEventListener(
            "click",
            function () {

                const produtosSection =
                    document.getElementById("produtos");

                if (produtosSection) {

                    produtosSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    // ==========================================
    // CATEGORIAS
    // ==========================================

    categorias.forEach(
        function (categoria) {

            categoria.addEventListener(
                "click",
                function () {

                    const categoriaSelecionada =
                        (categoria.dataset.categoria || "")
                            .toLowerCase();

                    let encontrou = false;

                    produtos.forEach(
                        function (produto) {

                            const categoriaProduto =
                                (produto.dataset.categoria || "")
                                    .toLowerCase();

                            if (
                                categoriaProduto ===
                                categoriaSelecionada
                            ) {

                                produto.style.display = "";
                                encontrou = true;

                            } else {

                                produto.style.display = "none";

                            }

                        }
                    );

                    const produtosSection =
                        document.getElementById("produtos");

                    if (produtosSection) {

                        produtosSection.scrollIntoView({
                            behavior: "smooth"
                        });

                    }

                    if (!encontrou) {

                        alert(
                            "Ainda não existem produtos cadastrados " +
                            "nesta categoria."
                        );

                    }

                }
            );

        }
    );


    // ==========================================
    // VER TODOS OS PRODUTOS
    // ==========================================

    if (btnVerTodos) {

        btnVerTodos.addEventListener(
            "click",
            function () {

                produtos.forEach(
                    function (produto) {
                        produto.style.display = "";
                    }
                );

                if (campoPesquisa) {
                    campoPesquisa.value = "";
                }

                const produtosSection =
                    document.getElementById("produtos");

                if (produtosSection) {

                    produtosSection.scrollIntoView({
                        behavior: "smooth"
                    });

                }

            }
        );

    }


    // ==========================================
    // PRODUTOS
    // BOTÃO DE NEGOCIAÇÃO PELO WHATSAPP
    // ==========================================

    botoesProduto.forEach(
        function (botao) {

            const produto =
                botao.closest(".produto");

            if (!produto) {
                return;
            }

            const nomeProduto =
                produto.dataset.nome ||
                botao.dataset.produto ||
                produto.querySelector("h3")?.textContent.trim();

            const elementoLoja =
                produto.querySelector(".produto-info small");

            const nomeLoja =
                elementoLoja?.textContent.trim();

            // Atualiza a descrição conforme solicitado

            const descricao =
                produto.querySelector(".produto-info p");

            if (descricao) {
                descricao.textContent = "Negocie com o vendedor.";
            }

            // Atualiza o texto do botão

            botao.textContent = "Negociar pelo WhatsApp";

            botao.addEventListener(
                "click",
                function () {

                    if (!nomeProduto || !nomeLoja) {

                        alert(
                            "Não foi possível identificar o produto " +
                            "ou a loja responsável."
                        );

                        return;

                    }

                    negociarWhatsApp(
                        nomeProduto,
                        nomeLoja
                    );

                }
            );

        }
    );


    // ==========================================
    // LOJAS / EMPRESAS
    // Abre o perfil da loja
    // ==========================================

    botoesLoja.forEach(
        function (botao) {

            botao.addEventListener(
                "click",
                function () {

                    const loja = botao.dataset.loja;

                    if (!loja) {

                        alert(
                            "Não foi possível identificar a loja."
                        );

                        return;

                    }

                    window.location.href =
                        "./perfil_empresa.html?loja=" +
                        encodeURIComponent(loja);

                }
            );

        }
    );


    // ==========================================
    // VOLTAR AO INÍCIO
    // ==========================================

    if (btnVoltarInicio) {

        btnVoltarInicio.addEventListener(
            "click",
            function () {

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );

    }


    // ==========================================
    // TECLA ESC
    // FECHA O MODAL DE LOGIN
    // ==========================================

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                modalLogin
            ) {

                modalLogin.classList.remove("aberto");

            }

        }
    );


    // ==========================================
    // MENSAGEM DE TESTE
    // ==========================================

    console.log(
        "ENGAJA - Dashboard carregado corretamente."
    );

});
