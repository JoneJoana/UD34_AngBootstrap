import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'UD33_Angular - Calculadora';
  pTecladoN = [9,8,7,6,5,4,3,2,1,".",0];
}
