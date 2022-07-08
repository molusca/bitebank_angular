import { Component, OnInit } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from '../types/Transferencia.type';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  public valor: number;
  public destino: number;

  constructor(private transferenciaService: TransferenciaService) { }

  ngOnInit(): void {
  }

  transferir() {

    if (!this.destino || !this.valor) {
      return;
    }

    const objetoTransferencia: Transferencia = {
      valor: this.valor,
      destino: this.destino,
      data: new Date().toISOString()
    };

    this.transferenciaService.adicionarTransferencia(objetoTransferencia)
    .subscribe({
      next: (resultado) => {
        console.log(resultado);
        this.limparFomulario();
      },
      error: (error) => {
        console.error(error);
      },
      complete: () => {}
    });


  }

  limparFomulario() {
    this.valor = undefined;
    this.destino = undefined;
  }

}
