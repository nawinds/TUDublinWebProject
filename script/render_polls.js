const recentPolls = [
    {
        title: "Are you satisfied with QuickPolls?",
        options: [{id: "poll_satisfaction_yes", title: "Yes"},
                  {id: "poll_satisfaction_no", title: "No"}],
        name: "satisfaction",
        author: "admin"
    },
    {
        title: "What's your favourite OS?",
        options: [{id: "windows_option", title: "Windows"},
                  {id: "mac_option", title: "Mac OS"},
                  {id: "linux_option", title: "Linux"}],
        name: "os",
        author: "Nikita"
    }
];
  
function displayPolls() {
  const pollList = document.getElementById('recent_polls');

  recentPolls.forEach(poll => {
    const pollElement = document.createElement('div');
    pollElement.classList.add("poll_view");

    const pollTitleElement = document.createElement("h3");
    pollTitleElement.classList.add("poll_question");
    pollTitleElement.textContent = poll.title;

    const pollAuthorElement = document.createElement("span");
    pollAuthorElement.classList.add("poll_author");
    pollAuthorElement.classList.add("text-muted");
    pollAuthorElement.textContent = poll.author;

    const pollFormElement = document.createElement("form");
    pollFormElement.classList.add("poll_options");
    pollFormElement.method = "post";

    poll.options.forEach(pollOption => {
        const pollInputElement = document.createElement("input");
        pollInputElement.type = "radio";
        pollInputElement.id = pollOption.id;
        pollInputElement.name = poll.name;
        pollInputElement.value = pollOption.title;

        const pollLabelElement = document.createElement("label");
        pollLabelElement.htmlFor = pollOption.id;
        pollLabelElement.textContent = pollOption.title;

        pollFormElement.appendChild(pollInputElement);
        pollFormElement.appendChild(pollLabelElement);
        pollFormElement.appendChild(document.createElement("br"));
    })

    const pollFormSubmitElement = document.createElement("button");
    pollFormSubmitElement.type = "submit";
    pollFormSubmitElement.textContent = "Vote";

    pollFormElement.appendChild(pollFormSubmitElement);

    pollElement.appendChild(pollTitleElement);
    pollElement.appendChild(pollAuthorElement);
    pollElement.appendChild(pollFormElement)

    pollList.appendChild(pollElement);
    pollList.appendChild(document.createElement("hr"));
  });
}

displayPolls();
  