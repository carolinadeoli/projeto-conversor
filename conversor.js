function Converter(){
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);
    var valorEmDolar = valorEmReal / 4.80; //valor do dólar em 14 de junho de 2023
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O resultado em dolar é: U$ " + valorEmDolar;
    elementoValorConvertido.innerHTML = valorConvertido;
}