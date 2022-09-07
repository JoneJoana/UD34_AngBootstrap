import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'UD33_Angular - Calculadora';
  entrada='';
  output='';

  add(key: string) {
    this.entrada = this.entrada+key;
  }

  calc() {
    this.output = eval(this.entrada);
    console.log(this.output);
  }

  del() {
    this.entrada = '';
    this.output = '';
  }

}
