function calcular() {
    let num = document.getElementById('num').value;
    let resultado = '';

    resultado += num + " x 1 = " + (num * 1) + "\n";
    resultado += num + " x 2 = " + (num * 2) + "\n";
    resultado += num + " x 3 = " + (num * 3) + "\n";
    resultado += num + " x 4 = " + (num * 4) + "\n";
    resultado += num + " x 5 = " + (num * 5) + "\n";
    resultado += num + " x 6 = " + (num * 6) + "\n";
    resultado += num + " x 7 = " + (num * 7) + "\n";
    resultado += num + " x 8 = " + (num * 8) + "\n";
    resultado += num + " x 9 = " + (num * 9) + "\n";
    resultado += num + " x 10 = " + (num * 10) + "\n";

    alert(resultado);
}
