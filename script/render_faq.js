const questions = [
    {
        question: "What's the whole website about?",
        answer: "Here you can create polls on any topic you want"
    },
    {
        question: "How to be in touch?",
        answer: "Feel free to text us on support@quickpolls.com"
    }
];

for (let i = 0; i < questions.length; i++)
{
    faqItem = `
        <h2 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${i}" aria-expanded="false" aria-controls="collapse${i}">
                ${questions[i].question}
            </button>
        </h2>
        <div id="collapse${i}" class="accordion-collapse collapse" data-bs-parent="#accordionFAQ">
            <div class="accordion-body">
                ${questions[i].answer}
            </div>
        </div>`;
    const faqElement = document.createElement("div");
    faqElement.classList.add("accordion-item");
    faqElement.innerHTML = faqItem;
    document.getElementById("accordionFAQ").appendChild(faqElement);
}
