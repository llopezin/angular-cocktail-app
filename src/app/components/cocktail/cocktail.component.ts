import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Cocktail from 'src/app/models/cocktail.model';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css'],
})
export class CocktailComponent implements OnInit {
  public cocktail: Cocktail;
  public ingredients = {};

  constructor(
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCocktail();
  }

  getCocktail(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.cocktailService.getCocktail(id).subscribe((cocktailRes) => {
      this.cocktail = cocktailRes.drinks[0];
      this.arrangeIngredients();
    });
  }

  arrangeIngredients() {
    for (let key in this.cocktail) {
      if (key.indexOf('strIngredient') > -1 && this.cocktail[key] !== null) {
        this.ingredients[this.cocktail[key]] = this.cocktail[
          `strMeasure${key.split('').pop()}`
        ];
      }
    }
  }
}
