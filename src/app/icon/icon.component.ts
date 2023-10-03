import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  
  @Input() imageUrl: boolean | string = false;
  @Input() text: string = '';
  
}
