//Enum

enum ContractStatus {
    Permanent = 1,
    Temp,
    Apprentice
}

let employeeStatus: ContractStatus = ContractStatus.Temp;
console.log(employeeStatus);
console.log(ContractStatus[employeeStatus]);

type dado = 1 | 2 | 3 | 4 | 5 | 6;

let numDado: dado;
numDado = 1;
numDado = 6;
numDado = 5;

let listaDeNumeros: number[] = [1,2,3];

let listaDeValores: [string, number, number, boolean] = ['caio',12,3.5,true];

