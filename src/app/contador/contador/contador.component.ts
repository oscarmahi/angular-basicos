import { Component } from "@angular/core";

@Component({
    selector:'app-contador',
    template:`    
        <h1>{{ titulo }}</h1>
        <span>-------------------------</span>
        <h3>{{ 1+1 }}</h3>  <!--Puedo poner dentro de las llaves cualquier expresion de Javascript-->
        <div>-------------------------</div>

        <h3>La base es : {{ base }}</h3>

        <button (click)="acumular( base );"> + {{ base }} </button>
        <span>  {{ numero }}  </span>
        <button (click)="acumular( -base );"> - {{ base }} </button>  
    `
})

export class ContadorComponent{
    titulo: string = 'Contador App';
    numero: number = 10;
    base: number = 5;
  
  
    sumar(){
      this.numero +  1;
    }
  
    restar(){
      this.numero -= 1;
    }
  
    acumular( valor: number ) {
      this.numero += valor;
    }



}