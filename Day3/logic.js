const inputs = document.querySelectorAll(".controls input");

function updateVariables() {
    document.documentElement.style.setProperty(`--${this.name}`, this.value + this.dataset.sizing);
}

inputs.forEach(input => input.addEventListener('change', updateVariables))
inputs.forEach(input => input.addEventListener('mousemove', updateVariables))