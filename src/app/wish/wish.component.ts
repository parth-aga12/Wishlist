import { Component } from '@angular/core';
import { WishItem } from '../../shared/models/wishitem';
import { WishService } from './wish.service';
import { EventService } from 'c:/Users/Parth/Wishlist/src/shared/services/EventService';

@Component({
  selector: 'app-wish', // use this selector in app.component html
  templateUrl: './wish.component.html',
  styleUrl: './wish.component.css'
})
export class WishComponent {
  items : WishItem[] = [];// force items to contain only WishItem type objects

  // property wishService with type WishService that is imported
  // Use event object from EventService to listen for the 'removeWish' event
  constructor(events: EventService, private wishService: WishService) {
    events.listen('removeWish', (wish : any) => {
      // code to remove wish from items
      let index = this.items.indexOf(wish); // get index of all wishes
      this.items.splice(index, 1); // remove 1 item from whole index
    })
  }

  ngOnInit(): void {
      this.wishService.getWishes().subscribe( // subscribe calls the get request
      (data : any) => {
        this.items = data;
      },
      (error: any) => { // if http request error occurs (very common), main code is in wish.service.ts
        alert(error.message);
      }
    ); 
  }
  filter: any; // initial value of filter

// 0 shows all, 1 shows unfulfilled, 2 shows fulfilled
  // get visibleItems() : WishItem[] {
  //   return this.items.filter(this.filter);
  // }


}
