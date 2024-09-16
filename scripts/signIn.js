document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los datos del formulario
    const username = document.querySelector('input[placeholder="Nombre de Usuario"]').value;
    const email = document.querySelector('input[placeholder="Correo Electronico"]').value;
    const fullName = document.querySelector('input[placeholder="Nombre Completo"]').value;
    
    const password = document.querySelector('input[placeholder="Contraseña"]').value;
    const repeatPassword = document.querySelector('input[placeholder="Repetir Contraseña"]').value;

    // Validación de contraseñas coincidentes
    if (password !== repeatPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    // Validar que los campos no estén vacíos
    if (!username || !email ||   !password || !repeatPassword) {
        alert('Por favor, complete todos los campos');
        return;
    }

    try {
        // Hacer la petición a la API para registrar al usuario
        const response = await axios.post('https://web-production-69664.up.railway.app/user/register', {
            username: username,
            email: email,
            password: password
        });

        // Verificar si el registro fue exitoso
        if (response.data.success) {
            alert('Registro exitoso');
            window.location.href = '../index.html'; // Redirigir a la página deseada
        } else {
            alert('Error en el registro');
        }
    } catch (error) {
        // Manejar errores de la solicitud
        console.error(error);
        alert('Error al registrarse');
    }
});

