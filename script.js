const inputTexto = document.querySelector(".textInput");
const mensaje = document.querySelector(".textRespuesta");
const mensaje1 = document.querySelector(".Mensaje1");
const mensaje2 = document.querySelector(".Mensaje2");
const textCopiado = document.querySelector(".MensajeCopiado");
const botonCopiar = document.querySelector(".btnCopiar");

function btnencriptar() {
  if (inputTexto.value == "") {
    inputTexto.focus();
    mensaje.style.backgroundImage = "";
    mensaje1.style.visibility = "visible";
    mensaje2.style.visibility = "visible";
    botonCopiar.style.visibility = "hidden";
    mensaje.value = "";
  } else {
    const txtleido = encriptar(inputTexto.value);
    inputTexto.value = "";
    mensaje.value = "";
    mensaje.style.backgroundImage = "none";
    mensaje1.style.visibility = "hidden";
    mensaje2.style.visibility = "hidden";
    botonCopiar.style.visibility = "visible";
    mensaje.value = txtleido;
  }
}

function btndesencriptar() {
  if (inputTexto.value == "") {
    inputTexto.focus();
    mensaje.style.backgroundImage = "";
    mensaje1.style.visibility = "visible";
    mensaje2.style.visibility = "visible";
    botonCopiar.style.visibility = "hidden";
    mensaje.value = "";    
  } else {
    const txtleido = desencriptar(inputTexto.value);
    inputTexto.value = "";
    mensaje.style.backgroundImage = "none";
    mensaje.value = txtleido;
    textCopiado.style.display = "";
  }
}

function btnreset() {
  //const txtleido= encriptar(inputTexto.value);
  inputTexto.value = "";
  //    mensaje.style.backgroundImage="url(img/munheco.png)";
  inputTexto.focus();
  mensaje.style.backgroundImage = "";
  mensaje1.style.visibility = "visible";
  mensaje2.style.visibility = "visible";
  botonCopiar.style.visibility = "hidden";
  mensaje.value = "";
}

function desencriptar(textoEncriptar) {
  let matrizRegla = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  textoEncriptar = textoEncriptar.toLowerCase();
  for (let i = 0; i < matrizRegla.length; i++) {
    if (textoEncriptar.includes(matrizRegla[i][1])) {
      textoEncriptar = textoEncriptar.replaceAll(
        matrizRegla[i][1],
        matrizRegla[i][0]
      );
      console.log(i);
    }
  }
  return textoEncriptar;
}

function btncopiar() {
  swal("Ok!", "texto copiado!!!", "info");
  navigator.clipboard.writeText(mensaje.value);
//  textCopiado.style.display = "";
  mensaje.value = "";
}

function encriptar(textoEncriptar) {
    let matrizRegla = [
      ["e", "enter"],
      ["i", "imes"],
      ["a", "ai"],
      ["o", "ober"],
      ["u", "ufat"],
    ];
    textoEncriptar = textoEncriptar.toLowerCase();
    for (let i = 0; i < matrizRegla.length; i++) {
      if (textoEncriptar.includes(matrizRegla[i][0])) {
        textoEncriptar = textoEncriptar.replaceAll(
          matrizRegla[i][0],
          matrizRegla[i][1]
        );
        console.log(i);
      }
    }
    return textoEncriptar;
  }