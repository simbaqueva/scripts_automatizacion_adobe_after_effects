// Script para configurar After Effects para una previsualización a máxima calidad

// Verificar si hay un proyecto abierto
if (app.project) {
    // Iniciar una acción de Undo (deshacer)
    app.beginUndoGroup("Configurar Previsualización a Máxima Calidad");

    // Obtener la ventana de composición activa
    var comp = app.project.activeItem;
    
    if (comp instanceof CompItem) {
        // Configurar la resolución de la previsualización a completa (Full)
        comp.resolutionFactor = [1, 1];

        // Añadir una capa de texto que indique la configuración de máxima calidad
        var textLayer = comp.layers.addText("Previsualización en Máxima Calidad");
        textLayer.transform.position.setValue([comp.width / 2, comp.height - 50]);
        var textDoc = textLayer.property("ADBE Text Properties").property("ADBE Text Document").value;
        textDoc.fontSize = 30;
        textDoc.fillColor = [0, 1, 0]; // Verde
        textLayer.property("ADBE Text Properties").property("ADBE Text Document").setValue(textDoc);

        // Establecer la calidad de renderizado de todas las capas a Best
        for (var i = 1; i <= comp.numLayers; i++) {
            var layer = comp.layer(i);
            layer.quality = LayerQuality.BEST; // Configura la calidad de la capa a BEST
            layer.motionBlur = true; // Activa el desenfoque de movimiento si está disponible
        }

        // Opcional: Ajustar la calidad de visualización del viewer a Alta
        var viewer = app.activeViewer; // Obtener el viewer activo
        if (viewer && viewer.type == ViewerType.VIEWER_COMPOSITION) {
            viewer.views[0].displayQuality = Viewer.QUALITY_HIGH; // Establecer la calidad de visualización a alta
        }

        // Mostrar una notificación al usuario
        alert("Configuración de previsualización a máxima calidad completada. El audio está activo.");

    } else {
        alert("Por favor, seleccione una composición activa.");
    }
    
    // Finalizar la acción de Undo
    app.endUndoGroup();
} else {
    alert("No hay ningún proyecto abierto en After Effects.");
}
