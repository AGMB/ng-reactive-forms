import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { email } from '@angular/forms/signals';
import { FormUtils } from '../../../utils/form-utils';
import { ErrorPipe } from '../../../pipes/error.pipe';
import { using } from 'rxjs';


@Component({
  selector: 'app-register-page',
  imports: [JsonPipe, ReactiveFormsModule, ErrorPipe],
  templateUrl: './register-page.html'
})
export class RegisterPageComponent {

  private fb = inject(FormBuilder);
  formUtil = FormUtils;



  registerForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.pattern(FormUtils.namePattern)]],
    email: ['', [Validators.required, Validators.pattern(FormUtils.emailPattern)], [this.formUtil.isEmailTaken]],
    userName: ['', [Validators.required, Validators.minLength(6), Validators.pattern(FormUtils.notOnlySpacesPattern), FormUtils.isUserNameTaken]],
    passWord1: ['', [Validators.required, Validators.minLength(6)]],
    passWord2: ['', [Validators.required, Validators.minLength(6)]],
  }, {
    validators: [FormUtils.isPasswordEquals()]
  })


  onSubmit() {
    if (this.registerForm.invalid)
      return this.registerForm.markAllAsTouched();
    console.log(this.registerForm.value);
    this.registerForm.reset();
  }


  descargarDatos(callback: (data: string) => void): void {
    setTimeout(() => {
      callback("Anderson Morrillo");
    }, 2000);
  }
  

  ngOnInit(): void {
    this.getUserAsync();
    this.getBalanceAsync();
  }

  getUser(callback: (user: string) => void) {
    setTimeout(() => {
      callback('Anderson')
    }, 5500);
  };

  getPost(user: string, callback: (posts: string[]) => void){
    setTimeout(() => {
      callback([`${user} POST1`, `${user} POST2`])
    }, 2500)
  }

  getUserPromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Anderson Promise');
      }, 3000)
    })
  }

  getUserBalancePromise(): Promise<string> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Balance Account $25000');
      }, 4000)
    })
  }

  async getUserAsync(){
    const user = await this.getUserPromise();
    console.log(`User: ${user}`);
  } 

  async getBalanceAsync(){
    const balance = await this.getUserBalancePromise();
    console.log(`Balance: ${balance}`);
  }

}
