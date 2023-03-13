import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})
export class HeroeComponent{
    
    nombre: string = 'Ironman';
    edad  : number = 33;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    // regresarNombre():void {
    //     this.nombre = this.nombre;
    // }

    // regresarEdad():void {
    //     this.edad = this.edad;
    // }
    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void {
        this.edad = 40;
    }

}
