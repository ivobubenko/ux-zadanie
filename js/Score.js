class Score {
  calcScore() {
    const questionsElArr = [...document.getElementsByClassName("question")];
    let totalScore = 0;
    let actualScore = 0;
    questionsElArr.forEach((el) => {
      [...el.children].forEach((el) => {
        const qst = [...el.classList];
        if (qst.includes("correct--unchecked") || qst.includes("correct")) {
          totalScore++;
        }
        //qst.includes("incorrect") && actualScore--;
        qst.includes("correct") && actualScore++;
      });
    });
    console.log(questionsElArr);
    return [actualScore, totalScore];
  }
  generateEl() {
    const scoreBar = document.createElement("div");
    const [actualScore, totalScore] = [...this.calcScore()];
    scoreBar.id = "score--result";
    scoreBar.classList.add("score");
    scoreBar.textContent = "Skore: " + actualScore + "/" + totalScore;
    return scoreBar;
  }
}

export default Score;
