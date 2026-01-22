import { AbstractControl, FormArray, FormControl, FormGroup, ValidationErrors } from "@angular/forms";

function simutaleGoBackend(){
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true);
            },2500)
        });
    }

export class FormUtils {

    static namePattern = '([a-zA-Z]+) ([a-zA-Z]+)';
    static emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    static notOnlySpacesPattern = '^[a-zA-Z0-9]+$';
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
        return formArray.errors ? true : false;
    }

    static getErroFromArray(formArray: FormArray): ValidationErrors {
        return formArray.errors ?? {};
    }

    static isFormInvalid(form: FormGroup): boolean {
        return (form.errors?.['passwordNotEqual'] ? true : false) && form.touched
    }

    static isPasswordEquals() {
        return (myForm: AbstractControl) => {
            const passwordValue1 = myForm.get('passWord1')?.value;
            const passwordValue2 = myForm.get('passWord2')?.value;

            return passwordValue1 === passwordValue2 ? null : {
                passwordNotEqual: true
            }

        }
    }

    static isUserNameTaken(control: AbstractControl): ValidationErrors | null {
        const value = control.value;
        if (value === 'Jagger') {
            return {
                nameTaken: true
            }
        }
        return null;
    }

    static async isEmailTaken(control: AbstractControl): Promise<ValidationErrors | null> {

        await simutaleGoBackend();
        const value = control.value;

        if(value === 'holamundo@test.com') {
            return {
                emailTaken: true
            }
        }

        return null;
    }
}