import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoComponent } from './components/botao/botao.component';
import { SliderCarouselComponent } from './components/slider-carousel/slider-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LocInfoComponent } from './components/loc-info/loc-info.component';
import { IconButtonComponent } from '../icon-button/icon-button.component';
import { CardComponent } from '../card/card.component';

@NgModule({
  declarations: [
    BotaoComponent,
    SliderCarouselComponent,
    LocInfoComponent,
    IconButtonComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule,
  ],
  exports: [BotaoComponent, SliderCarouselComponent, CardComponent],
})
export class SharedModule {}
