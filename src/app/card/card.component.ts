import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  getImageUrl = (url: string) => {
    return './img/' + url;
  };

  @Input() location: any;
}
