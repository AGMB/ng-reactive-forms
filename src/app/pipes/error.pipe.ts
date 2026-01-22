import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
    name: 'error'
})

export class ErrorPipe implements PipeTransform {
    transform(value: ValidationErrors): string {
        const errorKey = Object.keys(value).at(0);
        switch (errorKey) {
            case 'required':
                return 'This field is required'
            case 'minlength':
                return `This field is ${value['minlength'].requiredLength} - actual: ${value['minlength'].actualLength} `
            case 'min':
                return `This min value is ${value['min'].min} `
            case 'email':
                return `This email is invalid`
            case 'pattern':
                return `Invalid value, dont match pattern`
            case 'nameTaken':
                return `This UserName can be used`
            case 'emailTaken':
                return `This Email can be used`
        }
        return '';

    }
}