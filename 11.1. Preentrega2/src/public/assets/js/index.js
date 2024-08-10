const socket = io();

// Manejar el envío del formulario para agregar productos
document.querySelector('#productForm').addEventListener('submit', event => {
    event.preventDefault(); // Evitar el comportamiento por defecto del formulario

    const productTitle = document.querySelector('#productTitle').value;

    fetch('/api/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: productTitle })
    })
    .then(response => response.json())
    .then(result => {
        console.log(result); // Manejar el resultado del servidor
        document.querySelector('#productForm').reset(); // Limpiar el formulario
        // Solicitar la lista actualizada de productos
        socket.emit('requestProducts');
    })
    .catch(error => console.error('Error:', error));
});

// Escuchar actualizaciones de productos
socket.on('productosNuevos', data => {
    let log = document.querySelector('#productosNuevos');
    let productsHTML = '';

    data.forEach(product => {
        productsHTML += `<div id="fichaProducto">
                            <h3>${product.id}</h3>
                            <p>Precio: ${product.title}</p>
                            <button onclick="deleteProduct(${product.id})">Eliminar</button>
                        </div>`;
    });

    log.innerHTML = productsHTML; // Actualizar el contenido con los productos
});

// Función para eliminar un producto
function deleteProduct(productId) {
    fetch(`/api/products/${productId}`, {
        method: 'DELETE'
    })
    .then(response => response.text())
    .then(result => {
        console.log(result); // Manejar el resultado del servidor
        // Solicitar la lista actualizada de productos
        socket.emit('requestProducts');
    })
    .catch(error => console.error('Error:', error));
}
