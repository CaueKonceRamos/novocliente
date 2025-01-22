document.addEventListener("DOMContentLoaded", () => {
    const incapacidadeSelect = document.getElementById("incapacidade");

    incapacidadeSelect.addEventListener("change", () => {
        const value = incapacidadeSelect.value;
        const fields = document.querySelectorAll(".incapacidade-field");
        fields.forEach(field => {
            field.style.display = value === "sim" ? "block" : "none";
            field.querySelectorAll("input, select").forEach(input => {
                input.required = value === "sim";
            });
        });
    });
});
