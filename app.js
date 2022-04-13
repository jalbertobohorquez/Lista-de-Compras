// Variables Globlales
const formularioUI = document.querySelector('#formulario');
const ListadeComprasUI = document.getElementById('ListadeCompras');
let arrayListadeCompras = [];
// Funciones
const CrearItem = (producto, cantidad, marca) => {
    let item = {
        producto: producto,
        cantidad: cantidad,
        marca: marca,
        estado: false
    }
    arrayListadeCompras.push(item);
    return item;
}
const GuardarDB = () => {
    localStorage.setItem('compras', JSON.stringify(arrayListadeCompras));
    PintarDB();
}

const PintarDB = () => {
    ListadeComprasUI.innerHTML = '';
    arrayListadeCompras = JSON.parse(localStorage.getItem('compras'));
    if(arrayListadeCompras === null){
        arrayListadeCompras = [];
    }else{
        arrayListadeCompras.forEach(Element => {
            ListadeComprasUI.innerHTML += `<div class="alert alert-primary" role="alert">
                <span class="material-icons float-lg-start me-2">filter_vintage</span>
                Producto: <b>${Element.producto}</b> - Marca: <b>${Element.marca}</b> - Cantidad: <b>${Element.cantidad}</b> - Estado: <b>${Element.estado}</b>
                <span class="float-end"><span class="material-icons">done</span>
                <span class="material-icons">delete</span></span></div>`;
        })
    }
}
//EventListener
formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let productoUI = document.getElementById('producto').value;
    let cantidadUI = document.getElementById('cantidad').value;
    let marcaUI= document.getElementById('marca').value;
    
    if(cantidadUI=="" || productoUI==""){
        alert("Debe rellenar al menos los campos de Producto y Cantidad");
    }else{
        if(marcaUI==""){
            marcaUI="No especificada";
        }
        CrearItem(productoUI, cantidadUI, marcaUI);
        GuardarDB();
    }
    
    formularioUI.reset();
});

document.addEventListener('DOMContentLoaded', PintarDB);

ListadeComprasUI.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(e.path[2].childNodes[3].innerHTML, e.path[2].childNodes[5].innerHTML,e.path[2].childNodes[7].innerHTML);
    if(e.target.innerHTML === 'done'){

    }
})