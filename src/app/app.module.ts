import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/pages/home/home.component';
import { DetailsScreenComponent } from './components/pages/details-screen/details-screen.component';
import { BotaoComponent } from './shared/components/botao/botao.component';
import { CarouselComponent } from './carousel/carousel.component';
import { LocInfoComponent } from './shared/components/loc-info/loc-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsScreenComponent,
    BotaoComponent,
    CarouselComponent,
    LocInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
