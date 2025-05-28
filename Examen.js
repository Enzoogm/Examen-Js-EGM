// pregunta: 1. ¿Cuál es la diferencia entre let, const y var al declarar una variable en JavaScript?
// let se puede reescribir, const no se puede reescribir y var es viejo dijiste y casi ni se usa ya

// pregunta: 2. ¿Qué diferencias hay entre un objeto y un arreglo en JavaScript? ¿Cuándo conviene usar uno u otro?
// el arreglo guarda cosas en orden tipo lista y el objeto guarda datos con nombre y valor, uso arreglo paa listas y objeto para guardar info mas detallada de algo

// pregunta: 3. ¿Qué devuelve el método .filter() y cómo se diferencia de .map() al aplicarse sobre un array?
// filter devuelve los q cumplen una condicion y map transforma todos los elementos del array en otra cosa

// pregunta: 4. ¿Qué método de arrays se utiliza para agregar un elemento al principio de un arreglo(array)?
//Me aniquilaste crack pero creo que era oneShift o algo asi era

// Ejercicio 1

const alumnos = [
  { nombre: "Ana", edad: 20, nota: 8 },
  { nombre: "Luis", edad: 17, nota: 5 },
  { nombre: "Carla", edad: 22, nota: 9 },
  { nombre: "Nombre de prueba" },
];
console.log("___________________________________________"); //le pongo esto pq me daba tock que quede todo junto

alumnos.forEach((alumnos) => {
  if (alumnos.nota >= 6) {
    console.log(alumnos.nombre, "Está aprobado");
  } else {
    console.log(alumnos.nombre, "Está desaprobado");
  }
});

// function obtenerPromedio(alumnos) {}

// console.log("El promedio es:", obtenerPromedio);

// Ejercicio 2

console.log("___________________________________________"); //le pongo esto pq me daba tock que quede todo junto

alumnos.filter((item) => {
  if (alumnos.edad >= 18) {
    console.log(item.nombre, "Es mayor de edad");
  } else {
    console.log(item.nombre, "Es menor de edad");
  }
});

console.log("___________________________________________"); //le pongo esto pq me daba tock que quede todo junto

alumnos.map((item) =>
  console.log("Nombre en mayus :", item.nombre.toUpperCase())
);

//Ejercicio 3

// const contenedor = document.getElementById("lista");

const lista = document.createElement("ul");

alumnos.forEach((alumnos) => {
  const item = document.createElement("li");
  item.textContent = alumnos.nombre;
  lista.appendChild(item);
});

contenedor.appendChild(lista);
