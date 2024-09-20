// Capturar el envío del formulario de test
document.getElementById('testForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const respuesta1 = document.querySelector('input[name="pregunta1"]:checked').value;
    const respuesta2 = document.querySelector('input[name="pregunta2"]:checked').value;

    // Simulación de resultados del test
    let resultado = "Resultado del Test: \n";
    resultado += `Nombre: ${nombre}\nEdad: ${edad}\n`;
    resultado += `Pregunta 1: ${respuesta1}\nPregunta 2: ${respuesta2}\n`;

    alert(resultado);  // Puedes reemplazar esto con lógica para enviar a un servidor
});
