const day = document.querySelector('#dte');
console.log(day);
const month = document.querySelector('#mnth');
const year = document.querySelector('#yrs');
const button = document.querySelector('#btn');

// let isValid = false;

const dayOutput = document.querySelector('.purple3');
const monthOutput = document.querySelector('.purple2');
const yearOutput = document.querySelector('.purple1');

const dayError = document.querySelector('.dayError');
const monthError = document.querySelector('.monthError');
const yearError = document.querySelector('.yearError');

const inputRequiredError = 'This Field is Required';
const inputDayError = 'Must Be a Valid Day';
const inputMonthError = 'Must Be a Valid Month';
const inputYearError = 'Must Be a Valid Year';

function checkDay() {
    let value = day.value;
    if(value == ''){
        dayError.innerHTML = inputRequiredError;
        return false;
    } else if(value < 1 || value > 31){
        dayError.innerHTML = inputDayError;
        return false;
    } else{
        dayError.innerHTML = '';
        return true;
    }

}

function checkMonth() {
    let value = month.value;
    if(value == ''){
        monthError.innerHTML = inputRequiredError;
        return false;
    } else if(value < 1 || value > 12){
        monthError.innerHTML = inputMonthError;
        return false;
    } else{
        monthError.innerHTML = '';
        return true;
    }

}

function checkYear() {
    let value = year.value;
    console.log(value);
    let currentYear = new Date().getFullYear();
    console.log(currentYear);
    if(value == ''){
        yearError.innerHTML = inputRequiredError;
        return false;
    }else if(value > currentYear || value < 1900){
        yearError.innerHTML = inputYearError;
        return false;
    } else {
        yearError.innerHTML = '';
        return true;
    }
}

function calculate(birthday){
    let birthdate = new Date(birthday);
    let today = new Date();
    console.log(birthday);

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();
    console.log(birthdate);
    console.log(today);
    console.log(days);
    console.log(years);

    if(months < 0 || (months === 0 & days < 0)) {
         years = '--';
        if (months === 0){
            months = 11;
        }else{
            months = 12 + months;
        }
        days = 30 + days;
    }
    console.log(years);
    yearOutput.innerHTML = years;
    monthOutput.innerHTML = months;
    dayOutput.innerHTML = days;
}

button.addEventListener('click', e => {
    e.preventDefault();

    let inputDay = checkDay();
    let inputMonth = checkMonth();
    let inputYear = checkYear();

    console.log(inputDay);

    if(!inputDay||!inputMonth||!inputYear) return
    let birthday = `${day.value}/${month.value}/${year.value}`;
    calculate(birthday);
    console.log(calculate);
});


// day.addEventListener('submit', e =>{
// if (+day.value>31) {
//     // document.getElementById('dayError').style.display = 'block';
//     dayError.textContent = 'Must Be A Valid Date';
//     isValid = false;
//     return;
// } else if(){
    
// }

// });