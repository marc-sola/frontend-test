import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.css']
})
export class BeerSearchComponent implements OnInit {

  @Output() searchUpdated: EventEmitter<string> = new EventEmitter<string>();

  public searchParamControl: FormControl;

  constructor() { }

  ngOnInit(): void {
  }

  private search() {
    //TODO: search
    const searchParam = '';
    this.searchUpdated.emit(searchParam);
  }

}
