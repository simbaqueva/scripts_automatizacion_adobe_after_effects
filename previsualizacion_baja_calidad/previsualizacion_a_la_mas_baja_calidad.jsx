// Script para configurar After Effects para una previsualización rápida a mínima calidad

// Verificar si hay un proyecto abierto
if (app.project) {
    // Iniciar una acción de Undo (deshacer)
    app.beginUndoGroup("Configurar Previsualización a Mínima Calidad");

    // Obtener la ventana de composición activa
    var comp = app.project.activeItem;
    
    if (comp instanceof CompItem) {
        // Configurar la resolución de la previsualización a 1/4
        comp.resolutionFactor = [4, 4];

        // Añadir una capa de texto que indique la configuración de baja calidad
        var textLayer = comp.layers.addText("Previsualización en Baja Calidad");
        textLayer.transform.position.setValue([comp.width / 2, comp.height - 50]);
        var textDoc = textLayer.property("ADBE Text Properties").property("ADBE Text Document").value;
        textDoc.fontSize = 30;
        textDoc.fillColor = [1, 0, 0]; // Rojo
        textLayer.property("ADBE Text Properties").property("ADBE Text Document").setValue(textDoc);

        // Reducir la calidad de renderizado para todas las capas
        for (var i = 1; i <= comp.numLayers; i++) {
            var layer = comp.layer(i);
            layer.quality = LayerQuality.DRAFT; // Configura la calidad de la capa a DRAFT
            layer.motionBlur = false; // Desactiva el desenfoque de movimiento
        }

        // Mostrar una notificación al usuario
        alert("Configuración de previsualización a mínima calidad completada. Recuerda que el audio está activo.");

    } else {
        alert("Por favor, seleccione una composición activa.");
    }
    
    // Finalizar la acción de Undo
    app.endUndoGroup();
} else {
    alert("No hay ningún proyecto abierto en After Effects.");
}
