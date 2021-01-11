import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CocktailListComponent } from './components/cocktail-list/cocktail-list.component';
import { CocktailComponent } from './components/cocktail/cocktail.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'list/:ingredient',
    component: CocktailListComponent,
  },
  {
    path: 'cocktail/:id',
    component: CocktailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', initialNavigation: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
