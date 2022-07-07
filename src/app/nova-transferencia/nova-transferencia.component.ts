import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  public valor: number;
  public destino: number;

  constructor() { }

  ngOnInit(): void {
  }

  transferir() {
    
    if (!this.destino || !this.valor) {
      return;
    }

    console.log(`Transferindo ${this.valor} para ${this.destino}`);
  }

}
