document.getElementById("select-servicio").addEventListener("change",(event)=>{
    const selectDetalle= document.getElementById("select-detalle");
    const servicioSeleccionado= event.target.value;
    selectDetalle.innerHTML=" ";
    
    // Agregar opción por defecto
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = 'Selecciona un Detalle';
    selectDetalle.appendChild(defaultOption);
    
    //definir opciones dependiendo el servicio
    let opciones=[];
    if(servicioSeleccionado==="1"){
        opciones=[
            {value: "1", text:"Anti-stress"},
            {value: "2", text:"Descontracturantes"},
            {value: "3", text:"Masajes con piedras calientes"},
            {value: "4", text:"Circulatorios"}
        ];
    }else if(servicioSeleccionado==="2"){
        opciones=[
            {value: "1", text:"Lifting de pestaña"},
            {value: "2", text:"Depilación facial"},
            {value: "3", text:"Belleza de manos y pies"}
        ];
    }else if(servicioSeleccionado==="3"){
        opciones=[
            {value: "1", text:"Punta de Diamante: Microexfoliación."},
            {value: "2", text:"Limpieza profunda + Hidratación"},
            {value: "3", text:"Crio frecuencia facial"}
        ];
    }else if(servicioSeleccionado==="4"){
        opciones=[
            {value: "1", text:"VelaSlim"},
            {value: "2", text:"DermoHealth"},
            {value: "3", text:"Criofrecuencia"},
            {value: "4", text:"Ultracavitación"}
        ];
    }

    //agrego al segundo select

    opciones.forEach((option)=>{
        const nuevaOpcion=document.createElement("option");
        nuevaOpcion.value=option.value;
        nuevaOpcion.text=option.text;
        selectDetalle.appendChild(nuevaOpcion);
    });
});

document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Obtener los datos del formulario
    const fecha = document.querySelector('input[type="date"]').value;
    const hora = document.querySelector('input[type="time"]').value;
    const servicio = document.querySelector('#select-servicio').value;
    const detalle = document.querySelector('#select-detalle').value;

    // Validar que todos los campos estén completos
    if (!fecha || !hora || !servicio || !detalle) {
        alert('Por favor, complete todos los campos');
        return;
    }

    try {
        // Hacer la petición a la API para reservar el turno
        const response = await axios.post('https://web-production-69664.up.railway.app/turnos/', {
            fecha: fecha,
            hora: hora,
            servicio: servicio,
            detalle: detalle
        });

        // Verificar si la reserva fue exitosa
        if (response.data.success) {
            alert('Turno reservado exitosamente');
            window.location.href = 'ruta-despues-de-reservar.html'; // Redirigir a la página deseada
        } else {
            alert('Error al reservar el turno');
        }
    } catch (error) {
        // Manejar errores de la solicitud
        console.error(error);
        alert('Error al reservar el turno');
    }
});