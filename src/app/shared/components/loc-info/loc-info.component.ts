import { Component, EventEmitter, Input, Output } from '@angular/core';
import { infoInterface } from '../../models/card-info.interface';

@Component({
  selector: 'app-loc-info',
  templateUrl: './loc-info.component.html',
  styleUrls: ['./loc-info.component.scss'],
})
export class LocInfoComponent {
  @Input() cardInfos: any;
}
