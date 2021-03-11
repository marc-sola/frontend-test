import { async, TestBed } from '@angular/core/testing';

import { BeerDetailComponent } from './beer-detail.component';
import { BeerListComponent } from '../beer-list/beer-list.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('BeerDetailComponent', () => {
  let component: BeerDetailComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BeerListComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    });

    component = TestBed.createComponent(BeerDetailComponent).componentInstance;
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
