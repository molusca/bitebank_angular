import { Component, OnInit, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { TransferenciaService } from '../services/transferencia.service';
import { Transferencia } from '../types/Transferencia.type';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit, OnDestroy {

  public transferencias: Transferencia[] = [];
  public subscription = new Subscription();

  constructor(
    private transferenciaService: TransferenciaService,
    private title: Title
  ) {
    this.title.setTitle('Bytebank - Extrato');
  }

  ngOnInit(): void {
    this.subscription = this.transferenciaService.transferencias.subscribe((transferencias: Transferencia[]) => {
      this.transferencias = transferencias;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
