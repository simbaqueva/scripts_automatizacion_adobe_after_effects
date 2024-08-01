# Aplicar Efecto de Bandera Ondeante en After Effects

Este script para Adobe After Effects aplica un efecto de bandera ondeante a la capa actualmente seleccionada en la composición activa. Utiliza el efecto "Wave Warp" para lograr el movimiento ondulante.

## Instrucciones de Uso

1. **Abrir After Effects**

   Abre Adobe After Effects y carga el proyecto en el que deseas trabajar.

2. **Seleccionar una Capa**

   Asegúrate de que tienes una capa seleccionada en la composición activa. El script aplicará el efecto a la primera capa seleccionada.

3. **Ejecutar el Script**

   Ejecuta el script en After Effects. Puedes hacerlo copiando y pegando el código en el panel de script de After Effects y ejecutándolo.

## Funcionalidad

1. **Obtener la Composición y Capa Seleccionada**

   El script obtiene la composición activa y la capa actualmente seleccionada. Si no hay una composición activa o ninguna capa seleccionada, muestra un mensaje de error.

2. **Aplicar el Efecto "Wave Warp"**

   Si hay una capa seleccionada, el script aplica el efecto "Wave Warp" a la capa y configura sus propiedades:

   - Tipo de Onda: Senoidal
   - Altura de la Onda: 15
   - Ancho de la Onda: 100
   - Dirección: 0
   - Velocidad de la Onda: 1

3. **Aplicar Expresión a la Altura de la Onda**

   El script intenta aplicar una expresión a la propiedad de altura de la onda para crear un efecto de oscilación:

   ```javascript
   'freq = 2;  // Frecuencia de la onda\n' +
   'amp = 20;  // Amplitud de la onda\n' +
   'phase = time * freq * Math.PI * 2;\n' +
   'amp * Math.sin(phase);';
Advertencias
Asegúrate de tener una capa seleccionada antes de ejecutar el script.
El script creará un grupo de deshacer, permitiendo deshacer la operación como una sola acción.