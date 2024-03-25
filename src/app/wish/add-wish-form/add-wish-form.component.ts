import { Component, EventEmitter, Output } from '@angular/core';
import { WishItem } from 'c:/Users/Parth/Wishlist/src/shared/models/wishitem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {

  @Output() addWish = new EventEmitter<WishItem>();

  newWishText = '';

  addNewWish() {
    //this.items.push(); // add wish to items array
    this.addWish.emit(new WishItem(this.newWishText))
    this.newWishText = ''; // clear textbox
  }


}
