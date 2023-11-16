// BOOTSTRAP SCRIPTS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


// ADDING OPTIONS TO NEW POLL
OPTIONS_NAMES = {3: "Third", 4: "Fourth", 5: "Fifth", 6: "Sixth", 7: "Seventh", 8: "Eighth", 9: "Ninth", 10: "Tenth"}
let optionsCount = 2;

function newPollAddOption()
{
    if (optionsCount < 10)
    {
        optionsCount++;

        const optionsElement = document.getElementById("new_poll_options");
        const newOption = document.createElement("input");
        newOption.type = "text";
        newOption.placeholder = OPTIONS_NAMES[optionsCount] + " option";
        optionsElement.appendChild(newOption)
        
        const new_poll_info_button = document.getElementById("new_poll_info");
        new_poll_info_button.setAttribute("data-bs-title", (10 - optionsCount) + " options left");

        const popoverId = new_poll_info_button.getAttribute("aria-describedby");
        const popover = document.getElementById(popoverId);
        popover.children[1].innerHTML = (10 - optionsCount) + " options left";
        new_poll_info_button.setAttribute("data-bs-title", (10 - optionsCount) + " options left");

        if (optionsCount === 10)
        {
            const addOptionButton = document.getElementById("add_option_button");
            addOptionButton.style.backgroundColor = "rgb(170, 170, 170)";
        }
    }
    else
    {
        alert("You can only have up to 10 options!")
    }
}