import { Component } from '@angular/core';
import { images } from 'src/assets/img/img';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public imgs = images as any;
  ngOnInit(): void {

  }

  public showButtonActivated(){
  }
}
