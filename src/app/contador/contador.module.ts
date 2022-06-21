import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador/contador.component';

@NgModule({
    declarations:[
        ContadorComponent
    ],
    exports:[       //aqui declaro los componentes que voy a usar fuera
        ContadorComponent
    ],
    imports:[
            //esto lo dejo vacio, ya que en el modulo de contador no me hace falta importar nada.
    ]
})

export class ContadorModule{

}
