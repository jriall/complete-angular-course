import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() recipeEmitter = new EventEmitter<{  }>();
  @Output() shoppingListEmitter = new EventEmitter<{ }>();

  constructor() { }

  ngOnInit() {
  }

  selectRecipes() {
    this.recipeEmitter.emit('Recipes');
  }

  selectShoppingList() {
    this.shoppingListEmitter.emit('Shopping List');
  }

}
