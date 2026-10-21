// Repositorio de Juegos por Temas y Grados
const repositorioJuegos = {
    "grado10_db": {
        titulo: "Bases de Datos y Funciones en Excel (Grado 10)",
        preguntas: [
            { 
                q: "En una base de datos tabular en Excel, ¿qué representa una Columna?", 
                options: ["Un registro completo", "Un campo o atributo", "Una función matemática", "Un filtro de datos"], 
                correct: 1 
            },
            { 
                q: "¿Cuál es la regla número uno para estructurar una base de datos limpia en Excel?", 
                options: ["Combinar celdas en los encabezados", "Dejar filas en blanco para separar datos", "No dejar filas ni columnas en blanco dentro del rango", "Usar colores diferentes en cada celda"], 
                correct: 2 
            },
            { 
                q: "¿Para qué sirve principalmente la herramienta 'Filtro' en Excel?", 
                options: ["Para borrar permanentemente filas duplicadas", "Para ocultar temporalmente datos que no cumplen un criterio", "Para calcular automáticamente sumas complejas", "Para cambiar el tipo de fuente de la tabla"], 
                correct: 1 
            },
            { 
                q: "Si necesitas ordenar una lista de estudiantes por Grado y luego por Apellido, ¿qué opción debes usar?", 
                options: ["Orden personalizado", "Autosuma", "Filtro avanzado", "Formato condicional"], 
                correct: 0 
            },
            { 
                q: "¿Qué hace exactamente la función =BUSCARV()?", 
                options: ["Busca un valor en la última columna", "Busca un valor en la primera columna de una tabla y devuelve un valor en la misma fila", "Busca errores de sintaxis", "Busca archivos en el PC"], 
                correct: 1 
            }
        ]
    },
    "grado10_formulas": {
        titulo: "Fórmulas Avanzadas y Lógicas en Excel (Grado 10)",
        preguntas: [
            { 
                q: "¿Qué función evalúa múltiples condiciones y devuelve VERDADERO si todas se cumplen?", 
                options: ["=O()", "=SI()", "=Y()", "=NO()"], 
                correct: 2 
            },
            { 
                q: "¿Qué función de búsqueda moderna reemplaza las limitaciones de BUSCARV permitiendo buscar a cualquier dirección?", 
                options: ["=BUSCARX()", "=COINCIDIR()", "=INDICE()", "=BUSCARH()"], 
                correct: 0 
            }
        ]
    }
};