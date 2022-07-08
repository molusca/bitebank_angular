import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
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

  constructor(
    private transferenciaService: TransferenciaService,
    private router: Router,
    private title: Title
  ) {
    this.title.setTitle('Bytebank - Nova Transferência');
  }

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
      complete: () => {
        this.router.navigateByUrl('/extrato');
      }
    });


  }

  limparFomulario() {
    this.valor = undefined;
    this.destino = undefined;
  }

}
