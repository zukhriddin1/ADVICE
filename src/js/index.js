const btnrandomEl = document.querySelector("#btnrandom");
const adviceEl = document.querySelector("#advice");
const idnumEl = document.querySelector("#idnum");

btnrandomEl.addEventListener("click", function () {
  async function getTodo() {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const date = await res.json();
      idnumEl.textContent = date.slip.id;
      adviceEl.textContent = date.slip.advice;
    } catch (error) {
      console.log(error);
    }
  }

  getTodo();
});
