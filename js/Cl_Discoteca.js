export default Cl_Discoteca {
    constructor(){
        this.hombres = 0;
        this.mujeres = 0;
        this.md21 = 0;
        this.recaudado = 0.00;
    }

    procsClt(cliente){
        this.recaudado += cliente.precioEntrada();
        if (cliente.sexo()=="F"){
            this.mujeres += 1;
            if (cliente.edad()>21){
                this.md21 += 1;
            }
        }else{
            this.hombres += 1;
        }
    }

    recaudado(){
        return this.recaudado;
    }

    pctjRumberas(){
        return (this.hombres+this.mujeres)*(this.md21/100.00);
    }

    mayoria(){
        if (this.hombres>this.mujeres){
            return "MASCULINO";
        }else if (this.hombres<this.mujeres) {
            return "FEMENINO";
        } else {
            return "AMBOS POR IGUAL";
        }
    }

}