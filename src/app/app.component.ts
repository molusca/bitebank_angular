import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank_angular';
  public transferencia;

  transferir(event) {
    this.transferencia = event;
  }
}
