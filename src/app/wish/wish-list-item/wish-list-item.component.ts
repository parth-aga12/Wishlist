import { Component, Input, OnInit } from '@angular/core';
import { WishItem } from '../../../shared/models/wishitem';
import { EventService } from 'c:/Users/Parth/Wishlist/src/shared/services/EventService';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent implements OnInit {

  @Input() wish! : WishItem; //! says that wishText is a non-null property, stops errors
  // @Input() fulfilled! : boolean;
  // @Output() fulfilledChange = new EventEmitter<boolean>();

  get cssClasses() {
    //return this.fulfilled ? ['strikeout', 'text-muted'] : [];
    return {'strikeout text-muted': this.wish.isComplete};
  } //this class is connected to css and then applied to html, text-muted comes from bootstrap

  constructor(private events: EventService) {}

  ngOnInit(): void {
  }

  // Emit removeWish event when EventService sends event to be removed.
  // This function is then actioned in app.component in constructor
  removeWish() {
    this.events.emit('removeWish', this.wish);
  }

  toggleFulfilled() {
    this.wish.isComplete = !this.wish.isComplete;
    // this.fulfilled = !this.fulfilled; // if checked isComplete is true or vice versa
    // this.fulfilledChange.emit(this.fulfilled); // outputs whatever filter is selected to app
  }
}
