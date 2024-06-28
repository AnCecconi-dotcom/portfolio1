//CLASES
class Producto {
    constructor (nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

//FUNCIONES
function renderizarProductos (productos){
    const contenedorProductos = document.getElementById('contenedorProductos');
    for (const producto of productos){
        //CREAR ELEMENTOS
        const divPadre = document.createElement("div");
        divPadre.className = "col-12 col-sm-3";

        const divCard = document.createElement("div");
        divCard.className = "card m-2";

        const divCardBody = document.createElement("div");
        divCardBody.className = "card-body";

        const h5 = document.createElement("h5");
        h5.className = "card-title";
        h5.innerText = producto.nombre;

        const p = document.createElement("p");
        p.className = "card-text";
        p.innerHTML = `<strong>Precio: </strong> $${producto.precio} - <strong>Stock: </strong> ${producto.stock}`;

        const button = document.createElement("button");
        button.className = "btn btn-grad textWhite";
        button.innerText = "Agregar al carrito";

        console.log(contenedorProductos);

        //INSERTAR ELEMENTOS DINAMICAMENTE
        divCardBody.append(h5, p, button);
        divCard.append(divCardBody);
        divPadre.append(divCard);
        contenedorProductos.append(divPadre);


    }
}


//INICIO DEL PROGRAMA
const listadoProductos = [
    new Producto ("Remera Over", 21500, 35),
    new Producto ("Buzo Over", 45000, 15),
    new Producto ("Jean", 40500, 20),
    new Producto ("Gorra", 12500, 15),
    new Producto ("Hoodie", 55000, 25),

];

renderizarProductos (listadoProductos);