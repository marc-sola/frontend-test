import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Params, Router, RouterEvent } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { BeerModel } from '../beer.model';
import { BeersService } from '../beers.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-beer-detail',
  templateUrl: './beer-detail.component.html',
  styleUrls: ['./beer-detail.component.scss']
})
export class BeerDetailComponent implements OnInit, OnDestroy {

  private beer: BeerModel;
  private beer$: Observable<BeerModel>;
  private beerSubscription: Subscription;

  constructor(private beerService: BeersService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe( (params: Params) => {
        const id = +params['id'];
        this.beer$ = this.beerService.getBeer(id);
      }
    );
    this.beerSubscription = this.beer$.subscribe((beer: BeerModel) => {
      this.beer = beer;
    });
  }

  ngOnDestroy(): void {
    this.beerSubscription.unsubscribe();
  }

  previous() {
    this.router.navigate(['beers' , this.beer.id - 1]).then(() => window.location.reload());
  }

  next() {
    this.router.navigate(['beers' , this.beer.id + 1]).then(() => window.location.reload());
  }

}
