import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'i18nKey',
})
export class I18nKeyPipe implements PipeTransform {
  transform(string: string): string {
    return string
      .toUpperCase() // Convert string to uppercase
      .replace(/\&/g, 'AND') // Replaces special character '&' by 'AND'
      .replace(/[ -]/g, '_'); // Replaces spaces and dashes by '_'
  }
}
