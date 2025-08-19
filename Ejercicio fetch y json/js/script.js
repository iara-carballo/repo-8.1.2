

const DATA_URL = "json/data.json"; // URL que contiene los datos de los estudiantes
const container = document.getElementById("container"); // Contenedor donde muestra la información

function showData(dataArray) {
  for (const item of dataArray) {
    container.innerHTML += `<p> ${item.name} ${item.lastname}, ${item.age} años. </p>`;
  }
}

fetch(DATA_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error("Error al cargar el JSON");
    }
    return response.json();
  })
  .then(data => {
    showData(data.students); // Muestro solo el array de estudiantes
  })
  .catch(error => {
    console.error("Error:", error);
  });
