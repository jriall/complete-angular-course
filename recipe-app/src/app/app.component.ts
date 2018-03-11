import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  displayRecipes = true;
  displayShoppingList = false;

  selectView(view) {
    if (view === 'Recipes') {
      this.displayRecipes = true;
      this.displayShoppingList = false;
    }
    if (view === 'Shopping List') {
      this.displayRecipes = false;
      this.displayShoppingList = true;
    }
  }
}
