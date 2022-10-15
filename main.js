var numberUm=
Number(document.getElementById("firstno").value);

function calcular(){
    numberUm=
    Number(document.getElementById("secondno").value);

    var area = numberUm * numberUm;
    var perimetro =4 * numberUm;
    documento.getElementById("lblArea").innerHTML = area;
    document.getElementById("lblPerimetro").innerHTML = perimetro;

}