function Converter() {
    let input = parseFloat(document.getElementById("valor_inicial").value);
    let output = document.getElementById("resultado");
    let de = document.getElementById("moedasde");
    let para = document.getElementById("moedaspara");
    
    console.log(de.value)
  
    //Reais
    if (de.value == "BRL" && para.value != "Moeda 2") {
      let valorEmReais = input;
      let valor;
      if (para.value == "BRL") {
        valor = "O valor em reais é: R$" + valorEmReais.toFixed(2);
      } else if (para.value == "EUR") {
        valor = "O valor em euros é: €" + (valorEmReais * 0.16).toFixed(2);
      } else if (para.value == "USD") {
        valor = "O valor em dólar é: $" + (valorEmReais * 0.19).toFixed(2);
      }
      output.innerHTML = valor;
    } else {
        output.innerHTML = '';
    }
  }
  