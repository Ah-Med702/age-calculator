let dayInput = document.getElementById("day");
let monthInput = document.getElementById("month");
let yearInput = document.getElementById("year");

let dayDev = document.querySelector(".day-dev");
let monthDev = document.querySelector(".month-dev");
let yearDev = document.querySelector(".year-dev");

let dayErrorSpan = document.createElement("span");
dayDev.appendChild(dayErrorSpan);

let monthErrorSpan = document.createElement("span");
monthDev.appendChild(monthErrorSpan);

let yearErrorSpan = document.createElement("span");
yearDev.appendChild(yearErrorSpan);

let dayLabel = document.getElementById("day-label");
let monthLabel = document.getElementById("month-label");
let yearLabel = document.getElementById("year-label");

let resultBtn = document.querySelector(".btn");

resultBtn.addEventListener("click", () => {
    findError();
});

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let daySpan = document.getElementById("daySpan");
let monthSpan = document.getElementById("monthSpan");
let yearSpan = document.getElementById("yearSpan");

function findError() {
    if (
        dayInput.value < 31 &&
        dayInput.value != 0 &&
        dayInput.value != "" &&
        monthInput.value < 12 &&
        monthInput.value != 0 &&
        monthInput.value != "" &&
        ((yearInput.value < year &&
            monthInput.value < month &&
            dayInput.value < day) ||
            (yearInput.value <= year &&
                monthInput.value < month &&
                dayInput.value < day) ||
            (yearInput.value <= year && monthInput.value <= month)) &&
        yearInput.value >= year - 120 &&
        yearInput.value != 0 &&
        yearInput.value != ""
    ) {
        getData();

        dayErrorSpan.innerHTML = "";
        monthErrorSpan.innerHTML = "";
        yearErrorSpan.innerHTML = "";

        dayLabel.style.color = "#716f6f";
        dayInput.style.borderColor = "#dbdbdb";
        monthLabel.style.color = "#716f6f";
        monthInput.style.borderColor = "#dbdbdb";
        yearLabel.style.color = "#716f6f";
        yearInput.style.borderColor = "#dbdbdb";

        daySpan.style.color = "#854dff";
        monthSpan.style.color = "#854dff";
        yearSpan.style.color = "#854dff";
    } else if (
        dayInput.value < 31 &&
        dayInput.value != 0 &&
        dayInput.value != ""
    ) {
        dayErrorSpan.innerHTML = "";
        dayLabel.style.color = "#716f6f";
        dayInput.style.borderColor = "#dbdbdb";
    } else if (dayInput.value == "") {
        dayErrorSpan.innerHTML = "This filed is required";

        dayLabel.style.color = "#ff5757";
        dayInput.style.borderColor = "#ff5757";

        daySpan.style.color = "#ff5757";
        monthSpan.style.color = "#ff5757";
        yearSpan.style.color = "#ff5757";

        daySpan.innerHTML = "--";
        monthSpan.innerHTML = "--";
        yearSpan.innerHTML = "--";
    } else if (dayInput.value > 31 || dayInput.value == 0) {
        dayErrorSpan.innerHTML = "must be a valid day";

        dayLabel.style.color = "#ff5757";
        dayInput.style.borderColor = "#ff5757";

        daySpan.style.color = "#ff5757";
        monthSpan.style.color = "#ff5757";
        yearSpan.style.color = "#ff5757";

        daySpan.innerHTML = "--";
        monthSpan.innerHTML = "--";
        yearSpan.innerHTML = "--";
    }

    if (
        monthInput.value < 12 &&
        monthInput.value != 0 &&
        monthInput.value != ""
    ) {
        monthErrorSpan.innerHTML = "";
        monthLabel.style.color = "#716f6f";
        monthInput.style.borderColor = "#dbdbdb";
    } else if (monthInput.value == "") {
        monthDev.appendChild(monthErrorSpan);
        monthErrorSpan.innerHTML = "This filed is required";

        monthLabel.style.color = "#ff5757";
        monthInput.style.borderColor = "#ff5757";

        daySpan.style.color = "#ff5757";
        monthSpan.style.color = "#ff5757";
        yearSpan.style.color = "#ff5757";
    } else if (monthInput.value > 12 || monthInput.value == 0) {
        monthErrorSpan.innerHTML = "must be a valid month";

        monthLabel.style.color = "#ff5757";
        monthInput.style.borderColor = "#ff5757";

        daySpan.style.color = "#ff5757";
        monthSpan.style.color = "#ff5757";
        yearSpan.style.color = "#ff5757";
    }

    if (
        yearInput.value < year &&
        yearInput.value >= year - 120 &&
        yearInput.value != 0 &&
        yearInput.value != ""
    ) {
        yearErrorSpan.innerHTML = "";
        yearLabel.style.color = "#716f6f";
        yearInput.style.borderColor = "#dbdbdb";
    } else if (yearInput.value == "") {
        yearErrorSpan.innerHTML = "This filed is required";

        yearLabel.style.color = "#ff5757";
        yearInput.style.borderColor = "#ff5757";

        daySpan.style.color = "#ff5757";
        monthSpan.style.color = "#ff5757";
        yearSpan.style.color = "#ff5757";
    } else if (
        yearInput.value > year &&
        monthInput.value > month &&
        dayInput.value > day
    ) {
        yearErrorSpan.innerHTML = "must be in the past";

        yearLabel.style.color = "#ff5757";
        yearInput.style.borderColor = "#ff5757";

        monthErrorSpan.innerHTML = "must be in the past";

        monthLabel.style.color = "#ff5757";
        monthInput.style.borderColor = "#ff5757";

        dayErrorSpan.innerHTML = "must be in the past";

        dayLabel.style.color = "#ff5757";
        dayInput.style.borderColor = "#ff5757";

        daySpan.style.color = "#ff5757";
        monthSpan.style.color = "#ff5757";
        yearSpan.style.color = "#ff5757";

        daySpan.innerHTML = "--";
        monthSpan.innerHTML = "--";
        yearSpan.innerHTML = "--";
    } else if (
        yearInput.value >= year &&
        monthInput.value > month &&
        dayInput.value > day
    ) {
        yearErrorSpan.innerHTML = "must be in the past";

        yearLabel.style.color = "#ff5757";
        yearInput.style.borderColor = "#ff5757";

        monthErrorSpan.innerHTML = "must be in the past";

        monthLabel.style.color = "#ff5757";
        monthInput.style.borderColor = "#ff5757";

        dayErrorSpan.innerHTML = "must be in the past";

        dayLabel.style.color = "#ff5757";
        dayInput.style.borderColor = "#ff5757";

        daySpan.style.color = "#ff5757";
        monthSpan.style.color = "#ff5757";
        yearSpan.style.color = "#ff5757";

        daySpan.innerHTML = "--";
        monthSpan.innerHTML = "--";
        yearSpan.innerHTML = "--";
    } else if (
        yearInput.value >= year &&
        monthInput.value >= month &&
        dayInput.value > day
    ) {
        yearErrorSpan.innerHTML = "must be in the past";

        yearLabel.style.color = "#ff5757";
        yearInput.style.borderColor = "#ff5757";

        monthErrorSpan.innerHTML = "must be in the past";

        monthLabel.style.color = "#ff5757";
        monthInput.style.borderColor = "#ff5757";

        dayErrorSpan.innerHTML = "must be in the past";

        dayLabel.style.color = "#ff5757";
        dayInput.style.borderColor = "#ff5757";

        daySpan.style.color = "#ff5757";
        monthSpan.style.color = "#ff5757";
        yearSpan.style.color = "#ff5757";

        daySpan.innerHTML = "--";
        monthSpan.innerHTML = "--";
        yearSpan.innerHTML = "--";
    } else if (yearInput.value < year - 120 || yearInput.value == 0) {
        yearErrorSpan.innerHTML = "must be a valid year";

        yearLabel.style.color = "#ff5757";
        yearInput.style.borderColor = "#ff5757";

        daySpan.style.color = "#ff5757";
        monthSpan.style.color = "#ff5757";
        yearSpan.style.color = "#ff5757";

        daySpan.innerHTML = "--";
        monthSpan.innerHTML = "--";
        yearSpan.innerHTML = "--";
    }
}

function getData() {
    let writtenDay = dayInput.value;
    let writtenMonth = monthInput.value;
    let writtenYear = yearInput.value;

    daySpan.innerHTML = day - writtenDay;
    monthSpan.innerHTML = month - writtenMonth;
    yearSpan.innerHTML = year - writtenYear;

    if (day - writtenDay < 0) {
        daySpan.innerHTML = 30 - writtenDay + day;
        monthSpan.innerHTML = month - writtenMonth - 1;
    }
    if (month - writtenMonth < 0) {
        monthSpan.innerHTML = 12 - writtenMonth + month - 1;
        yearSpan.innerHTML = year - writtenYear - 1;
    }
}
