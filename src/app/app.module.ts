import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DetailsScreenComponent } from './components/pages/details-screen/details-screen.component';
import { SharedModule } from './shared/shared.module';
import { CarouselComponent } from './carousel/carousel.component';
import { LocInfoComponent } from './shared/components/loc-info/loc-info.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsScreenComponent,
    CarouselComponent,
    LocInfoComponent,
    SearchBarComponent,
    IconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
