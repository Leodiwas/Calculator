import * as el from "./view.js/var.js";

class Calculator {
  _parentEl = document.querySelector(".calc__box");

  constructor() {
    this._toggleMode();
    this._delete();
    this._numberOperand();
  }

  _clear() {}

  _delete() {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();

      const delBtn = e.target.closest(".btn__delete");
      if (!delBtn) return;

      console.log("yes");
    });
  }

  _numberOperand() {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();

      const numberBtn = e.target.closest(".btn__number");
      if (!numberBtn) return;

      el.curCalc.textContent = `=${Number(numberBtn.textContent)}`;
    });
  }

  // Switching Dark Mode
  _toggleMode() {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();

      const switchBtn = e.target.closest(".switch");
      if (!switchBtn) return;

      const togglerArr = [switchBtn, el.body, el.calcContainer, el.curCalc];
      togglerArr.map((elm) => elm.classList.toggle("active"));
    });
  }
}

export default new Calculator();
