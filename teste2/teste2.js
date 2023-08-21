intervalos    = new Array(3);                                                           // vetor 2D c/ intervalos/turno
intervalos[0] = new Array("08 às 08:59", "09 às 09:59", "10 às 10:59", "11 às 11:59");
intervalos[1] = new Array("13 às 13:59", "14 às 14:59", "15 às 15:59", "16 às 16:59");
intervalos[2] = new Array("18 às 18:59", "19 às 19:59", "20 às 20:59", "21 às 21:59");
function setIntervalos(f) {
 idx = f.turno.options.selectedIndex;
 for (i = 0; i < f.horario.length; i++) {
 f.horario.options[i].text = intervalos[idx][i];
 }
}

function mais(f) { // f é o formulário onde o Select está contido
selObj                        = f.horario;
novaOp                        = new Option();                         // (1)
novaOp.text                   = "Intervalo 0" + (selObj.length + 1);  // (2)
selObj.options[selObj.length] = novaOp;                               // (3)
}
function menos(f) {
selObj = f.horario;
if (selObj.length > 0) {
len           = selObj.length - 1;
selObj.length = len;                // length = length - 1
    }
}