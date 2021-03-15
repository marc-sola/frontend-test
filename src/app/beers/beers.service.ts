import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BeerModel } from './beer.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BeersService {

  private BEERS_URL = 'https://api.punkapi.com/v2/beers';

  constructor(private http: HttpClient) {}

  getBeers(searchParam: string, page: number, itemsPerPage: number) {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('per_page', itemsPerPage.toString());

    if (searchParam) {
      params = params.append('beer_name', searchParam);
    }
    return this.http.get<BeerModel[]>(this.BEERS_URL, {params});
  }

  getBeer(id: number): Observable<BeerModel> {
    return this.http.get<BeerModel[]>(this.BEERS_URL + '/' + id).pipe(map((beers: BeerModel[]) => beers.shift()));
  }

}
