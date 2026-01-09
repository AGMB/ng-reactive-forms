import { JsonPipe } from '@angular/common';
import {  Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { ErrorPipe } from '../../../pipes/error.pipe';
import { FormUtils } from '../../../utils/form-utils';

@Component({
  selector: 'app-basic-page',
  imports: [JsonPipe, ReactiveFormsModule, ErrorPipe],
  templateUrl: './basic-page.html'
})
export class BasicPageComponent { 

  private formBuilder = inject(FormBuilder);

  formUtil = FormUtils;

  //Esta es la forma recomendada para proyectos reales, mejora legibilidad y funciona como un servicio
  // por eso se inject, por debajo usa formgroup y formcontrols, es como un patron builder
  myForm: FormGroup = this.formBuilder.group({
    productName: ['', [Validators.required, Validators.minLength(3)]],
    productPrice: [0, Validators.min(5)],
    productStock: [0, Validators.min(1)]
  })


  // isValidField(fieldName: string): boolean {
  //   return (this.myForm.controls[fieldName].errors ? true : false) && this.myForm.controls[fieldName].touched;
  // }

  // getErroField(fieldName: string): ValidationErrors {
  //   return this.myForm.controls[fieldName].errors ?? {};
  // }

  onSaveForm(){
    if(this.myForm.invalid)
      return this.myForm.markAllAsTouched();

    console.log(this.myForm.value);
    this.myForm.reset({
      productPrice: 0,
      productStock: 0
    });
  }

  // esta es la forma oficial y estandar de crear formularios
//  myForm = new FormGroup({
//     productName: new FormControl(''),
//     productPrice: new FormControl(0),
//     productStock: new FormControl(0)
//  })
}
