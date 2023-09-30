import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})

export class CarouselComponent {
@Input() attraction: string = '';
@Input() country: string = '';
@Input() city: string = '';
@Input() rating: string = '';
}
