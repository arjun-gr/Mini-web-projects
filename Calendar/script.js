let monthElem = document.querySelector(".month")
let fullDate = document.querySelector('.fullDate')
let days = document.querySelector('.days_container')

let date = new Date();
let currMonth = date.getMonth();
let firstDate = new Date(date.getFullYear(), currMonth, 1).getDay()-1;
let lastDate = new Date(date.getFullYear(), currMonth +1,0).getDate();

console.log(lastDate);

const months = [
  'Jan',
  'Feb',
  'March',
  'April',
  'May',
  'June',
  'July',
  'Aug',
  'Sept',
  'Oct',
  'Nov',
  'Dec'
]

monthElem.innerText = months[currMonth]

fullDate.innerText = new Date().toDateString();

let day = '';

for(let i = firstDate; i > 0; i--){
  day += `<div class='empty'><div>`
}

for(let i = 1; i <=lastDate; i++){
  if(i === new Date().getDate()){
    day += `<div class='today'> ${i} </div>`
  }
  else{
    day += `<div> ${i} </div>`
  }
}

days.innerHTML = day