let dayInput = document.getElementById("day"),
    monthInput = document.getElementById("month"),
    yearInput = document.getElementById("year"),
    dayDev = document.querySelector(".day-dev"),
    monthDev = document.querySelector(".month-dev"),
    yearDev = document.querySelector(".year-dev"),
    dayErrorSpan = document.createElement("span");
dayDev.appendChild(dayErrorSpan);

let monthErrorSpan = document.createElement("span");
monthDev.appendChild(monthErrorSpan);

let yearErrorSpan = document.createElement("span");
yearDev.appendChild(yearErrorSpan);

let dayLabel = document.getElementById("day-label"),
    monthLabel = document.getElementById("month-label"),
    yearLabel = document.getElementById("year-label"),
    resultBtn = document.querySelector(".btn");

resultBtn.addEventListener("click", () => {
    findError();
});

let date = new Date(),
    day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear(),
    daySpan = document.getElementById("daySpan"),
    monthSpan = document.getElementById("monthSpan"),
    yearSpan = document.getElementById("yearSpan");

let validDay = false,
    validMonth = false,
    validYear = false;

function findError() {
    if (!dayInput.value || dayInput.value == 0 || dayInput.value > 31) {
        dayLabel.style.color = "#ff5757";
        dayInput.style.borderColor = "#ff5757";
        daySpan.style.color = "#ff5757";
        validDay = false;
        if (!dayInput.value) {
            dayErrorSpan.innerHTML = "This filed is required";
        } else if (dayInput.value > 31 || dayInput.value == 0) {
            dayErrorSpan.innerHTML = "must be a valid day";
        }
    } else {
        dayErrorSpan.innerHTML = "";
        dayLabel.style.color = "#716f6f";
        dayInput.style.borderColor = "#dbdbdb";
        daySpan.style.color = "#854dff";
        validDay = true;
    }

    if (!monthInput.value || monthInput.value == 0 || monthInput.value > 12) {
        monthLabel.style.color = "#ff5757";
        monthInput.style.borderColor = "#ff5757";
        monthSpan.style.color = "#ff5757";
        validMonth = false;
        if (!monthInput.value) {
            monthErrorSpan.innerHTML = "This filed is required";
        } else if (monthInput.value > 12 || monthInput.value == 0) {
            monthErrorSpan.innerHTML = "must be a valid month";
        }
    } else {
        monthErrorSpan.innerHTML = "";
        monthLabel.style.color = "#716f6f";
        monthInput.style.borderColor = "#dbdbdb";
        monthSpan.style.color = "#854dff";
        validMonth = true;
    }

    if (!yearInput.value || yearInput.value == 0 || yearInput.value > year) {
        yearLabel.style.color = "#ff5757";
        yearInput.style.borderColor = "#ff5757";
        yearSpan.style.color = "#ff5757";
        validYear = false;
        if (!yearInput.value) {
            yearErrorSpan.innerHTML = "This filed is required";
            validYear = false;
        } else if (yearInput.value == 0) {
            yearErrorSpan.innerHTML = "must be a valid year";
            validYear = false;
        } else if (yearInput.value > year) {
            yearErrorSpan.innerHTML = "must be in the past";
            validYear = false;
        }
    } else {
        yearErrorSpan.innerHTML = "";
        yearLabel.style.color = "#716f6f";
        yearInput.style.borderColor = "#dbdbdb";
        yearSpan.style.color = "#854dff";
        validYear = true;
    }
    if (yearInput.value >= year && monthInput.value > month) {
        monthErrorSpan.innerHTML = "must be in the past";
        monthLabel.style.color = "#ff5757";
        monthInput.style.borderColor = "#ff5757";
        monthSpan.style.color = "#ff5757";

        dayErrorSpan.innerHTML = "must be in the past";
        dayLabel.style.color = "#ff5757";
        dayInput.style.borderColor = "#ff5757";
        daySpan.style.color = "#ff5757";

        validYear = false;
    } else if (
        yearInput.value >= year &&
        monthInput.value >= month &&
        dayInput.value > day
    ) {
        dayErrorSpan.innerHTML = "must be in the past";
        dayLabel.style.color = "#ff5757";
        dayInput.style.borderColor = "#ff5757";
        daySpan.style.color = "#ff5757";
        validYear = false;
    }

    if (validDay && validMonth && validYear) {
        getData();
    }
}
function getData() {
    let writtenDay = dayInput.value,
        writtenMonth = monthInput.value,
        writtenYear = yearInput.value;
    daySpan.innerHTML = day - writtenDay;
    monthSpan.innerHTML = month - writtenMonth;
    yearSpan.innerHTML = year - writtenYear;
    if (day - writtenDay <= 0) {
        daySpan.innerHTML = 30 - writtenDay + day;
        monthSpan.innerHTML = month - writtenMonth - 1;
    }
    if (month - writtenMonth <= 0) {
        yearSpan.innerHTML = year - writtenYear - 1;
        monthSpan.innerHTML = 12 - writtenMonth + month - 1;
    }
    if (daySpan.innerHTML == 30) {
        daySpan.innerHTML = "0";
        monthSpan.innerHTML = `${+monthSpan.innerHTML + 1}`;
    }
    if (monthSpan.innerHTML == 12) {
        monthSpan.innerHTML = "0";
        yearSpan.innerHTML = `${+yearSpan.innerHTML + 1}`;
    }
    return;
}
