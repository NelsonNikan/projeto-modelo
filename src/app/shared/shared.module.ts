import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoComponent } from './components/botao/botao.component';
import { SliderCarouselComponent } from './components/slider-carousel/slider-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { LocInfoComponent } from './components/loc-info/loc-info.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [   
    BotaoComponent,
    SliderCarouselComponent,
    LocInfoComponent,
    InputComponent

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    CarouselModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  exports:[
    BotaoComponent,
    SliderCarouselComponent,
    InputComponent
  ]
})
export class SharedModule { }
