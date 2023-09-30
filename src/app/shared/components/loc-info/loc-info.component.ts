import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loc-info',
  templateUrl: './loc-info.component.html',
  styleUrls: ['./loc-info.component.scss']
})

export class LocInfoComponent {
  @Input() attraction: string = '';
  @Input() country: string = '';
  @Input() city: string = '';
  @Input() rating: string = '';
}
