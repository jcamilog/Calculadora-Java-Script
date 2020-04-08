function cambiarTamañoAccionTecla(elemento){
    if(elemento.id=="mas"){
      elemento.style.height = "95%";
    }else{
      elemento.style.height = "61px";
    }
}
function retornarTamañoAccionTecla(elemento){
  if(elemento.id=="mas"){
    elemento.style.height = "100%";
  }else{
    elemento.style.height = "62.91px";
  }
}
function PresionaTecla(boton,oper1,flagOperacion){
  var tecla=boton.id;
   switch (tecla) {
    case "on":
        insertaClear();
        break;
    case "sign":
        insertaSigno();
        break;
    case "raiz":
        alert("raiz");
        break;
    case "dividido":
        dividir();
        break;
    case "por":
        multiplicar();
        break;
    case "menos":
        restar();
        break;
    case "mas":
        sumar();
        break;
    case "igual":
        calcular();
        break;
    default:
        insertaNumero(boton);
      }
}
function calcular(){
  switch (flagOperacion) {
    case "+":
        oper1 = parseFloat(oper1);
        oper2=parseFloat(document.getElementById("display").innerHTML);
        resultado=oper1+oper2;
        oper1=resultado;
        flagOperacion="=+";
        break;
    case "-":
        oper1 = parseFloat(oper1);
        oper2=parseFloat(document.getElementById("display").innerHTML);
        resultado=oper1-oper2;
        oper1=resultado;
        flagOperacion="=-";
      break;
    case "*":
        oper1 = parseFloat(oper1);
        oper2=parseFloat(document.getElementById("display").innerHTML);
        resultado=oper1*oper2;
        oper1=resultado;
        flagOperacion="=*";
        break;
    case "/":
        oper1 = parseFloat(oper1);
        oper2=parseFloat(document.getElementById("display").innerHTML);
        resultado=oper1/oper2;
        oper1=resultado;
        flagOperacion="=/";
        break;
    case "=+":
        resultado=oper1+oper2;
        oper1=resultado;
        break;
    case "=-":
        resultado=oper1-oper2;
        oper1=resultado;
        break;
    case "=*":
         resultado=oper1*oper2;
         oper1=resultado;
         break;
    case "=/":
        resultado=oper1/oper2;
        oper1=resultado;
      }

      var resultadoString =""+resultado;
      if(resultadoString.length>8){
        resultadoString = resultadoString.substring(0, 7);
        document.getElementById("display").innerHTML=resultadoString;
      }else{
        document.getElementById("display").innerHTML=resultadoString
      }
}
function insertaClear(){
  oper1="";
  flagOperacion="";
  document.getElementById("display").innerHTML="0";
}
function sumar(){
  oper1=document.getElementById("display").innerHTML;
  flagOperacion="+";
  document.getElementById("display").innerHTML="";
}
function restar(){
  oper1=document.getElementById("display").innerHTML;
  flagOperacion="-";
  document.getElementById("display").innerHTML="";
}
function multiplicar(){
  oper1=document.getElementById("display").innerHTML;
  flagOperacion="*";
  document.getElementById("display").innerHTML="";
}
function dividir(){
  oper1=document.getElementById("display").innerHTML;
  flagOperacion="/";
  document.getElementById("display").innerHTML="";
}
function insertaSigno(){
      var pantalla = document.getElementById("display").innerHTML;
      var numero = "0";
      if(pantalla != "0"){
        if(pantalla.startsWith('-')){
          numero=pantalla.replace('-','');
        }else{
          numero="-"+pantalla;
        }
      }
      if(numero.length<=9){
          document.getElementById("display").innerHTML=numero;
      }
}
function insertaNumero(boton){
      var tecla = boton.id;
      var pantalla = document.getElementById("display").innerHTML;
      var numero = "0";
      var flag = true;
      if (pantalla.indexOf('.') > -1){
        flag = false;
      }
      if(pantalla == "0"){
        if(tecla=="punto"&&flag){
          numero="0.";
        }else{
          numero = tecla;
        }
      }else{
        if(tecla=="punto"&&flag){
          numero = pantalla + ".";
        }else{
          numero = pantalla + tecla;
        }
      }
      if(numero.length<=8){
          document.getElementById("display").innerHTML=numero;
      }
}
var Calculadora = {
  init: function(){
    var flagOperacion="";
    var oper1="";
    this.asignarEventosBotones('tecla');
  },
  asignarEventosBotones: function(selector){
      var botonesPagina = document.getElementsByClassName(selector);
      for (var i = 0; i < botonesPagina.length; i++) {
        botonesPagina[i].onmousedown = this.eventoPresionaTecla;
        botonesPagina[i].onmouseup= this.eventoSueltaTecla;
      }
  },
    eventoPresionaTecla: function(event){
    cambiarTamañoAccionTecla(event.target);
  },
  eventoSueltaTecla: function(event){
    retornarTamañoAccionTecla(event.target);
    PresionaTecla(event.target);
  },
}

Calculadora.init();
