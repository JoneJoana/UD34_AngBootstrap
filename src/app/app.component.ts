import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'UD33_Angular - Calculadora';
  //valores de los inputs
  entrada='';
  output='';

  add(key: string) { //indicamos que entrara dato tipo string para que lo concatene
    this.entrada = this.entrada+key;
  }

  calc() { //executa el codigo, een este caso opera
    this.output = eval(this.entrada);
  }

  //al eliminar reseteamos a cadena vacia
  del() {
    this.entrada = '';
    this.output = '';
  }

  //faltaria control de errores

}
