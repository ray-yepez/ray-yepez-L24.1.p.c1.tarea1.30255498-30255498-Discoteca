export default Cl_Cliente {
    constructor(ced, nom, ed, sex){
        this.cedula = ced;
        this.nombre = nom;
        this.edad = ed;
        this.sexo = sex;
    }

    set cedula(ced){
        this.cedula = ced;
    }
    set nombre(nom){
        this.nombre = nom;
    }
    set sexo(sex){
        this.sexo = sex;
    }
    set edad(e){
        this.edad = e;
    }

    get cedula(){
        return this.cedula;
    }
    get sexo(){
        return this.sexo;
    }
    get edad(){
        return this.edad;
    }
    get nombre(){
        return this.nombre;
    }

    precioEntrada(){
        if (this.sexo=="F"){
            return 25.00*(25.00/100);
        } else{
            return 25.00;
        }
    }

}