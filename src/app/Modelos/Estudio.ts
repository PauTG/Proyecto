export class Estudio {
    id: number;
    nombre: String;
    puesto: String;
    fecha: String;
   


    constructor(id: number, nombre: String,
       puesto: String,
        fecha: String) {

        this.id = id;
        this.nombre = nombre;
        this.puesto = puesto;
        this.fecha = fecha;
       
    }
}
