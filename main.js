const dayjs = require('dayjs');
const utc = require("dayjs/plugin/utc");
const timezone = require("dayjs/plugin/timezone");
const MicroModal = require('micromodal');

dayjs.extend(utc);
dayjs.extend(timezone);

let myDate = new Date();
let myCoolDate = dayjs().format("hh:mm:ss");

document.querySelector(".hours").innerHTML = myCoolDate;

let myTimeZone = dayjs.tz.guess();

document.querySelector(".timezone").innerHTML = myTimeZone;

document.querySelector(".myzone").innerHTML = myTimeZone;

let label1 = document.querySelector(".myzone");

document.getElementById("item1").setAttribute('title', label1.innerText);

let myCurrentDate = dayjs().format("dddd, D MMMM, YYYY");

document.querySelector(".currentDate").innerHTML = myCurrentDate;

let NewYorktz = dayjs().tz("America/New_York").format("hh:mm:ss");

let london = dayjs().tz("Europe/London").format("hh:mm:ss");

let tokyo = dayjs().tz("Asia/Tokyo").format("hh:mm:ss");

MicroModal.init();

/* Fix */

const fixing = () => {
    let fixinputs = document.querySelectorAll(".fix");
    let details = document.querySelector("details");
    let listItems = document.querySelectorAll(".list li");

    fixinputs.forEach(input => {
        input.addEventListener("click", () => {
            if (details.hasAttribute("open")) {
                details.removeAttribute("open");
            }
        });
    });

    listItems.forEach(item => {
        item.addEventListener("click", () => {
            let label = item.querySelector("label");
            let input = document.getElementById(label.getAttribute("for"));
            if (input) {
                input.checked = true;
                details.removeAttribute("open");
            }
        });
    });
}

fixing();

/* Timezone Change */

const timeZChange = () => {
    let button = document.querySelector(".p1");
    let timezone = document.querySelector(".timezone");
    let hours = document.querySelector(".hours");
    let modal1 = document.getElementById("modal-1");

    button.addEventListener("click", () => {
        let selectedInput = document.querySelector('input[name="item"]:checked');

        modal1.classList.remove("is-open");
        modal1.setAttribute("aria-hidden", "true");

        if (selectedInput) {
            switch (selectedInput.id) {
                case 'default':
                    console.log("default");
                    break;
                case 'item1':
                    timezone.innerHTML = myTimeZone;
                    hours.innerHTML = myCoolDate;
                    break;
                case 'item2':
                    timezone.innerHTML = "America/NewYork";
                    hours.innerHTML = NewYorktz;
                    break;
                case 'item3':
                    timezone.innerHTML = "Europe/London";
                    hours.innerHTML = london;
                    break;
                case 'item4':
                    timezone.innerHTML = "Asia/Tokyo";
                    hours.innerHTML = tokyo;
                    break;
            }
        }
    });
}

timeZChange();