import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeerListComponent } from './beer-list/beer-list.component';
import { RouterModule } from '@angular/router';
import { BeersRouting } from './beers.routing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { beersReducers } from './store';
import { EffectsModule } from '@ngrx/effects';
import { BeersEffects } from './store/beers.effects';
import { BeersService } from './beers.service';
import { BeerListItemComponent } from './beer-list/beer-list-item/beer-list-item.component';
import { BeerDetailComponent } from './beer-detail/beer-detail.component';
import { BeerSearchComponent } from './beer-list/beer-search/beer-search.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(BeersRouting),
    StoreModule.forFeature('drinks', beersReducers),
    EffectsModule.forFeature([BeersEffects]),
    ReactiveFormsModule
  ],
  declarations: [
    BeerListComponent,
    BeerListItemComponent,
    BeerDetailComponent,
    BeerSearchComponent
  ],
  providers: [
    BeersService
  ]
})
export class BeersModule { }
