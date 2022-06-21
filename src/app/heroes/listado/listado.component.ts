import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iron Man', 'Superman', 'Hulk'];
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('Borrando...');
    this.heroeBorrado = this.heroes.shift() || '';  //si tiene valor, toma ek héroe y sino toma el valor de ''
  }


  /**
   * Esta funcion podria valer para devolver true o false en función de si
   * heroeBorrado esta vacío o no
   */
  heroeEstaBorrado(){
    (this.heroeBorrado == '') ? false : true;
  }


}
