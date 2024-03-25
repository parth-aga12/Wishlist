import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WishItem } from 'c:/Users/Parth/Wishlist/src/shared/models/wishitem';


const filters = [
  (item: WishItem) => item,
  (item: WishItem) => !item.isComplete,
  (item: WishItem) => item.isComplete,

];

@Component({
  selector: 'wish-filter',
  templateUrl: './wish-filter.component.html',
  styleUrl: './wish-filter.component.css'
})
export class WishFilterComponent implements OnInit{

  @Input() filter: any;
  @Output() filterChange = new EventEmitter<any>(); //Add Change after to allow angular to understand 
                                                   // that this is still same filter component being used for 2 way binding

  ngOnInit(): void {
      this.updateFilter('0'); // forces initial value to be all 
  }

  listFilter : any = '0'; // Set default to 0 which is All

  updateFilter(value: any) {
    this.filter = filters[value];
    this.filterChange.emit(this.filter); // outputs whatever filter is selected to app
  }
}
