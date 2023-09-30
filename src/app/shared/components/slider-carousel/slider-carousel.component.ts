import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-slider-carousel',
  templateUrl: './slider-carousel.component.html',
  styleUrls: ['./slider-carousel.component.scss']
})
export class SliderCarouselComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    lazyLoad: true,
    dots: false,
    margin: 50,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      940: {
        items: 2,
      },
      1200: {
        items: 3,
      },
    },
    nav: false,
  };

}
