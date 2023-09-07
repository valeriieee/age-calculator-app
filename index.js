const day = document.querySelector('#dte');
const month = document.querySelector('#mnth');
const year = document.querySelector('#yrs');
const button = document.querySelector('#btn');

const dayOutput = document.querySelector('.purple3');
const monthOutput = document.querySelector('.purple2');
const yearOutput = document.querySelector('.purple1');

const dayError = document.querySelector('.dayError');
const monthError = document.querySelector('.monthError');
const yearError = document.querySelector('.yearError');

const inputRequiredError = 'This field is required';
const inputDayError = 'Must Be a valid Day';
const inputMonthError = 'Must Be a Valid Month';
const inputYearError = 'Must Be a Valid Year';

function checkDay() {
    let value = day.value;
    let monthValue = parseInt(month.value);
    
    if (value === '') {
        dayError.innerHTML = inputRequiredError;
        return false;
    }else if (value < 1 || value > 31) {
        dayError.innerHTML = inputDayError;
        return false;
    } else if ((monthValue === 4 || monthValue === 6 || monthValue === 9 || monthValue === 11) && value > 30) {
        dayError.innerHTML = inputDayError;
        return false;
    }else {
        dayError.innerHTML = '';
        return true;
    }

}

function checkMonth() {
    let value = month.value;
    if (value === '') {
        monthError.innerHTML = inputRequiredError;
        return false;
    } else if(value < 1 || value > 12){
        monthError.innerHTML = inputMonthError;
        return false;
    } else {
        monthError.innerHTML = '';
        return true;
    }

}

function checkYear() {
    let value = year.value;
    let currentYear = new Date().getFullYear();
    console.log(currentYear);
    if (value === '') {
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


function calculate(birthday) {
    let birthdate = new Date(birthday);
    let today = new Date();

    let years = today.getFullYear() - birthdate.getFullYear();
    let months = today.getMonth() - birthdate.getMonth();
    let days = today.getDate() - birthdate.getDate();

    if (days < 0) {
        // Calculate the days for cases where days is negative
        const daysInMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        days += daysInMonth;
        months--;
    }

    if (months < 0) {
        // Calculate the months for cases where months is negative
        months += 12;
        years--;
    }

    yearOutput.innerHTML = years;
    monthOutput.innerHTML = months;
    dayOutput.innerHTML = days;
}

// Function to save the birthday to local storage
function saveBirthday(birthday) {
    localStorage.setItem('userBirthday', birthday);
}

// Function to load the saved birthday from local storage
function loadBirthday() {
    return localStorage.getItem('userBirthday');
}

// Function to pre-fill input fields with the loaded birthday
function prefillInputFields() {
    const savedBirthday = loadBirthday();
    if (savedBirthday) {
        const [savedYear, savedMonth, savedDay] = savedBirthday.split('-');
        day.value = savedDay;
        month.value = savedMonth;
        year.value = savedYear;
    }
}

// Add an event listener to pre-fill input fields when the page loads
window.addEventListener('load', () => {
    prefillInputFields();
});

button.addEventListener('click', e => {
    e.preventDefault();
    let inputDay = checkDay();
    let inputMonth = checkMonth();
    let inputYear = checkYear();

    if (!inputDay || !inputMonth || !inputYear) return;
    let birthday = `${year.value}-${month.value}-${day.value}`;
    calculate(birthday);

    // Save the birthday to local storage
    saveBirthday(birthday);
});
