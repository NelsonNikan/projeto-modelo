import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { images } from 'src/assets/img/img';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public imgs = images as any;
  public nome: any
  public form: FormGroup ;

  constructor(    private fb: FormBuilder){
    this.form = this.fb.group({

    })
  }
  
  ngOnInit(): void {

  }


}
