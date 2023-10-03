import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { imagesInterface } from '../../models/images.interface';


@Component({
  selector: 'app-slider-carousel',
  templateUrl: './slider-carousel.component.html',
  styleUrls: ['./slider-carousel.component.scss']
})
export class SliderCarouselComponent {
  @Input() images: imagesInterface = {img:[]}

  isaOptions: OwlOptions = {
  
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    lazyLoad: true,
    dots: false,
    margin: 100,
    navSpeed: 700,
    navText: ['', ''],
    nav: false,
  };

}
