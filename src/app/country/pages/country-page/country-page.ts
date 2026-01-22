import { Component, inject, signal } from '@angular/core';
import { CountryService } from '../../service/country.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { Country } from '../../interface/country.interface';

@Component({
  selector: 'app-country-page',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './country-page.html'
})
export class CountryPageComponent {

  private countryService = inject(CountryService);
  private fb = inject(FormBuilder);

  regions = signal(this.countryService.regions);
  countries = signal<Country[]>([]);
  borders = signal<string[]>([]);

  myForm = this.fb.group({
    region: ['', Validators.required],
    country: ['', Validators.required],
    border: ['', Validators.required]
  })


  onChangeRegion(region: string) {
    console.log(region);
    this.countryService.getCountryByRegion(region)
      .subscribe((response) => {
        const countryOrdered = response.sort((a,b) => a.name.official.localeCompare(b.name.official))
        this.countries.set(countryOrdered);
        this.myForm.controls['country'].setValue('');
        this.myForm.controls['border'].setValue('');
        console.log(response)
      });
  }

  onChangeCountry(code: string) {
    this.countryService.getBorderByAlpahCode(code)
      .subscribe((response) => {
        this.borders.set(response.borders);
         this.myForm.controls['border'].setValue('');
      });
  }
}
