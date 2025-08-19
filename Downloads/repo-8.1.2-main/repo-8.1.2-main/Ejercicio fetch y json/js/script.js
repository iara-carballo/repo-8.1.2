const DATA_URL = "json/data.json"; 
const container = document.getElementById("container");

function showData(dataArray) {
  for (const item of dataArray) {
    container.innerHTML += `<p>${item.name} ${item.lastname}, ${item.age} años</p>`;
  }
}

fetch(DATA_URL)
  .then(response => {
    if (!response.ok) throw new Error("Error al cargar el JSON");
    return response.json();
  })
  .then(data => showData(data.students))
  .catch(error => console.error("Error:", error));
