import Calculator from "./calculatorView.js";
import * as el from "../var.js";

class OperatorView extends Calculator {
  _prevoutput;
  _curOutput = 0;

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

      this._calcsOperand.push(this._curCalc.textContent);
      this._calcsOperand.push(calcBtn.textContent);

      this._previousOperand.push(calcBtn.textContent);

      // console.log(
      //   typeof Math.abs(1 - this._calcsOperand.indexOf(calcBtn.textContent)) ===
      //     "number"
      // );

      // console.log(
      //   typeof Math.abs(1 - this._calcsOperand.indexOf(calcBtn.textContent))
      // );

      if (this._curOutput === +this._curCalc.textContent) {
        this._prevCalc.textContent = "";
        this._prevCalc.textContent = +this._curOutput;
      }

      if (this._prevCalc.textContent === "0") this._prevCalc.textContent = "";

      this._prevCalc.textContent += this._previousOperand.join("");
      this._previousOperand = [];

      el.btnOperator.forEach((el) => el.classList.remove("active"));
      calcBtn.classList.add("active");
    });
  }

  equalsOperand() {
    this._parentEl.addEventListener("click", (e) => {
      const equlasBtn = e.target.closest(".btn__equals");
      if (!equlasBtn) return;

      // Calculations
      const output = this._calcsOperand.join("").slice(0, -1);
      this._curCalc.textContent = eval(output);
      this._calcsOperand = [];
      this._curOutput = +this._curCalc.textContent;
    });
  }
}
export default new OperatorView();
