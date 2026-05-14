# 🚀 Big O - Complejidad Algorítmica Interactiva

Una visualización interactiva educativa para aprender sobre complejidad algorítmica y notación Big O, dirigida a estudiantes de programación.

url: (https://big0example.netlify.app/)

## 📖 Descripción del Proyecto

Este proyecto explica de forma visual e interactiva los conceptos fundamentales de la complejidad algorítmica utilizando la analogía de transportar cajas:

- **O(1) - Complejidad Constante**: Llevar cajas en auto (siempre toma el mismo tiempo)
- **O(n) - Complejidad Lineal**: Llevar cajas caminando (el tiempo crece proporcionalmente)
- **O(n²) - Complejidad Cuadrática**: Comparar cada caja con todas las anteriores (tiempo exponencial)

## 🎯 Objetivos Educativos

- Entender qué es la notación Big O y por qué es importante
- Predecir el tiempo de ejecución de algoritmos sin ejecutarlos
- Identificar la complejidad de diferentes tipos de algoritmos
- Visualizar cómo crece el tiempo de ejecución según el tamaño de entrada

## 📁 Estructura del Proyecto

```
example_sort/
├── big-o-tutorial.html   # Estructura HTML principal
├── styles.css           # Hoja de estilos CSS
├── script.js            # Lógica JavaScript interactiva
└── README.md            # Documentación del proyecto
```

## 🚀 Características

### Interactividad
- **Tooltips informativos**: Haz clic en elementos resaltados para ver explicaciones detalladas
- **Navegación paso a paso**: 5 secciones educativas con barra de progreso
- **Preguntas interactivas**: Test de conocimiento con retroalimentación inmediata
- **Animaciones**: Auto y persona caminando que ilustran los conceptos

### Diseño
- Totalmente responsive (adaptable a móviles y tablets)
- Interfaz moderna con gradientes y animaciones suaves
- Partículas flotantes de fondo para mayor atractivo visual
- Gráfico SVG comparativo de crecimiento de complejidades

### Navegación
- Botones Anterior/Siguiente
- Clic directo en los pasos de la barra de progreso
- Teclado: Flechas ← → para navegar

## 📚 Contenido Educativo

### Paso 1: Introducción
- Pregunta inicial sobre predicción de tiempo de ejecución
- Explicación del concepto de Big O
- Introducción a la analogía de las cajas

### Paso 2: O(1) - Constante
- Ejemplo del auto que lleva todas las cajas en un viaje
- El tiempo no depende de la cantidad de elementos
- Ejemplos en programación: acceso directo a arrays, verificaciones simples

### Paso 3: O(n) - Lineal
- Ejemplo de llevar cajas caminando (un viaje por caja)
- El tiempo crece proporcionalmente con los elementos
- Ejemplos: búsqueda lineal, sumar elementos, encontrar máximo

### Paso 4: O(n²) - Cuadrática
- Condición absurda: comparar cada caja con todas las anteriores
- Bucles anidados y algoritmos ineficientes
- Ejemplos: Bubble Sort, Selection Sort
- Pregunta interactiva de cálculo de tiempo

### Paso 5: Resumen
- Tabla comparativa de las tres complejidades
- Fórmulas matemáticas de cada notación
- Consejos para elegir algoritmos eficientes

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos, animaciones, gradientes, Flexbox, Grid
- **JavaScript (ES6+)**: Interactividad, navegación, tooltips
- **SVG**: Gráfico de comparación de complejidades

## 🎮 Cómo Usar

1. Abre el archivo `big-o-tutorial.html` en cualquier navegador web moderno
2. Navega por los 5 pasos usando los botones o la barra de progreso
3. Haz clic en los elementos resaltados para ver información adicional
4. Responde las preguntas interactivas para reforzar el aprendizaje
5. Usa las flechas del teclado para navegar entre pasos

## 📝 Ejemplo de Código

La pregunta clave que responde este tutorial:

> *"Un algoritmo tarda 1 segundo en ordenar 1000 elementos, ¿tardará 2 segundos en ordenar 2000?"*

**Respuesta**: ¡Depende de la complejidad!
- O(1): 1 segundo (constante)
- O(n): 2 segundos (lineal)
- O(n²): 4 segundos (cuadrático)
- O(n log n): ~2.2 segundos (log-lineal)

## 🎓 Público Objetivo

- Estudiantes de programación y ciencias de la computación
- Personas aprendiendo estructuras de datos y algoritmos
- Educadores que buscan material visual para enseñar Big O
- Desarrolladores que quieren repasar conceptos fundamentales

## 📄 Licencia

Proyecto educativo de código abierto. Libre uso para fines educativos.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para sugerencias de mejora o reporte de errores, por favor crea un issue en el repositorio.

---

**Hecho con ❤️ para la educación en programación**
