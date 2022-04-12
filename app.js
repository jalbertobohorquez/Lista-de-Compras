// Variables Globlales
const formularioUI = document.getElementById('formulario');
const ListadeComprasUI = document.getElementById('ListadeCompras');
let arrayListadeCompras = [];
// Funciones
const CrearItem = (producto, cantidad) => {
    let item = {
        producto: producto,
        cantidad: cantidad,
        estado: false
    }
    arrayListadeCompras.push(item);
    return item;
}
const GuardarDB = () => {
    localStorage.setItem('compras', JSON.stringify(arrayListadeCompras));
}
//EventListener
formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let productoUI = document.getElementById('producto').value;
    let cantidadUI = document.getElementById('cantidad').value;
    console.log(cantidadUI, productoUI);
    if(cantidadUI=="" || productoUI==""){
        alert("Debe rellenar todos los campos");
    }else{
        CrearItem(productoUI, cantidadUI);
        GuardarDB();
    }
    
    formularioUI.reset();
});