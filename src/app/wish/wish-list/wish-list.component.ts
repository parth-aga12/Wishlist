import { Component, Input, OnInit } from '@angular/core';
import { WishItem } from 'c:/Users/Parth/Wishlist/src/shared/models/wishitem';

@Component({
  selector: 'wish-list',
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent implements OnInit {

  @Input() wishes : WishItem[] = []; // Define wishes as an input array component

  constructor() {}

  ngOnInit(): void {
  }

}
