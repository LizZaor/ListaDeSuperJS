let elemento;
let contenido;
let contador=3;

alert("Favor de indicar el nombre del producto a agregar! :)");

const BtnAdd = document.querySelector('.btn-add');
const BtnDelete = document.querySelector('.btn-delete');
const BtnAgregar = document.querySelector('#btn-agregar');
const conteo = document.querySelector('.conteo');
const botones = document.querySelector('.botones');
BtnAdd.addEventListener('click', Añadir);
BtnAgregar.addEventListener('click', Agregar);
BtnDelete.addEventListener('click', Borrar);

/*Funciones*/
function validarInput() {//Validar que tenga caracteres el input y habilita el boton
    document.getElementById("btn-agregar").disabled = !document.getElementById("producto").value.length;
  }
function Agregar(){//Agregar una li a la lista
    contador++;
    conteo.textContent=+contador;
    //Obtener el text del input
    let Productoinput=document.getElementById("producto");
    let ProductoCapturado=Productoinput.value;
    //Crear el elemento
    elemento= document.createElement("li");
        //acceder al ul(padre)
        let padre=document.getElementById("lista");
        //Agregar el elemento
        padre.appendChild(elemento);
        elemento.innerHTML=ProductoCapturado+
        "<form class='botones'><div class='form-row'> <div class='col'><a href='#' class='btn btn-danger btn-lg btn-delete' role='button'>⚠️</a></div><div class='col'><a href='#' class='btn btn-success btn-lg btn-add' role='button'>✔</a></div></div></form>";
    //bootstrap
    elemento.classList.add('list-group-item');
    elemento.classList.add('d-flex');
    elemento.classList.add('justify-content-between');
    elemento.classList.add('lh-condensed');
    elemento.classList.add('my-0');
  }

function Añadir(){
    ChangeText(botones, 'DONE', 'green');
}
function ChangeText(item, text, color){
    item.textContent = text;
    if (color!== null){
        item.style.color = color;
    }
}
function RemoveHint(){
    let elemento = document.querySelector('.botones');
    if (elemento !== null)
        elemento.remove();
}
function Borrar(){
    for (let i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eliminar)
	}
}
Borrar();
function eliminar(){
    contador--;
    conteo.textContent=+contador;
    this.parentNode.removeChild(this);
    console.log(this);
}
