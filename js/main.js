const dateF = document.getElementById('date');
const dayF = document.getElementById('day');
const yearF = document.getElementById('year');
const monthF = document.querySelector('.cal-head');



function cal() {
    let current = new Date().toDateString().split(" "); // "Fri Jul 03 2026"
    
    let [day, month, date, year] = current;
   
    dateF.textContent = date;
    dayF.textContent = day;
    monthF.textContent = month;
    yearF.textContent = year;  
}

cal();
setInterval(cal, 86400000);