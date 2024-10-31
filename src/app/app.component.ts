import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    NgClass,
    NgFor
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'xAcademy';
  imgSrc = 'https://www.queanimal.com/wp-content/uploads/2018/04/que-come-el-colibri.jpg'
  contador = 0;
  disabledBtn = false;
  textClasses = {
    high: this.contador > 10,
    warning: this.contador > 5 && this.contador <= 10
  };

  tablaPuntuaciones = [
    {nombre: 'Juan', puntuacion: 855},
    {nombre: 'Pedro', puntuacion: 803},
    {nombre: 'Luis', puntuacion: 720},
    ];
    
  sumarUno () {
    this.contador = this.contador + 1;
    if (this.contador > 10) {
      this.disabledBtn = true;
    }
    this.textClasses = {
      high: this.contador > 10,
      warning: this.contador > 5 && this.contador <= 10
    } 
  }
}
