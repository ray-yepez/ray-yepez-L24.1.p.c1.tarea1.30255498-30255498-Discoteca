import Cl_Cliente from "./Cl_Cliente.js";
import Cl_Discoteca from "./Cl_Discoteca.js";

let disco = new Cl_Discoteca();
let luis = new Cl_Cliente(134, "Luis", 23, M);
let ana = new Cl_Cliente(154, "Ana", 22, F);
let jose = new Cl_Cliente(324, "José", 18, M);
let carmen = new Cl_Cliente(286, "Carmen", 19, F);

disco.procsClt(luis);
disco.procsClt(ana);
disco.procsClt(jose);
disco.procsClt(carmen);

let salida = document.getElementById("salida");

salida.innerHTML = "Pago que realiza Luis " + luis.precioEntrada() + "<br>";
salida.innerHTML += "Pago que realiza Ana " + ana.precioEntrada() + "<br>";
salida.innerHTML += "Pago que realiza José " + jose.precioEntrada() + "<br>";
salida.innerHTML += "Pago que realiza Ana " + carmen.precioEntrada() + "<br>";

salida.innerHTML += "<br><br> Total Ganado " + disco.recaudado() + "<br>";
salida.innerHTML += "Porcentaje de rumberas mayores a 21 años: " + disco.pctjRumberas() + "% <br>";
salida.innerHTML += "El sexo que más asistió a la discoteca es: " + disco.mayoria();

