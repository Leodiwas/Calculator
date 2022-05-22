import Calculator from "./calculatorView.js";

class OperatorView extends Calculator {
  numberOperand() {
    this._parentEl.addEventListener("click", (e) => {
      e.preventDefault();

      const btnEl = e.target.closest(".btn__operator");
      if (!btnEl) return;

      if (this._curCalc.textContent === "0") this._curCalc.textContent = "";
      this._curCalc.textContent += btnEl.textContent;

      this._currentOperend = this._curCalc.textContent;
    });
  }
}
export default new OperatorView();
