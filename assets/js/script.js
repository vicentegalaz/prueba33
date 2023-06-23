//tabla nueva
var cargarTabla = (listadoNuevo) => {
  let eSBtnAccion = document.getElementById("sBtnAccion");
  let eContenedorTabla = document.getElementById("contenedorTabla");
  let eNombre = document.getElementById("nombre");
  let eCorreo = document.getElementById("correo");
  let eContrasena = document.getElementById("contrasena");
  let eEdad = document.getElementById("edad");
  let eTelefono = document.getElementById("telefono");
  let eFecha = document.getElementById("fecha");
  let eGenero = document.getElementById("genero");
  let eAceptar = document.getElementById("aceptar");

  render = "<table>"
  render += "<th>Nombre </th>"
  render += "<th>Correo </th>"
  render += "<th>Contrasena </th>"
  render += "<th>edad </th>"
  render += "<th>Telefono </th>"
  render += "<th>Fecha </th>"
  render += "<th>genero </th>"
  render += "<th>Aceptar </th>"
  for (let i = 0; i < listadoNuevo.length; i++) {
    const element = listadoNuevo[i];
    render += "<tr>"
    render += "<td>" + element.nombre + "</td>";
    render += "<td>" + element.correo + "</td>";
    render += "<td>" + element.contrasena + "</td>";
    render += "<td>" + element.edad + "</td>";
    render += "<td>" + element.telefono + "</td>";
    render += "<td>" + element.fecha + "</td>";
    render += "<td>" + element.genero + "</td>";
    render += "<td>" + element.aceptar + "</td>";
    render += "<td>"
    render += "<button id='btnEditar" + i + "'>Editar</button>"
    render += "<button id='btnEliminar" + i + "'>Eliminar</button>"
    render += "</td>"
    render += "</tr>"
  }
  render += "</table>"
  eContenedorTabla.innerHTML = render;
  for (let i = 0; i < listadoNuevo.length; i++) {
    const element = listadoNuevo[i];
    var eBtnEditar = document.getElementById("btnEditar" + i);
    eBtnEditar.addEventListener("click", () => {
      let sBtn = "<button type='button' id='btnEditar' value='" + i + "'>Editar</button>"
      eSBtnAccion.innerHTML = sBtn

      let eBtnEditarUp = document.getElementById("btnEditar");
      console.log(eBtnEditarUp)
      eBtnEditarUp.addEventListener('click', () => modificar(listadoNuevo))


      eNombre.value = element.nombre;
      eCorreo.value = element.correo;
      eContrasena.value = element.contrasena;
      eTelefono.value = element.telefono;
      eEdad.value = element.edad;
      eFecha.value = element.fecha;
      eGenero.value = element.genero;
      eAceptar.value = element.aceptar;
    })
//eliminar
    var eBtnEliminar = document.getElementById("btnEliminar" + i);
    eBtnEliminar.addEventListener("click", () => {
      let sBtn = "<button type='button' id='btnEliminar' value='" + i + "'>Eliminar</button>"
      eSBtnAccion.innerHTML = sBtn

      let eBtnEliminarUp = document.getElementById("btnEliminar");
      console.log(eBtnEliminarUp)
      eBtnEliminarUp.addEventListener('click', () => eliminar(listadoNuevo))


      eNombre.value = element.nombre;
      eCorreo.value = element.correo;
      eContrasena.value = element.contrasena;
      eTelefono.value = element.telefono;
      eEdad.value = element.edad;
      eFecha.value = element.fecha;
      eGeneros.value = element.genero;
      eAceptar.value = element.aceptar;
    })
  }
}
//cambia el contraste
var handleContraste = ()=>{
  let btn = document.getElementById("btnContraste");
  let estado = btn.value;
  console.log(estado)
  if (estado == "o"){
      btn.value ="c";
      let elements = document.getElementsByClassName("oscuro");
      let element = document.getElementsByClassName("navbar-dark")
      console.log(elements);
      console.log(elements[0]);
      elements[0].classList.add("claro");
      element[0].classList.add("navbar-light")
      elements[0].classList.remove("oscuro");
      element[0].classList.remove("navbar-dark");

  }else if(estado == "c"){
      btn.value = "o";
      let elements = document.getElementsByClassName("claro");
      let element = document.getElementsByClassName("navbar-light")
      console.log(elements);
      console.log(elements[0]);
      elements[0].classList.add("oscuro");
      element[0].classList.add("navbar-dark")
      elements[0].classList.remove("claro");
      element[0].classList.remove("navbar-light");

  }
}
//cambia el tamaño de fuente
var handleFuente = ()=>{
  let btn = document.getElementById("btnFuente");
  let estado = btn.value;
  if (estado == "0"){
      btn.value = "1"
      let elements = document.getElementsByClassName("small");
      const largo = elements.length;
      for (let i = 0; i < largo; i++) {
          const element = elements[0];
          element.classList.add("medium")
          element.classList.remove("small")
      }
  }else if(estado == "1"){
      btn.value = "2"

      let elements = document.getElementsByClassName("medium");
      const largo = elements.length;
      console.log(elements);
      for (let i = 0; i < largo; i++) {
          const element = elements[0];
          element.classList.add("large")
          element.classList.remove("medium")
      }
  }else if(estado == "2"){
      btn.value = "0"
      let elements = document.getElementsByClassName("large");
      const largo = elements.length;
      for (let i = 0; i < largo; i++) {
          const element = elements[0];
          element.classList.add("small")
          element.classList.remove("large")
      }
  }
}
//modificar el elemento
var modificar = (listadoNuevo) => {
  console.log("loooog")
  let eNombre = document.getElementById("nombre");
  let eCorreo = document.getElementById("correo");
  let eContrasena = document.getElementById("contrasena");
  let eTelefono = document.getElementById("telefono");
  let eEdad = document.getElementById("edad");
  let eFecha = document.getElementById("fecha");
  let eAceptar = document.getElementById("aceptar");
  let eGenero = document.getElementById("genero");
  let eBtnEditarUp = document.getElementById("btnEditar");

  console.log("Editando...");
  let nombre = eNombre.value;
  let correo = eCorreo.value;
  let contrasena = eContrasena.value;
  let telefono = eTelefono.value;
  let edad = eEdad.value;
  let fecha = eFecha.value;
  let aceptar = eAceptar.value;
  let genero = eGenero.value;
  let indice = eBtnEditarUp.value;
  console.log(nombre);
  console.log(correo);
  console.log(contrasena);
  console.log(telefono);
  console.log(edad);
  console.log(fecha);
  console.log(aceptar);
  console.log(genero)
  console.log(indice);
  listadoNuevo[indice].nombre = nombre;
  listadoNuevo[indice].correo = correo;
  listadoNuevo[indice].contrasena = contrasena;
  listadoNuevo[indice].telefono = telefono;
  listadoNuevo[indice].edad = edad;
  listadoNuevo[indice].fecha = fecha;
  listadoNuevo[indice].aceptar = aceptar;
  localStorage.setItem('alumnos', JSON.stringify(listadoNuevo))
  cargarTabla(listadoNuevo);
}
//eliminar
var eliminar = (listadoNuevo) => {
  let eBtnEliminarUp = document.getElementById("btnEliminar");
  let indice = eBtnEliminarUp.value;
  let lista = listadoNuevo.filter((p) => p.id != indice)
  let listaFinal = lista.map((p, index) => { return { ...p, 'id': index } })

  localStorage.setItem('alumnos', JSON.stringify(listaFinal))
  cargarTabla(listaFinal)
}
//registrar
var registrar = () => {
  let eNombre = document.getElementById("nombre");
  let eCorreo = document.getElementById("correo");
  let eContrasena = document.getElementById("contrasena");
  let eTelefono = document.getElementById("telefono");
  let eEdad = document.getElementById("edad");
  let eFecha = document.getElementById("fecha");
  let eGenero = document.getElementById("genero");
  let eAceptar = document.getElementById("aceptar");

  let nombre = eNombre.value;
  let correo = eCorreo.value;
  let contrasena = eContrasena.value;
  let telefono = eTelefono.value;
  let edad = eEdad.value;
  let fecha = eFecha.value;
  let genero = eGenero
  let aceptar = eAceptar.value;
  console.log(nombre);
  console.log(correo);
  console.log(contrasena);
  console.log(telefono);
  console.log(edad);
  console.log(fecha);
  console.log(genero)
  console.log(aceptar);

  let listadoAntiguoStr = localStorage.getItem("alumnos");
  let listaAntiguo = JSON.parse(listadoAntiguoStr);
  console.log(listaAntiguo)
  if (listaAntiguo == null) {
    let persona = { "id": 0, "nombre":nombre ,"correo":correo,"contrasena":contrasena,"telefono":telefono, "edad":edad, "fecha":fecha, "genero":genero,"aceptar":aceptar };
    var listadoNuevo = [persona]
  } else {
    let persona = { "id": listaAntiguo.length, "nombre":nombre,"correo": correo,"contrasena":contrasena,"telefono":telefono,"edad":edad,"fecha":fecha,"genero":genero ,"aceptar":aceptar };
    var listadoNuevo = [...listaAntiguo, persona]
  }
  console.log(listadoNuevo)
  localStorage.setItem("alumnos", JSON.stringify(listadoNuevo));
  //Tabla
  cargarTabla(listadoNuevo)
}

var obtenerDatos = () => {
  let listadoAntiguoStr = localStorage.getItem("alumnos");
  let listaAntiguo = JSON.parse(listadoAntiguoStr);
  cargarTabla(listaAntiguo)
}

document.getElementById("btn").addEventListener("click", registrar)
addEventListener('load', obtenerDatos)
document.getElementById("btnContraste").addEventListener("click", handleContraste)
document.getElementById("btnFuente").addEventListener("click",handleFuente);
