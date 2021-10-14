import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchResultsMessage',
})
export class SearchResultsMessagePipe implements PipeTransform {
  /**
   * Muestra un mensaje personalizado, según la cantidad de resultados.
   * @param resultsLength Longitud de los resultados
   * @example Sin resultados, 1 resultado, 2 resultados
   */
  transform(resultsLength: number): string {
    let message = resultsLength ? resultsLength.toString() : 'No';
    message = `${message} result`;

    if (resultsLength !== 1) {
      message = `${message}s`;
    }

    return message;
  }
}
