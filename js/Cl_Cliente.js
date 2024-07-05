export default class Cl_Cliente {
    constructor(ced, nom, ed, sex){
        this._cedula = ced;
        this._nombre = nom;
        this._edad = ed;
        this._sexo = sex;
    }

    set cedula(ced) {
        this._cedula = ced;
    }
    set nombre(nom) {
        this._nombre = nom;
    }
    set sexo(sex) {
        this._sexo = sex;
    }
    set edad(e){
        this._edad = e;
    }

    get cedula() {
        return this._cedula;
    }
    get sexo() {
        return this._sexo;
    }

    get edad() {
        return this._edad;
    }
    get nombre() {
        return this._nombre;
    }

    precioEntrada(){
        if (this._sexo=="F"){
            return 25.00*(25.00/100);
        } else{
            return 25.00;
        }
    }

}