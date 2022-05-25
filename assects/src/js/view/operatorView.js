import Calculator from "./calculatorView.js";
import * as el from "../var.js";

class OperatorView extends Calculator {
  output;

  constructor() {
    super();
    this.calcOperand();
    this.equalsOperand();
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
      this._calcsOperand.push(this._curCalc.textContent);

      if (calcBtn.textContent !== "=")
        this._calcsOperand.push(calcBtn.textContent);

      if (this._prevCalc.textContent === "0") this._prevCalc.textContent = "";
      this._prevCalc.textContent += this._previousOperand.join("");
      this._previousOperand = [];

      calcBtn.classList.add("active");
    });
  }

  equalsOperand() {
    this._parentEl.addEventListener("click", (e) => {
      const equlasBtn = e.target.closest(".btn__equals");
      if (!equlasBtn) return;

      // Calculations
      if (equlasBtn.textContent === "=") {
        this.output = this._calcsOperand
          .map((n) => Number(n))
          .filter((n) => (typeof n === "number" ? n : "operator"))
          .reduce((acc, val) => acc + val, 0);
        this._curCalc.textContent = this.output;
        console.log(this.output);
      }
    });
  }
}
export default new OperatorView();
