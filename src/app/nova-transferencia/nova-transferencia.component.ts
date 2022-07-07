import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  @Output() public aoTransferir = new EventEmitter<any>();

  public valor: number;
  public destino: number;

  constructor() { }

  ngOnInit(): void {
  }

  transferir() {
    
    if (!this.destino || !this.valor) {
      return;
    }

    const objetoTransferencia = {
      valor: this.valor, 
      destino: this.destino
    }; 

    this.aoTransferir.emit(objetoTransferencia);
    this.limparFomulario();
  }

  limparFomulario() {
    this.valor = undefined;
    this.destino = undefined;
  }

}
