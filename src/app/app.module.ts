import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginationComponent } from './pagination/pagination.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CardComponent} from './cards/cards.component'
import {MycardComponent} from './mycard/mycard.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {FormsModule} from '@angular/forms';
import { FiltersComponent } from './filters/filters.component';
import { Ng5SliderModule } from 'ng5-slider';
import { IonicModule } from '@ionic/angular';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    PaginationComponent,
    CardComponent,
    MycardComponent,
    SearchBarComponent,
    FiltersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    Ng5SliderModule,
    NgxPaginationModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
