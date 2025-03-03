import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // import for http request
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AddWishFormComponent } from './add-wish-form/add-wish-form.component';
import { WishFilterComponent } from './wish-filter/wish-filter.component';
import { WishListItemComponent } from './wish-list-item/wish-list-item.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { WishComponent } from './wish.component';

@NgModule({
  declarations: [    
    WishListComponent,
    AddWishFormComponent,
    WishFilterComponent,
    WishListItemComponent,
    WishComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule, // add this to make http request
    FormsModule // Import this for ngModel in html to work
  ],
  exports: [
    WishComponent
  ]
})
export class WishModule { }
