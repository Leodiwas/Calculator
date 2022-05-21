class Calculator {
    toggleMode() {
        toggleSwitch.addEventListener("click", (e)=>{
            e.preventDefault();
            toggleSwitch.classList.toggle("active");
            body.classList.toggle("active");
            calcContainer.classList.toggle("active");
            totalText.classList.toggle("active");
        });
    }
}

//# sourceMappingURL=index.98d983b0.js.map
