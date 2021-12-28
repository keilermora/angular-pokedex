import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unescapeText',
})
export class UnescapeTextPipe implements PipeTransform {
  transform(text: string): string {
    return text.replace(/\.{1}/g, ' ');
  }
}
