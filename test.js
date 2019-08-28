function megasena(){
  var dados = null;

  var xhr = new XMLHttpRequest();
  method = "GET";
  url = "https://apiloterias.com.br/app/resultado?loteria=megasena&token=6llMhR6vmZWXFtI"


  loterias = xhr.open (method, url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status === 200){
      dados = JSON.parse(this.response);
      for (var k in dados.dezenas){
        var h1 = document.createElement('h1');
        h1.className += "h6 mr-1 rounded-circle p border border-success"
        var dezenas = document.createTextNode(dados.dezenas[k]);
        h1.appendChild(dezenas);
        box = document.getElementById('resultado')
        box.appendChild(h1);
      };
      var resultado = document.createTextNode(dados.numero_concurso);
      par = document.getElementById('concurso');
      par.appendChild(resultado);
      var valor = document.createTextNode(dados.valor_acumulado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
      par = document.getElementById('valor');
      par.appendChild(valor);
    };
};

xhr.send();
}


function quina(){
  var dados = null;
  
  var xhr = new XMLHttpRequest();
  method = "GET";
  url2 = "https://apiloterias.com.br/app/resultado?loteria=quina&token=6llMhR6vmZWXFtI"
  
  
  loterias = xhr.open (method, url2, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE && xhr.status === 200){
      dados = JSON.parse(this.response);
      for (var j in dados.dezenas){
        var h1 = document.createElement('h1');
        h1.className += "h6 mr-1 rounded-circle p border border-primary"
        var dezenas = document.createTextNode(dados.dezenas[j]);
        h1.appendChild(dezenas);
        box = document.getElementById('resultado2')
        box.appendChild(h1);
      };
      var resultado = document.createTextNode(dados.numero_concurso);
      par = document.getElementById('concurso2');
      par.appendChild(resultado);
      var valor = document.createTextNode(dados.valor_acumulado.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
      par = document.getElementById('valor2');
      par.appendChild(valor);
    };
  };
  
  xhr.send();
}

megasena();
quina();
  
