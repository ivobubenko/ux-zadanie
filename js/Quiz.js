import Question from "./Question.js";
import Score from "./Score.js";

const submitQuizEvent = new CustomEvent("submit--quiz");

class Quiz {
  questions = [];
  addQuestion(question) {
    this.questions.push(question);
  }

  renderScore() {}
  generateMarkup() {
    let index = 0;
    const quiz = document.createElement("form");
    quiz.classList.add("quiz");
    this.questions.forEach((qst) => {
      let [questionMarkup, newIndex] = [...qst.generateMarkup(index)];
      index = newIndex;

      quiz.insertAdjacentElement("beforeend", questionMarkup);
    });

    const submitButton = document.createElement("button");

    submitButton.type = "submit";
    submitButton.innerText = "Odovzdat";
    submitButton.classList.add("submit--quiz");

    submitButton.addEventListener("click", function (e) {
      e.preventDefault();

      const answersArr = [...document.getElementsByClassName("answer")];
      console.log(answersArr);
      const ScoreCl = new Score();
      answersArr.forEach((ans) => {
        ans.dispatchEvent(submitQuizEvent);
      });

      if (document.getElementById("score--result"))
        document.getElementById("score--result").remove();

      quiz.insertAdjacentElement(
        "beforeend",
        ScoreCl.generateEl(this.questions)
      );
    });

    quiz.insertAdjacentElement("beforeend", submitButton);
    return quiz;
  }
}

export default Quiz;
