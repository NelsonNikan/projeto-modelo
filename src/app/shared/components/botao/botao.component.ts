import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent {

  @Input() textButton: string = '';
  @Input() urlImage: string | boolean = false;
  @Output() click = new EventEmitter<any>();

  constructor(){  
  }

  public clickButton(): void{
    this.click.emit();
  }
}
