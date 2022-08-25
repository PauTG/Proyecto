export class Estudio {
    id: number;
    establecimiento: String;
    puesto: String;
    logro: String;
   


    constructor(id: number, establecimiento: String,
       puesto: String,
       logro: String) {

        this.id = id;
        this.establecimiento = establecimiento;
        this.puesto = puesto;
        this.logro = logro;
       
    }
}
