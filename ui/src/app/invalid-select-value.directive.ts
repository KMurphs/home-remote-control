import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';



/** A select input value name can't match the given regular expression */
export function selectValueValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const forbidden = nameRe.test(control.value);
    console.log("eeeeeeeeeeeeeeeeeeeeeeee", control.value, forbidden)
    return forbidden ? {invalidValue: {value: control.value}} : null;
  };
}



@Directive({
  selector: '[appInvalidSelectValue]',
  providers: [{provide: NG_VALIDATORS, useExisting: InvalidSelectValueDirective, multi: true}]
})
export class InvalidSelectValueDirective implements Validator  {
  @Input('appInvalidSelectValue') invalidValue: string;
  constructor() { }

  validate(control: AbstractControl): {[key: string]: any} | null {
    console.log("ddddddddddd", control, this.invalidValue)
    return this.invalidValue ? selectValueValidator(new RegExp(this.invalidValue, 'i'))(control)
                              : null;
  }
}
