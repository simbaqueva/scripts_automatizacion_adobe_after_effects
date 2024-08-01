{
    // Obtener la composición activa
    var comp = app.project.activeItem;

    if (comp && comp instanceof CompItem) {
        // Obtener la capa actualmente seleccionada
        var selectedLayers = comp.selectedLayers;

        if (selectedLayers.length > 0) {
            var layer = selectedLayers[0]; // Tomar la primera capa seleccionada

            // Crear un grupo de deshacer para que se pueda deshacer esta operación como una sola acción
            app.beginUndoGroup("Aplicar Efecto de Bandera Ondeante");

            // Añadir el efecto "Wave Warp"
            var waveWarpEffect = layer.property("ADBE Effect Parade").addProperty("ADBE Wave Warp");

            if (waveWarpEffect) {
                // Mensaje de depuración
                alert("Efecto 'Wave Warp' añadido correctamente.");

                // Configurar las propiedades utilizando índices
                waveWarpEffect.property(1).setValue(1); // 1 = Wave Type (Tipo de Onda) Senoidal

                // Configurar otras propiedades
                waveWarpEffect.property(2).setValue(15); // 2 = Wave Height (Altura de la Onda)
                waveWarpEffect.property(3).setValue(100); // 3 = Wave Width (Ancho de la Onda)
                waveWarpEffect.property(4).setValue(0); // 4 = Direction (Dirección)
                waveWarpEffect.property(5).setValue(1); // 5 = Wave Speed (Velocidad de la Onda)

                // Intentar aplicar la expresión a Wave Height (Altura de la Onda)
                try {
                    waveWarpEffect.property(2).expression = 
                    'freq = 2;  // Frecuencia de la onda\n' +
                    'amp = 20;  // Amplitud de la onda\n' +
                    'phase = time * freq * Math.PI * 2;\n' +
                    'amp * Math.sin(phase);';
                } catch (e) {
                    alert("Error al aplicar la expresión en 'Wave Height': " + e.message);
                }

                // Finalizar el grupo de deshacer
                app.endUndoGroup();

                // Mostrar un mensaje de éxito
                alert("Efecto de bandera ondeante aplicado a la capa seleccionada exitosamente.");
            } else {
                alert("Error: No se pudo añadir el efecto 'Wave Warp' a la capa seleccionada.");
                app.endUndoGroup();
            }
        } else {
            alert("Error: No hay capas seleccionadas en la composición.");
        }
    } else {
        alert("Error: No hay una composición activa.");
    }
}
