import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  standalone: true
})
export class OrderByPipe implements PipeTransform {

  transform(array: any[], campo: string): any[] {
    return array.sort((a, b) => a[campo].localeCompare(b[campo]));
  }

}
