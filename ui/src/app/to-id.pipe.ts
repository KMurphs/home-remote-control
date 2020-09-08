import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toID'
})
export class ToIDPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return `to-${(value as string).replace("#", "")}`;
  }

}
