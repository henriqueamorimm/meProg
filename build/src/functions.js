"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CriarPagina = exports.compararNumber = exports.Perguntar = exports.Dividir = exports.Multiplicar = exports.Somar = exports.Mostre = void 0;
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({ input, output });
const express_1 = __importDefault(require("express"));
function Mostre(texto) {
    console.log(texto);
}
exports.Mostre = Mostre;
function Somar(firstNumber, secondNumber) {
    const result = firstNumber + secondNumber;
    console.log(result);
    if (!secondNumber || !firstNumber) {
        console.log("Inclua todos os parametros para somar.");
    }
}
exports.Somar = Somar;
function compararNumber(firstNumber, secondNumber) {
    const resultMaior = firstNumber > secondNumber;
    if (resultMaior) {
        console.log(`${firstNumber} é maior que ${secondNumber}`);
    }
    else {
        console.log(`${secondNumber} é maior que ${firstNumber}`);
    }
    if (!firstNumber) {
        console.log("Preencha os parametros corretamente.");
    }
}
exports.compararNumber = compararNumber;
function CriarPagina(porta, rota, mensagem) {
    const app = (0, express_1.default)();
    app.get(rota, (req, res) => {
        res.send(`<h3 style="font-family: Arial">Utilizando o sistema MeProg</h3><h1>${mensagem}</h1>`);
    });
    app.listen(porta, () => {
        console.log(`Servidor aberto em http://localhost:${porta}${rota}`);
    });
    if (!porta || !mensagem) {
        console.log("Para criar um servidor local, preencha a porta, a rota e a mensagem! (Use / para rota padrao)");
    }
}
exports.CriarPagina = CriarPagina;
function Dividir(firstNumber, secondNumber) {
    const result = firstNumber / secondNumber;
    console.log(result);
    if (!secondNumber || !firstNumber) {
        console.log("Inclua todos os parametros para dividir.");
    }
}
exports.Dividir = Dividir;
function Perguntar(question, backmessage, callback) {
    rl.question(question, (answer) => {
        console.log(backmessage);
        callback(answer);
    });
    if (!question) {
        console.log("Inclua todos os parametros para criar uma pergunta");
    }
}
exports.Perguntar = Perguntar;
function Multiplicar(firstNumber, secondNumber) {
    const result = firstNumber * secondNumber;
    console.log(result);
    if (!secondNumber || !firstNumber) {
        console.log("Inclua todos os parametros para multiplicar.");
    }
}
exports.Multiplicar = Multiplicar;
