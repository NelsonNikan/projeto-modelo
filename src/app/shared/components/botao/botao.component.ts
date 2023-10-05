import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent {
  /** Input para receber o texto que será exibido no botão
   * @param string
   * @default ''
  */
  @Input() textButton: string = '';
    /** Input para receber a imagem que será exibida dentro do botão
     * 
     * regras:
     ** se houver imagem ela será exibida
     ** se não houver imagem a tag img não será rendezirada
   * @param string
   * @default false
  */
  @Input() urlImage: string | boolean = false;

  constructor(){  
  }


}
