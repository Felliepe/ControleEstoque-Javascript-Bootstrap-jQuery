const adicionarProduto = document.querySelector("#txtNomeProduto")
const adicionarCodigo = document.querySelector("#txtCodProduto")
const adicionarQuantidade = document.querySelector("#qtidadeProduto")
const revela = document.querySelector(".revela")

function validarProduto() {
    if (document.getElementById("txtNomeProduto").value == "") {
        alert("Nome do produto em branco. Por favor, preencha")
    } else if (document.getElementById("txtCodProduto").value == "") {
        alert("Código do produto em branco. Por favor, preencha")
    } else {
        function salvarEstoque() {
            const cadastrar = document.querySelector("#txtNomeProduto").value;
            const cadastraCod = document.querySelector("#txtCodProduto").value
            const quantidade = document.querySelector("#qtidadeProduto").value

            // Pega a lista já cadastrada, se não houver vira um array vazio
            let lista = JSON.parse(localStorage.getItem('lista') || '[]');
            // Adiciona lista ao cadastro
            lista.push({
                cadastrar: cadastrar,
                cadastraCod: cadastraCod,
                quantidade: quantidade
            });

            // Salva a lista alterada
            localStorage.setItem("lista", JSON.stringify(lista));

            alert(JSON.stringify(`Foram cadastrados ${quantidade} unidades do produto ${cadastrar}`))

            let content = '';
            lista.map((el) => {
                content += `Nome do produto: ${el.cadastrar}, <br/> Codigo do produto: ${el.cadastraCod}, <br/> Quantidade: ${el.quantidade}<br/><br/>`;
            })
            localStorage.setItem('productList', content);

            function carregarTotalEstoque() {
                let Tot = JSON.parse(localStorage.getItem('Tot') || '[]');

                // let total = Tot.getItem = localStorage.getItem("lista", JSON.stringify(lista))
                let total = lista.reduce((total, el) => total + parseInt(el.quantidade), 0);

                localStorage.getItem("lista", JSON.stringify(lista))
                console.log("Nome:", cadastrar, "\n", "Codigo:", cadastraCod, "\n", "Quantidade:", quantidade)
                // document.querySelector(".revela").innerHTML = (JSON.stringify(quantidade.value))                
                // console.log(`${"TOTAL:", total}`)
            }
            carregarTotalEstoque()
        }
    }
    salvarEstoque()
}

function abrir() {
    let janela = window.open('verEstoque.html', 'ccc')

}
abrir()

function atualizarTotalEstoque(idCampo) {
    localStorage.setItem("totalEstoque", ++document.getElementById(idCampo).innerHTML)
}