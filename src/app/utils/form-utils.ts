import { FormArray, FormControl, FormGroup, ValidationErrors } from "@angular/forms";

export class FormUtils {

    static isValidField(form: FormGroup, fieldName: string): boolean {
        return (form.controls[fieldName].errors ? true : false) && form.controls[fieldName].touched;
    }

    static getErroField(form: FormGroup, fieldName: string): ValidationErrors {
        return form.controls[fieldName].errors ?? {};
    }

    static isValidArrayField(formArray: FormArray, index: number): boolean {
        return (formArray.at(index).errors ? true : false) && formArray.at(index).touched;
    }

    static getErroFieldFromArray(form: FormArray, index: number): ValidationErrors {
        return form.at(index).errors ?? {}
    }

    static isValidControl(formControl: FormControl): boolean {
        return (formControl.errors ? true : false) && formControl.touched;
    }

    static getErroFromControl(form: FormControl): ValidationErrors {
        return form.errors ?? {};
    }

    static isValidArray(formArray: FormArray): boolean {
        return formArray.errors ? true: false;
    }

    static getErroFromArray(formArray: FormArray): ValidationErrors {
        return formArray.errors ?? {};
    }
}