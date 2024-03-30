const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });
import express, { Request, Response } from "express";
import server from "./server";
import axios from "axios";
function Mostre(texto: any) {
  console.log(texto);
}
function Somar(firstNumber: number, secondNumber: number) {
  const result = firstNumber + secondNumber;
  console.log(result);
  if (!secondNumber || !firstNumber) {
    console.log("Inclua todos os parametros para somar.");
  }
}

function compararNumber(firstNumber: number, secondNumber: number) {
  const resultMaior = firstNumber > secondNumber;
  if (resultMaior) {
    console.log(`${firstNumber} é maior que ${secondNumber}`);
  } else {
    console.log(`${secondNumber} é maior que ${firstNumber}`);
  }
  if (!firstNumber) {
    console.log("Preencha os parametros corretamente.");
  }
}

function Subtrair(firstNumber: number, secondNumber: number) {
  const result = firstNumber - secondNumber;
  console.log(result);
}
function Dividir(firstNumber: number, secondNumber: number) {
  const result = firstNumber / secondNumber;
  console.log(result);
  if (!secondNumber || !firstNumber) {
    console.log("Inclua todos os parametros para dividir.");
  }
}
function Perguntar(question: string, backmessage: string, callback: any) {
  rl.question(question, (answer: any) => {
    console.log(backmessage);
    callback(answer);
  });

  if (!question) {
    console.log("Inclua todos os parametros para criar uma pergunta");
  }
}
function NumeroAleatorio(numero: number): number {
  const random = Math.floor(Math.random() * numero);
  console.log(random);
  return random;
}

function Multiplicar(firstNumber: number, secondNumber: number) {
  const result = firstNumber * secondNumber;
  console.log(result);
  if (!secondNumber || !firstNumber) {
    console.log("Inclua todos os parametros para multiplicar.");
  }


}

 function Post(url: string){
  const response = axios.post(url);
  return response
}
function Get(url: string){
  const response = axios.get(url);
  return response
}
export {
  Mostre,
  Somar,
  Post,
  Multiplicar,
  Dividir,
  Perguntar,
  Get,
  Subtrair,
  NumeroAleatorio,
  compararNumber,
  server,
};
