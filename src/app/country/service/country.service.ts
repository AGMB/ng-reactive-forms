import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interface/country.interface';

@Injectable({providedIn: 'root'})
export class CountryService {

    private http = inject(HttpClient);

    private baseUrl = 'https://restcountries.com/v3.1';

    private _regions = [
        'America',
        'Africa',
        'Asia',
        'Europe',
        'Oceania'
    ];

    get regions() {
        return [...this._regions]
    };
    

    getCountryByRegion(region: string): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.baseUrl}/region/${region}?fields=cca3,name,borders`);
    }

     getBorderByAlpahCode(alphaCode: string): Observable<Country> {
        return this.http.get<Country>(`${this.baseUrl}/alpha/${alphaCode}?fields=cca3,name,borders`);
    }
}