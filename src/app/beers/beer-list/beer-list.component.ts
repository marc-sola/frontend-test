import { Component, OnInit } from '@angular/core';
import { BeersService } from '../beers.service';
import { BeerModel } from '../beer.model';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.scss']
})
export class BeerListComponent implements OnInit {

  public beers: BeerModel[];

  constructor(private beersService: BeersService) { }

  ngOnInit() {
    this.beersService.getBeers('', 1, 20).subscribe( (beers: BeerModel[]) =>
      this.beers = beers
    );
  }

  onSearchUpdated(searchParam: string) {
    this.beersService.getBeers(searchParam, 1, 20).subscribe( (beers: BeerModel[]) => {
        this.beers = beers;
      }
    );
  }

}
