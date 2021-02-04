import { TestBed, inject } from '@angular/core/testing';

import { BeersService } from './beers.service';
import { HttpClient } from '@angular/common/http';

class MockHttp {
  get() {}
}


describe('BeersService', () => {

  let http: HttpClient;
  let beersService: BeersService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BeersService,
        {provide: HttpClient, useClass: MockHttp}
      ]
    });

    beersService = TestBed.get(BeersService);
    http = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(beersService).toBeTruthy();
  });

  describe('getBeers', () => {
    it ('should call to get method with specific url', () => {
      spyOn(http, 'get').and.callThrough();

      beersService.getBeers(1, 20);

      expect(http.get).toHaveBeenCalledWith('https://api.punkapi.com/v2/beers?page=1&per_page=20');
    });
  });

  describe('getBeer', () => {
    it ('should call to get method with specific url', () => {
      spyOn(http, 'get').and.callThrough();

      beersService.getBeer(1);

      expect(http.get).toHaveBeenCalledWith('https://api.punkapi.com/v2/beers/1');
    });
  });
});
