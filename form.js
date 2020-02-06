const fs = require('fs');
const btnGuardar = document.getElementById('btn-guardar');
    
    const txtidentidad = document.getElementById('identidad');
    const txtprimer_nombre = document.getElementById('primernombre');
    const txtapellido = document.getElementById('apellido');
    const txtedad = document.getElementById('edad');
    const txttelefono = document.getElementById('telefono');

    btnGuardar.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Mostrando mensajes en la consola');
        console.log(txtidentidad.value);
        fs.open("./Matriculaavanzada.csv", 'a' , function(err, archivo){
            if (err) {
                console.log("Error al abrir el archivo");
                console.log(error);
                return;
            }

            const linea = `\n ${txtidentidad.value}, ${txtprimer_nombre.value}, ${txtapellido.value}, ${txtedad.value}, ${txttelefono.value}`;

            fs.write(archivo, linea, function(err, written, string){
                if (err){
                    console.log ('Error al escribir los datos');
                    console.log(err);
                }
                    console.log('Se escribieron los datos exitosamente');
            })
        });
    });
