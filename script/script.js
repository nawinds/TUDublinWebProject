// BOOTSTRAP SCRIPTS
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


// ADDING OPTIONS TO NEW POLL
OPTIONS_NAMES = {2: "Second", 3: "Third", 4: "Fourth", 5: "Fifth", 6: "Sixth", 7: "Seventh", 8: "Eighth", 9: "Ninth", 10: "Tenth"}
let optionsCount = 1;
let poll_progress = 0;

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
        newOption.focus();
        
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

function pollNext()
{
    switch (poll_progress)
    {
        case 0:
            const pollTitle = document.getElementById("poll_title").value;
            document.getElementById("poll_title_header").textContent = pollTitle;
            document.getElementById("poll_title").style.display = "none";
            document.getElementById("poll_name").style.display = "";
            document.getElementById("poll_name").focus();
            poll_progress++;
            break;
        case 1:
            const pollName = document.getElementById("poll_name").value;
            document.getElementById("poll_author_header").textContent = pollName;
            document.getElementById("poll_name").style.display = "none";
            document.getElementById("poll_email").style.display = ""; 
            document.getElementById("poll_email").focus();
            poll_progress++;
            break;
        case 2:
            document.getElementById("poll_email").style.display = "none";
            document.getElementById("pollNextButton").style.display = "none";
            document.getElementById("poll_option").style.display = "";
            document.getElementById("submitSection").style.display = "";
            document.getElementById("poll_submit").style.display = "";
            document.getElementById("poll_option").focus();
            poll_progress++;
            break;
    }
}