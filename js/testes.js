const nome = "Isabelly";
let nome2 = "";
let pessoaDefault = {
    nome: "Isa",
    idade: "21",
    ocupacao: "Estudante"
}

let nomes = ["Isabelly", "Fulana", "Fulano"];
let pessoas = [
    {
        nome: "Isabelly",
        idade: "21",
        ocupacao: "Dev Frontend Jr"
    },
    {
        nome: "Fulana",
        idade: "29",
        ocupacao: "Dev Backend Pleno"
    }
];

function alterarNome() {
    nome2 = "Isabelly Costa";
    console.log("Nome alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("Valor alterado recebendo um nome:");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log(pessoa)

    console.log("Nome:")
    console.log(pessoa.nome)

    console.log("Idade:")
    console.log(pessoa.idade)

    console.log("Ocupação:")
    console.log(pessoa.ocupacao)
}

function adicionarPessoa(pessoa) {
    pessoas.push(pessoa)
}

function imprimirPessoas() {
    pessoas.forEach((item) => {
        console.log('==========')
        console.log("Nome:")
        console.log(item.nome)

        console.log("Idade:")
        console.log(item.idade)

        console.log("Ocupacao:")
        console.log(item.ocupacao)
       
    })
}

imprimirPessoas();

adicionarPessoa({
    nome: "Fulaninho",
    idade: "30",
    ocupacao: "UX/UI Designer"
});

imprimirPessoas();



//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//    nome: "Isabelly",
//    idade: "21",
//    ocupacao: "Desenvolvedora Frontend"
//})

//recebeEalteraNome("Isabelly");
//recebeEalteraNome("Isabelly Silva");
//alterarNome();