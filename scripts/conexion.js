const axios=require('axios');
const URL="https://web-production-69664.up.railway.app";

document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los datos del formulario
    const username = document.querySelector('input[placeholder="Nombre de Usuario"]').value;
    const password = document.querySelector('input[placeholder="Contraseña"]').value;

    // Validar que los campos no estén vacíos
    if (!username || !password) {
        alert('Por favor, complete todos los campos');
        return;
    }

    try {
        // Hacer la petición a la API para verificar el login
        const response = await axios.post(URL, {
            username: username,
            password: password
        });

        // Verificar si las credenciales son correctas (depende de la estructura de tu API)
        if (response.data.success) {
            // Si el login es exitoso, redirigir o hacer lo que necesites
            alert('Login exitoso');
            window.location.href = 'ruta-despues-de-login.html'; // Redirigir a la página deseada
        } else {
            // Si el login falla, mostrar un mensaje de error
            alert('Credenciales incorrectas');
        }
    } catch (error) {
        // Manejar errores de la solicitud
        console.error(error);
        alert('Error al iniciar sesión');
    }
});
