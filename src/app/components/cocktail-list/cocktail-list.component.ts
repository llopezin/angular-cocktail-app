import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  RouterEvent,
} from '@angular/router';

import { filter } from 'rxjs/operators';
import Cocktail from 'src/app/models/cocktail.model';
import { CocktailService } from 'src/app/services/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css'],
})
export class CocktailListComponent implements OnInit {
  public cocktails: Cocktail[];
  public ingredient;

  constructor(
    private cocktailService: CocktailService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCocktails();
    this.refetchOnComponentNavigation();
  }

  getCocktails(): void {
    this.ingredient = this.activatedRoute.snapshot.paramMap.get('ingredient');

    this.cocktailService
      .getCocktails(this.ingredient)
      .subscribe((cocktails) => {
        this.cocktails = cocktails.drinks;
      });
  }

  refetchOnComponentNavigation() {
    this.router.events
      .pipe(filter((event: RouterEvent) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.getCocktails();
      });
  }
}
