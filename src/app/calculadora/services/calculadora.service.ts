/** 
* Serviço responsável por executar as operações da calculadora.
*
* @author John Gerber <john.gerber@live.com>
* @jhonjonh
* @since 1.0
*/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {

/* Definindo as constantes utilizadas para identificar as operacoes de calculo */  
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';
  static readonly DIVISAO: string = '/';

  constructor() { }
/**
 * Método que calcula uma operacao matematica com dois numeros e um operador. Suporta soma, subtracao, multiplicacao e divisao.
 * @param num1 number
 * @param num2 number
 * @param operacao string operacao a ser executada
 * @returns number resultado da operacao
 */

  calcular(num1: number, num2: number, operacao: string) : number {
    let resultado : number;

    switch(operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
      break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
      break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
      break;
      default:
        resultado = 0;
    }
    return resultado;
  }
}
