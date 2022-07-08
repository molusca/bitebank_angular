import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transferencia } from '../types/Transferencia.type'

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private _url: string = environment.apiUrl + '/transferencias';

  constructor(private http: HttpClient) { }

  get transferencias(): Observable<ReadonlyArray<Transferencia>> {
    return this.http.get<Transferencia[]>(this._url);
  }

  adicionarTransferencia(transferencia: Transferencia): Observable<Transferencia> {
    return this.http.post<Transferencia>(this._url, transferencia);
  }
}
