import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  
  // this tells typeScript that the array will items with type Recipe
  recipes: Recipe[] = [

    // create a new object from the class of type Recipe
    new Recipe('A Test Recipe', 'This is simply a test',
    'https://www.simplyrecipes.com/thmb/UnqP5ffGD7LUwvepm7QKhR-rkEU=/4667x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-Grilled-BBQ-Chicken-LEAD-10-03fd9892eaae4ce1a8a3f4c949657cfd.jpg')
  ];

}
