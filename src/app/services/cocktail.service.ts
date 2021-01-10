import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Cocktail from '../models/cocktail.model';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  public baseUrl: string = 'https://www.thecocktaildb.com/api/json/v1/1/';

  constructor(private http: HttpClient) {}

  getCocktails(ingredient): Observable<{ drinks: Cocktail[] }> {
    return this.http.get<{ drinks: Cocktail[] }>(
      `${this.baseUrl}filter.php?i=${ingredient}`
    );
  }

  getCocktail(id): Observable<{ drinks: { drinks: Cocktail[] } }> {
    return this.http.get<{ drinks: { drinks: Cocktail[] } }>(
      `${this.baseUrl}lookup.php?i=${id}`
    );
  }

  getRandomCocktail(): Observable<{ drinks: { drinks: Cocktail[] } }> {
    return this.http.get<{ drinks: { drinks: Cocktail[] } }>(
      `${this.baseUrl}random.php`
    );
  }
}
