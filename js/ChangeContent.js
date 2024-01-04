import data1 from "../questions1.json"; // assert { type: "json" };
import data2 from "../questions2.json"; // assert { type: "json" };
import data3 from "../questions3.json"; // assert { type: "json" };

import Question from "./Question.js";
import Quiz from "./Quiz.js";

const makeQuiz = (newQuestions) => {
  let data;
  if (newQuestions === "1") {
    data = data1;
  } else if (newQuestions === "2") {
    data = data2;
  } else {
    data = data3;
  }

  const questionsListArr = data["question-list"];
  const newQuiz = new Quiz();
  let index = 1;
  questionsListArr.forEach((el) => {
    if (!el?.question) return;
    const QuestionCl = new Question(index);
    QuestionCl.setQuestion(el.question);
    QuestionCl.addMultipleAnswers(el.answers);
    newQuiz.addQuestion(QuestionCl);

    index++;
  });
  return newQuiz;
};

const changeContent = (newQuestions) => {
  const content = document.querySelector("main");

  [...content.children].forEach((el) => el.remove());
  const courseDiv = document.createElement("div");
  courseDiv.classList.add("course--content");
  const courseHeader = document.createElement("h1");
  courseHeader.innerText = newQuestions + ". Kvíz";
  courseHeader.classList.add("section--name");

  courseDiv.insertAdjacentElement(
    "beforeend",
    makeQuiz(newQuestions).generateMarkup()
  );
  content.insertAdjacentElement("beforeend", courseHeader);
  content.insertAdjacentElement("beforeend", courseDiv);
};

export default changeContent;
