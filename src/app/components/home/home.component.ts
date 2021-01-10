import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Cocktail from 'src/app/models/cocktail.model';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public cocktail: Cocktail;

  constructor(private cocktailService: CocktailService) {}

  ngOnInit(): void {
    this.getCocktail();
  }

  getCocktail(): void {
    this.cocktailService.getRandomCocktail().subscribe((cocktailRes) => {
      this.cocktail = cocktailRes.drinks[0];
    });
  }
}
