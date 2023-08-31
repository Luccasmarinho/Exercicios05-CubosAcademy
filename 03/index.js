const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function() {
        let precoEmReais = 0;
        console.log(`Cliente: ${this.nomeDoCliente}, total de itens: ${this.calcularTotalDeItens()}, total a pagar: R$ ${this.calcularTotalAPagar().toFixed(2)}`);
        
    },
    addProduto: function(produto) {
        let indiceProdutosExistentes = -1;

    for(let i = 0; i < this.produtos.length; i++) {
        if (this.produtos[i].id === produto.id) {
            indiceProdutosExistentes = i;
            break
        }
    }
        if (indiceProdutosExistentes === -1) {  
            this.produtos[this.produtos.length] = produto;
        } else {                                               
            this.produtos[indiceProdutosExistentes].qtd += produto.qtd
        }
    },
    imprimirDetalhes: function() {
        let totalDeItens = 0;
        let totalAPagar = 0;
        let totalAPagarEmReais = 0;

        console.log(`Cliente: ${this.nomeDoCliente}`);
        for (let i = 0; i < this.produtos.length; i++) {
            console.log(`Item ${i + 1} - ${this.produtos[i].nome} - ${this.produtos[i].qtd} und - R$ ${(this.produtos[i].precoUnit / 100).toFixed(2)}`);
            totalDeItens += this.produtos[i].qtd
            totalAPagar += this.produtos[i].precoUnit
            totalAPagarEmReais += (this.produtos[i].qtd * this.produtos[i].precoUnit) / 100
        }

        console.log(`Total de itens: ${totalDeItens} itens`)
        console.log(`Total a pagar: R$ ${totalAPagarEmReais.toFixed(2)}`)   
    },
    calcularTotalDeItens: function() {
        let totalDeItens = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            totalDeItens += this.produtos[i].qtd
        }

        return totalDeItens
    },
    calcularTotalAPagar: function() {
        let totalAPagar = 0;
        let totalAPagarEmReais = 0;

        for (let i = 0; i < this.produtos.length; i++) {
            totalAPagar += this.produtos[i].precoUnit
            totalAPagarEmReais += (this.produtos[i].precoUnit * this.produtos[i].qtd) / 100
        }
        return totalAPagarEmReais
    },
    calcularDesconto: function() {
        let itemMaisBarato = this.produtos[0].precoUnit;

        let qtdTotalItens = this.calcularTotalDeItens();
        let precoTotalAPagar = this.calcularTotalAPagar();

        let descontoPorItens = 0;
        let descontoPorTotal = 0;

        if (qtdTotalItens > 4) {
            descontoPorItens = this.produtos[0].precoUnit
            for(let i = 0; i < this.produtos.length; i++) {
                if(this.produtos[i].precoUnit < descontoPorItens) {
                    descontoPorItens = this.produtos[i].precoUnit
                }
            }   
        }
        if (precoTotalAPagar > 10000) {
            descontoPorTotal = precoTotalAPagar * 0.1
        }

        return descontoPorItens > descontoPorTotal ? descontoPorItens : descontoPorTotal
       
    }
    
}

console.log(carrinho.calcularDesconto());

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}
carrinho.addProduto(novaBermuda);

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}
carrinho.addProduto(novoTenis);

// carrinho.imprimirResumo();
// carrinho.imprimirDetalhes()
//console.log(carrinho.calcularTotalAPagar());
// console.log(carrinho.calcularTotalDeItens());

