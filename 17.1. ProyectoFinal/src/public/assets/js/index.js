// client.js
const socket = io();

// Solicitar productos al cargar la página
socket.emit('requestProducts', { limit: 10, page: 1 });

// Escuchar actualizaciones de productos
socket.on('productosNuevos', data => {
    let log = document.querySelector('#productosNuevos');
    let productsHTML = '';

    data.forEach(product => {
        productsHTML += `<div id="fichaProducto">
                            <h3>${product._id}</h3>
                            <p>Nombre producto: ${product.title}</p>
                            <p>Precio producto: ${product.precio}</p>
                            <button onclick="deleteProduct('${product._id}')">Eliminar</button>
                            <button onClick="">Agregar al carrito</button>
                        </div>`;
    });

    log.innerHTML = productsHTML;
});

// Función para eliminar un producto
function deleteProduct(productId) {
    fetch(`/api/products/${productId}`, {
        method: 'DELETE'
    })
    .then(response => response.text())
    .then(result => {
        console.log(result);
        socket.emit('requestProducts'); // Solicitar la lista actualizada de productos
    })
    .catch(error => console.error('Error:', error));
}
