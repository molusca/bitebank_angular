import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Transferencia } from '../types/Transferencia.type'

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private _listaTransferencias: Transferencia[];
  private _listaTransferenciasSubject: BehaviorSubject<Transferencia[]>;
  public listaTransferencias$: Observable<Transferencia[]>;

  constructor() {
    this._listaTransferencias = [];
    this._listaTransferenciasSubject = new BehaviorSubject<Transferencia[]>(this._listaTransferencias);
    this.listaTransferencias$ = this._listaTransferenciasSubject.asObservable();
  }

  get transferencias(): Transferencia[] {
    return this._listaTransferencias;
  }

  adicionarTransferencia(transferencia: Transferencia): void {
    this._listaTransferencias.push(transferencia);
    this._listaTransferenciasSubject.next([...this._listaTransferencias]);
  }
}
