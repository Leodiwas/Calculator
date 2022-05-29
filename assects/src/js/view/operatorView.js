import Calculator from "./calculatorView.js";
import * as el from "../var.js";

class OperatorView extends Calculator {
  _curOutput = 0;

  constructor() {
    super();
    this.calcOperand();
    this.equalsOperand();
  }

  _removeActiveClass() {
    // remove active class on all the operatos
    return el.btnOperator.forEach((el) => el.classList.remove("active"));
  }

  numberOperand() {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();

      // btnEl = numbers (1,2,3...0)
      const btnEl = e.target.closest(".btn__number");
      if (!btnEl) return;

      if (this._curCalc.textContent === "0") this._curCalc.textContent = "";

      this._curCalc.textContent += btnEl.textContent;

      this._currentOperend = this._curCalc.textContent;
      this._previousOperand.push(btnEl.textContent);

      el.btnOperator.forEach((el) => {
        // check if the element contains active class
        if (el.classList.contains("active")) {
          this._curCalc.textContent = "";
          this._curCalc.textContent += this._previousOperand.join("");
        }
      });

      this._removeActiveClass();
    });
  }

  calcOperand() {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();

      // calcBtn = operators (+,-,*,%,.)
      const calcBtn = e.target.closest(".btn__operator");
      if (!calcBtn) return;

      this._calcsOperand.push(Number(this._curCalc.textContent));

      // same operator will not be added again
      if (!calcBtn.classList.contains("active")) {
        this._calcsOperand.push(calcBtn.textContent);
        this._previousOperand.push(calcBtn.textContent);
      } else this._calcsOperand.push(calcBtn.textContent);

      if (this._curOutput === +this._curCalc.textContent) {
        this._prevCalc.textContent = "";
        this._prevCalc.textContent = +this._curOutput;
      }

      if (this._prevCalc.textContent === "0") this._prevCalc.textContent = "";

      this._prevCalc.textContent += this._previousOperand.join("");
      this._previousOperand = [];

      // remove active class on all the operatos
      this._removeActiveClass();

      // add active class on the current operator
      calcBtn.classList.add("active");
    });
  }

  equalsOperand() {
    this._parentEl.addEventListener("click", (e) => {
      const equlasBtn = e.target.closest(".btn__equals");
      if (!equlasBtn) return;

      // Calculations
      console.log(this._calcsOperand);

      const output = eval(this._calcsOperand.join("").slice(0, -1));

      // check if the number contains decimal
      if (output % 1 !== 0) this._curCalc.textContent = output.toFixed(2);
      else this._curCalc.textContent = output;

      this._calcsOperand = [];
      this._curOutput = +this._curCalc.textContent;
    });
  }
}
export default new OperatorView();
