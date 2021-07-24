export const round = (value: number, precision: number) => { //Função para arredondar um numero
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}