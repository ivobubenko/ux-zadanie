class Question {
  _question;
  _answers = [];
  _markup;
  _number;
  constructor(number) {
    this._number = number;
  }
  setQuestion(question) {
    this._question = question;
  }
  addAnswer(answer, isCorrect = false) {
    this._answers.push([answer, isCorrect]);
  }
  addMultipleAnswers(answerList) {
    answerList?.forEach((answer) => {
      console.log();
      this.addAnswer(
        typeof answer != "object" ? answer : answer[0],
        typeof answer == "object" && true
      );
    });
  }

  isSingleCorrect() {
    let index = 0;
    this._answers.forEach((ans) => {
      ans[1] && index++;
    });
    console.log(index);
    return index == 1 ? true : false;
  }

  generateAnswer(answer, key) {
    const div = document.createElement("div");
    const label = document.createElement("label");
    const checkbox = document.createElement("input");
    checkbox.type = this.isSingleCorrect() ? "radio" : "checkbox";
    checkbox.name = "question" + this._number;
    checkbox.id = key;
    label.setAttribute("for", key);
    div.classList.add("answer");
    label.innerText = answer[0];

    div.insertAdjacentElement("beforeend", checkbox);
    div.insertAdjacentElement("beforeend", label);

    div.addEventListener("submit--quiz", function (e) {
      e.preventDefault();
      console.log(checkbox.checked);
      if (answer[1] && checkbox.checked) {
        div.classList.add("correct");
      } else if (answer[1]) {
        div.classList.add("correct--unchecked");
      } else if (checkbox.checked) {
        div.classList.add("incorrect");
      }
    });

    return div;
  }
  generateMarkup(number = 0) {
    this._markup = document.createElement("div");
    this._markup.classList.add("question");
    this._markup.innerHTML = `<p class="question--text">${this._number}. ${this._question}</p`;

    this._answers.forEach((ans) => {
      this._markup.insertAdjacentElement(
        "beforeend",
        this.generateAnswer(ans, number)
      );
      number++;
    });
    return [this._markup, number];
  }
}

export default Question;
