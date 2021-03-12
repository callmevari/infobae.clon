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

const date = new Date();
const dayNumber = date.getDay(); // 5
const dayName = dayToString(dayNumber); // viernes
const monthNumber = date.getMonth(); // 2
const monthName = monthToString(monthNumber); // marzo
const year = date.getFullYear(); // 2021

document.getElementById('today-date').innerText = `${dayName} ${dayNumber} de ${monthName} de ${year}`;