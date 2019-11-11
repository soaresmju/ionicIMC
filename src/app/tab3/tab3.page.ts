import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  private peso: number;
  private altura: number;
  private resultado: number;

  constructor() {}

  calcula(){
    this.resultado = this.peso / (this.altura * this.altura);
  }

  resultadoImc(): number{
    return this.resultado;
  }
}