const data = [
    {
        id:1,
        question:"How are you?",
        answer:"Good!"
    },
    {
        id:2,
        question:"So, what else?",
        answer:"Nothing much!"
    }
]

const accorianWrapper = document.querySelector(".accordian-container")

const createAccordianData = () => {
    accorianWrapper.innerHTML = data.map(
        (dataItem) => `
        <div class="accordian_item">
        <div class="accordian_title">
        <h3>${dataItem.question}</h3>
        </div>
        <div class="accordian_answer">${dataItem.answer}</div>
        </div>
        `).join(" ")
};

createAccordianData();

const getAcordianTitles = document.querySelectorAll(".accordian_title")

console.log(getAcordianTitles);

getAcordianTitles.forEach(currentItem => {
    currentItem.addEventListener('click', (event) => {
        if(currentItem.classList.contains('active')){
            currentItem.classList.remove('active');
        } else {
            let getCurrentlyActiveItems = document.querySelectorAll(".active")
            getCurrentlyActiveItems.forEach(currentlyActive => {
                currentlyActive.classList.remove("active")
            })
            currentItem.classList.add("active")
        }
    })
})

