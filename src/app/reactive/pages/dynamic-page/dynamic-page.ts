import { JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormUtils } from '../../../utils/form-utils';
import { ErrorPipe } from '../../../pipes/error.pipe';

@Component({
  selector: 'app-dynamic-page',
  imports: [JsonPipe, ReactiveFormsModule, ErrorPipe],
  templateUrl: './dynamic-page.html'
})
export class DynamicPageComponent {

  private fb = inject(FormBuilder);
  formUtil = FormUtils;
  newFavorite = this.fb.control('', [Validators.required, Validators.minLength(3)]);

  myForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    favoriteGames: this.fb.array([
      ['Metal Gear 5', [Validators.required, Validators.minLength(5)]],
      ['FIFA 26', Validators.required]
    ], Validators.minLength(4))
  })

  get favoriteGames() {
    return this.myForm.get('favoriteGames') as FormArray
  }

  addFavorite() {
    if (this.newFavorite.invalid) return;

    const favoriteValue = this.newFavorite.value;
    this.favoriteGames.push(new FormControl(favoriteValue, [Validators.required, Validators.minLength(3)]));
    this.newFavorite.reset();
  }

  deleteFavorite(index: number) {
    this.favoriteGames.removeAt(index);
  }

  saveForm() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return
    }
    console.log(this.myForm.value);
    this.myForm.reset();
  }
}
