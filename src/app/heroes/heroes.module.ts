import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[       //aqui declaro los componentes que voy a usar fuera
        HeroeComponent,
        ListadoComponent
    ],
    imports:[
        CommonModule    //en este modulo es donde se encuentran los ngIf, ngFor, etc
    ]
})

export class HeroesModule{

}

