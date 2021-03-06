import * as el from "../var.js";

export default class Calculator {
  _parentEl = document.querySelector(".calc__box");
  _curCalc = document.querySelector(".current__calc");
  _prevCalc = document.querySelector(".previous__calc");
  _currentOperend;
  _previousOperand = [];
  _calcsOperand = [];

  constructor() {
    this._toggleMode();
    this._clear();
    this._delete();
  }

  _clear() {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();

      const clearFieldBtn = e.target.closest(".btn__Ac");
      if (!clearFieldBtn) return;

      this._curCalc.textContent = 0;
      this._prevCalc.textContent = 0;
      this._previousOperand = [];
      this._calcsOperand = [];
      this._clicked = 0;
    });
  }

  _delete() {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();

      const delBtn = e.target.closest(".btn__delete");
      if (!delBtn) return;

      if (this._currentOperend) {
        this._curCalc.textContent = this._currentOperend.slice(0, -1);
        this._currentOperend = this._curCalc.textContent;
      }

      this._previousOperand = this._previousOperand.slice(0, -1);

      if (this._currentOperend === "") return (this._curCalc.textContent = 0);

      // remove class from all elements
      el.btnOperator.forEach((el) => el.classList.remove("active"));
    });
  }

  // Switching Dark Mode
  _toggleMode() {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();

      const switchBtn = e.target.closest(".switch");
      if (!switchBtn) return;

      const togglerArr = [switchBtn, el.body, el.calcContainer, this._curCalc];
      togglerArr.map((elm) => elm.classList.toggle("active"));
    });
  }
}
