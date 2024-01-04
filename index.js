"use strict";

import Quiz from "./js/Quiz.js";
import Question from "./js/Question.js";
import Dropdown from "./js/Dropdown.js";
import data from "./questions1.json"; // assert { type: "json" };
import addHamburgerMenuHandler from "./js/Hamburger.js";

const dropdownContainer = [...document.getElementsByClassName("dropdown")];
const content = document.querySelector(".course--content");

//console.log(content);

const makeQuiz = () => {
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

const handleDropdown = (event) => {
  event.preventDefault();
  const navbarContent = event.target.nextSibling.nextSibling;
  navbarContent.classList.toggle("showed");
};
{
  const dropdownArr = document.getElementById("dropdown-list");
  dropdownArr.insertAdjacentElement(
    "beforeend",
    new Dropdown("Prednášky", [
      "Introduction",
      "Algorithm Properties",
      "Recursion",
      "Variables & I/0",
    ]).createDropdownEl()
  );
  dropdownArr.insertAdjacentElement(
    "beforeend",
    new Dropdown("Cvičenia", [
      "First Steps with Shell",
      "First Steps with Karel the Robot",
      "Super Karel",
      "Super Karel rocks on",
    ]).createDropdownEl()
  );
  dropdownArr.insertAdjacentElement(
    "beforeend",
    new Dropdown("Zadania", [
      "Problem Set 0",
      "Problem Set 1",
      "Problem Set 2",
      "Problem Set 3",
      "Problem Set 4",
    ]).createDropdownEl()
  );
  dropdownArr.insertAdjacentElement(
    "beforeend",
    new Dropdown("Tutoriály a info", [
      "Docker",
      "Etický kódex",
      "Informácie k hodnoteniu",
    ]).createDropdownEl()
  );

  dropdownArr.insertAdjacentElement(
    "beforeend",
    new Dropdown("Kvízy", ["1. Kvíz", "2. Kvíz", "3. Kvíz"]).createDropdownEl()
  );

  const QuizCl = makeQuiz();
  content.insertAdjacentElement("beforeend", QuizCl.generateMarkup());

  dropdownContainer.forEach((el) => {
    el.addEventListener("submit", handleDropdown);
  });

  addHamburgerMenuHandler();
}
