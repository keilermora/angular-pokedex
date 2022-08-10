import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchResultsMessage',
})
export class SearchResultsMessagePipe implements PipeTransform {
  /**
   * Show a custom message depending of search results quantity.
   * @param resultsLength
   * @example
   * No results
   * 1 result
   * 2 results
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
