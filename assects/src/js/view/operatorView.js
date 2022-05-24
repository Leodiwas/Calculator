import Calculator from "./calculatorView.js";
import * as el from "../var.js";

class OperatorView extends Calculator {
  constructor() {
    super();
    this.calcOperand();
  }

  numberOperand() {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();

      const btnEl = e.target.closest(".btn__number");
      if (!btnEl) return;

      if (this._curCalc.textContent === "0") this._curCalc.textContent = "";
      this._curCalc.textContent += btnEl.textContent;

      this._currentOperend = this._curCalc.textContent;

      this._previousOperand.push(btnEl.textContent);

      console.log(this._previousOperand);

      el.btnOperator.forEach((el) => {
        if (el.classList.contains("active")) {
          this._curCalc.textContent = "";
          this._curCalc.textContent += this._previousOperand.join("");
        }
      });
    });
  }

  calcOperand() {
    this._parentEl.addEventListener("click", (e) => {
      const calcBtn = e.target.closest(".btn__operator");
      if (!calcBtn) return;

      this._previousOperand.push(calcBtn.textContent);
      this._calcOperand.push(this._curCalc.textContent);

      console.log(this._calcOperand);

      if (this._prevCalc.textContent === "0") this._prevCalc.textContent = "";
      this._prevCalc.textContent += this._previousOperand.join("");
      this._previousOperand = [];

      calcBtn.classList.add("active");
    });
  }
}
export default new OperatorView();
