import { Entrada, Saida } from ".";

interface Carteira {
    saldo: number;
    entradas: Entrada[];
    saidas: Saida[];
}

export default Carteira;
