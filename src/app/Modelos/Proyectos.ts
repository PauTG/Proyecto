export class Proyecto {
    id: number;
    nombre: String;
    url: String;
    desempenio: String;
   


    constructor(id: number, nombre: String,
        url: String,
        desempenio: String) {

        this.id = id;
        this.nombre = nombre;
        this.url = url;
        this.desempenio = desempenio;
       
    }
}
