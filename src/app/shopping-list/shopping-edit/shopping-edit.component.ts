import { outputAst } from '@angular/compiler';
import { Component, ElementRef, ViewChild, EventEmitter, Output } from '@angular/core';
import { ingredient } from 'src/app/Interface/ingredient-model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild('nameInput', {static: false}) nameInputRef!: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef!: ElementRef;
  // ingredientAdded = new EventEmitter<{name: string, amount: number}>();
  @Output() ingredientAdded = new EventEmitter<ingredient>();


  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    // const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value);
    const newIngredient = new ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

}
