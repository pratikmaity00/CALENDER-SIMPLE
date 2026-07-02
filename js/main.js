const dateF = document.getElementById('date');
const dayF = document.getElementById('day');
const yearF = document.getElementById('year');
const monthF = document.querySelector('.cal-head');

cal();

function cal() {
    let current = new Date().toDateString().split(" ");
    
    let [day, month, date, year] = current;
   
    dateF.textContent = date;
    dayF.textContent = day;
    monthF.textContent = month;
    yearF.textContent = year;

    setTimeout(cal, 86400000);
}