import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';
import { BeerModel } from '../beer.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  private beers$: Observable<BeerModel[]>;

  constructor(private beersService: BeersService) { }

  ngOnInit() {
    this.beers$ = this.beersService.getBeers(1, 20);
  }

}
