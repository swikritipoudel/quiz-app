let quizData = [
    {
        question: "1. In what year did the Great October Socialist Revolution take place?",
        options: ["1917", "1923", "1914", "1920"],
        correct: 0
    },
    {
        question: "2. What is the largest lake in the world?",
        options: ["Caspian Sea", "Baikal", "Lake Superior", "Ontario"],
        correct: 1
    },
    {
        question: "3. Which planet in the solar system is known as the “Red Planet”?",
        options: ["Venus", "Earth", "Mars", "Jupiter"],
        correct: 2
    },
    {
        question: "4. Who wrote the novel “War and Peace”?",
        options: ["Anton Chekhov", "Fyodor Dostoevsky", "Leo Tolstoy", "Ivan Turgenev"],
        correct: 2
    },
    {
        question: "5.What is the capital of Japan?",
        options: ["Beijing", "Tokyo", "Seoul", "Bangkok"],
        correct: 1
    },
    {
        question: "6. Which river is the longest in the world?",
        options: ["Amazon", "Mississippi", "Nile", "Yangtze"],
        correct: 2
    },
    {
        question: "7. What gas is used to extinguish fires?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correct: 1
    },
    {
        question: "8. What animal is the national symbol of Australia?",
        options: ["kangaroo", "Koala", "Emu", "Crocodile"],
        correct: 0
    },
    {
        question: "9. Which of the following planets is not a gas giant?",
        options: ["Mars", "Jupiter", "Saturn", "Uranus"],
        correct: 0
    },
    {
        question: "10. What is the name of the process by which plants convert sunlight into energy?",
        options: ["Respiration", "Photosynthesis", "Oxidation", "Evolution "],
        correct: 1
    },
    {
        question: "11. What chemical element is designated as “Hg”?",
        options: ["Silver", "Tin", "Copper", "Mercury"],
        correct: 3
    },
    {
        question: "12. In what year was the first international modern Olympiad held?",
        options: ["1896", "1900", "1912", "1924"],
        correct: 0
    },
    {
        question: "13. For which of these disciplines Nobel Prize is awarded?",
        options: ["Physics,Chemistry", "Physiology", "Medicine", "All of the above"],
        correct: 3
    },
    {
        question: "14. Entomology is the science that studies:",
        options: ["Behavior and human beings", "Insects", "The origin and history of technical and scientific terms", "The formation of rocks"],
        correct: 1
    },
    {
        question: "15. Hitler's party is known as:",
        options: ["Labour Party", "Nazi Party", "Ku-Klux-Klan", "Democraric Party"],
        correct: 1
    },
    {
        question: "16. For which Galileo is famous?",
        options: ["Developed the telescope", "Discovered four satellites of Jupiter", "Found that the swinging motion of the pendulum results in consistent time measurement.", "All of the above"],
        correct: 3
    },
    {
        question: "17. When the First Afghan War took place in",
        options: ["1839", "1843", "1833", "1848"],
        correct: 0
    },
    {
        question: "18. Ecology deals with",
        options: ["Birds", "Cell formation", "Relation between organism and their environment", "Tissues"],
        correct: 2
    },
    {
        question: "19. Which is the largest island?",
        options: ["New Guinea", "Andaman Nicobar", "Greenland", "Hawaii"],
        correct: 2
    },
    {
        question: "Which one is the hottest continent?",
        options: ["Africa", "South Asia", "North America", "Australia"],
        correct: 0
    },

]

let questionsE1 = document.querySelector(".questions")
let optionsE1 = document.querySelector(".options")
let nextButton = document.querySelector(".next-btn")

let currentQuestionIndex = 0
let score = 0


function displayQuestion() {
    optionsE1.innerHTML = ""
    questionsE1.textContent = quizData[currentQuestionIndex].question
    nextButton.disabled = true

    let optional = quizData[currentQuestionIndex]
    optional.options.forEach((option, index) => {
        let li = document.createElement("li");
        let input = document.createElement("input")
        input.type = "radio"
        input.name = "quizoption"

        let label = document.createElement("label");
        label.textContent = option;
        li.appendChild(input)
        li.appendChild(label)
        optionsE1.appendChild(li);

        li.addEventListener("click", () => {
            if (li.classList.contains("disabled")) {
                return;
            }

            document.querySelectorAll(".options li").forEach(item => {
                item.classList.add("disabled");
                item.querySelector("input").disabled = true;
            });

            if (index === quizData[currentQuestionIndex].correct) {
                li.classList.add("correct")
                score += 5;
            } else {
                li.classList.add("incorrect");
                setTimeout(() => {
                    let correctOption = document.querySelectorAll(".options li")[quizData[currentQuestionIndex].correct];
                    correctOption.classList.add("correct");
                }, (100))


            }
            nextButton.disabled = false
        });



    });
}


displayQuestion();


nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        displayQuestion();
    }
    else {
        questionsE1.textContent = `Quiz Completed! Your total score is ${score} out of 100`;
        optionsE1.innerHTML = "";
        nextButton.style.display = "none"
    }
});
