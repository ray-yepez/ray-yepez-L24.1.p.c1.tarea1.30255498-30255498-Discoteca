export default class Cl_Discoteca {
    constructor(){
        this._hombres = 0;
        this._mujeres = 0;
        this._md21 = 0;
        this._recaudado = 0.00;
    }

    procsClt(cliente){
        this._recaudado += cliente.precioEntrada();
        if (cliente.sexo=="F"){
            this._mujeres += 1;
            if (cliente.edad>21){
                this._md21 += 1;
            }
        }else{
            this._hombres += 1;
        }
    }

    recaudado(){
        return this._recaudado;
    }

    pctjRumberas(){
        return this._md21*(100.00/(this._hombres+this._mujeres));
    }

    mayoria(){
        if (this._hombres>this._mujeres){
            return "MASCULINO";
        }else if (this._hombres<this._mujeres) {
            return "FEMENINO";
        } else {
            return "AMBOS POR IGUAL";
        }
    }

}