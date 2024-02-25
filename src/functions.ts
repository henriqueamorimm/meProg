const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
const express = require('express');

function Mostre(texto) {
    console.log(texto);
}
function Somar(firstNumber, secondNumber){
 const result = firstNumber + secondNumber;
 console.log(result)
 if(!secondNumber || !firstNumber){
    console.log("Inclua todos os parametros para somar.");
 }
}
function criarPaginaLocal(porta,rota, mensagem) {
    const app = express();

    app.get(rota, (req, res) => {
        res.send(`<h3 style="font-family: Arial">Utilizando o sistema MeProg</h3><h1>${mensagem}</h1>`);
    });

    app.listen(porta, () => {
        console.log(`Servidor aberto em http://localhost:${porta}${rota}`);
    });
    if(!porta || !mensagem){
        console.log("Para criar um servidor local, preencha a porta, a rota e a mensagem! (Use / para rota padrao)")
    }
}
function Dividir(firstNumber, secondNumber){
    const result = firstNumber / secondNumber;
    console.log(result);
    if(!secondNumber || !firstNumber){
        console.log("Inclua todos os parametros para dividir.");
     }
}
function createQuestion(question, backmessage){
    rl.question(question, (answer) => {
        console.log(backmessage);
      
        rl.close();
      });
      if(!question){
        console.log("Inclua todos os parametros para criar uma pergunta");
      }
}


function Multiplicar(firstNumber, secondNumber){
    const result = firstNumber * secondNumber;
    console.log(result);
    if(!secondNumber || !firstNumber){
        console.log("Inclua todos os parametros para multiplicar.");
     }
}
module.exports = {
    Mostre: Mostre,
    Somar: Somar,
    Dividir: Dividir,
    Perguntar: createQuestion,
    CriarPagina: criarPaginaLocal
};
