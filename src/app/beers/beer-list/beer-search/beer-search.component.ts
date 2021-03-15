import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.scss']
})
export class BeerSearchComponent implements OnInit, OnDestroy {

  @Output() searchUpdated: EventEmitter<string> = new EventEmitter<string>();

  public searchParamControl: FormControl;
  private valueChanges$: Observable<any>;
  private searchSubscription: Subscription;
  private DEBOUNCE_TIME = 500;

  constructor() { }

  ngOnInit(): void {
    this.searchParamControl = new FormControl();
    this.watchControlChanges();
  }

  ngOnDestroy() {
    this.searchSubscription.unsubscribe();
  }

  watchControlChanges() {
    this.valueChanges$ = this.searchParamControl.valueChanges.pipe(
      debounceTime(this.DEBOUNCE_TIME)
    );

    this.searchSubscription = this.valueChanges$.subscribe((searchParam: string) => {
      this.searchUpdated.emit(searchParam);
    });
  }
}
