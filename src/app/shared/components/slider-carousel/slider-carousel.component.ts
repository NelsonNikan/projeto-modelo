import { Component, Input } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { imagesInterface } from '../../models/images.interface';


@Component({
  selector: 'app-slider-carousel',
  templateUrl: './slider-carousel.component.html',
  styleUrls: ['./slider-carousel.component.scss']
})
export class SliderCarouselComponent {
  @Input() images: imagesInterface = {} as imagesInterface

  ngOnInit(): void {
    console.log('teste', this.images.img)
  }

  isaOptions: OwlOptions = {
  
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    lazyLoad: true,
    dots: false,
    margin: 50,
    navSpeed: 700,
    navText: ['', ''],
    nav: false,
    responsive: {
      0: {
        items: 1,
      },
      260: {
        items: 2,
      },
      600: {
        items: 3
      },
      940: {
        items: 4
      }
    },
  };

}
