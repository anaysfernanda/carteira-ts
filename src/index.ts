import { Carteira, Entrada, Saida } from "./types";

function minhaEntrada(ValorEntrada: number, pessoa: string): Entrada {
  const entrada: Entrada = {
    id: Math.floor(Date.now() / 1000),
    valor: ValorEntrada,
    data: Date.now(),
    remetente: pessoa,
  };
  return entrada;
}

let minhaCarteira: Carteira = {
  saldo: 0,
  entradas: [],
  saidas: [],
};

function addEntrada(entrada: Entrada) {
  minhaCarteira.entradas.push(entrada);
  atualizaSaldo();
}

console.log(minhaCarteira);

const novaEntrada = minhaEntrada(2000, "joão");

addEntrada(novaEntrada);

console.log(minhaCarteira);

function minhaSaida(ValorSaida: number, pessoa: string): Saida {
  const saida: Saida = {
    id: Math.floor(Date.now() / 1000),
    valor: ValorSaida,
    data: Date.now(),
    destinatario: pessoa,
  };
  return saida;
}

function addSaida(saida: Saida) {
  const valido = validaSaldo(saida);
  console.log(valido);
  if (valido) {
    return;
  } else {
    minhaCarteira.saidas.push(saida);
    atualizaSaldo();
  }
}

console.log(minhaCarteira);

const novaSaida = minhaSaida(500, "Pedro");

const novaSaida2 = minhaSaida(3000, "Pedro");

addSaida(novaSaida);

addSaida(novaSaida2);

console.log(minhaCarteira);

function validaSaldo(ValorSaida: Saida) {
  if (ValorSaida.valor > minhaCarteira.saldo) {
    console.log("Saldo insuficiente");
    return true;
  } else return false;
}

function atualizaSaldo() {
  const somaEntradas = minhaCarteira.entradas.reduce((soma, total) => {
    return soma + total.valor;
  }, 0);

  const somaSaida = minhaCarteira.saidas.reduce((soma, total) => {
    return soma + total.valor;
  }, 0);

  const saldoAtual = somaEntradas - somaSaida;

  minhaCarteira.saldo = saldoAtual;
}
