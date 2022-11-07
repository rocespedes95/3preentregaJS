
let carrito = []; 

let boton_compra = document.querySelectorAll(".botonCompra");


for(let boton of boton_compra){

    boton.addEventListener("click", agregar_a_carrito);

}
function agregar_a_carrito (e){
    
    let hijo = e.target;
    let padre = hijo.parentNode;
    let abuelo = padre.parentNode;
     
   let nombre_producto = abuelo.querySelector("h4").textContent;
   let precio_producto = abuelo.querySelector("li").textContent;
   let img_producto = abuelo.querySelector("img").src;
   
   let producto = {
    nombre: nombre_producto,
    precio: precio_producto,
    img : img_producto,
    cantidad : 1
   }
    carrito.push(producto);

    let carrito_JSON = JSON.stringify(carrito);

    localStorage.setItem("carrito_usuario_uno", carrito_JSON);

    let recuperando_carrito = localStorage.getItem("carrito");

    carrito_convertido = JSON.parse(recuperando_carrito); 
    
    
    mostrar_carrito(producto);
}

function mostrar_carrito (producto){
    let fila = document.createElement("tr");
    
    fila.innerHTML = `<td>${producto.nombre}</td>
                      <td>${producto.precio}</td>
                      <td>${producto.cantidad}</td>
                      <td><button type="button" class="btn btn-danger borrar_elemento">Borrar Articulo</button>`

    let tabla =  document.getElementById("tablebody");
    tabla.append(fila);

    let boton_borrar = document.querySelectorAll(".borrar_elemento");

    for (let boton of boton_borrar){
        boton.addEventListener("click" , borrar_producto);
    }
}

function borrar_producto (e){
    let abuelo = e.target.parentNode.parentNode;

        abuelo.remove();
}


