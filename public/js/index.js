// Funciones

// Este no funciona, async / await por algun motivo no anda en el navegador
// const getTodayNews = async () => {
//   const response = await fetch('http://localhost:3000/noticias/1');
//   const data = response.json();
//   return data;
// };

const getTodayNews = () => {
  // fetch('http://localhost:3000/noticias/1')
  //   .then((response => response.json()))
  //   .then(data => {
  //     // poner datos de la API en mi frontend
  //     // { titulo, descripcion, imagen, ... }
  //     document.getElementById('today-new-title').innerText = data.titulo;
  //     document.getElementById('today-new-p').innerText = data.descripcion;
  //     document.getElementById('today-new-image').src = data.imagen;
  //   })
  //   .catch(err => {
  //     document.getElementById('today-new-title').innerText = 'La API de Escritores de Portada está no funciona. Lo sentimos, intenta más tarde.'
  //     console.log(err);
  //   });

  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      // poner datos de la API en mi frontend
      // { titulo, descripcion, imagen, ... }
      const data = JSON.parse(this.responseText);
      document.getElementById('today-new-title').innerText = data.titulo;
      document.getElementById('today-new-p').innerText = data.descripcion;
      document.getElementById('today-new-image').src = data.imagen;
    } else {
      document.getElementById('today-new-title').innerText = 'La API de Escritores de Portada está no funciona. Lo sentimos, intenta más tarde.'
    }
  };
  xhttp.open("POST", "http://localhost:3000/noticias/1", true);
  xhttp.send();
}

const dayToString = (day) => {
  switch (day) {
    case 0: return 'Domingo';
    case 1: return 'Lunes';
    case 2: return 'Martes';
    case 3: return 'Miércoles';
    case 4: return 'Jueves';
    case 5: return 'Viernes';
    case 6: return 'Sábado';
  }
};

const monthToString = (month) => {
  switch(month) {
    case 0: return 'Enero';
    case 1: return 'Febrero';
    case 2: return 'Marzo';
    case 3: return 'Abril';
    case 4: return 'Mayo';
    case 5: return 'Junio';
    case 6: return 'Julio';
    case 7: return 'Agosto';
    case 8: return 'Septiembre';
    case 9: return 'Octubre';
    case 10: return 'Noviembre';
    case 11: return 'Diciembre';
  }
}

// Fecha de hoy
const date = new Date();
const split = date.toString().split(" "); // [Sun, May, 09, ...]
const today = split[2]; // 09

const dayNumber = date.getDay(); // 5
const dayName = dayToString(dayNumber); // viernes
const monthNumber = date.getMonth(); // 2
const monthName = monthToString(monthNumber); // marzo
const year = date.getFullYear(); // 2021

document.getElementById('today-date').innerText = `${dayName} ${today} de ${monthName} de ${year}`;

// Noticia de hoy
getTodayNews();

