// script.js

document.getElementById("temperatureForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const temp = parseFloat(document.getElementById("suhu").value);
    const conversionType = document.getElementById("conversionType").value;

    if (isNaN(temp)) {
        alert("Masukkan suhu yang valid!");
        return;
    }

    let result, explanation;

    if (conversionType === "toCelsius") {
        result = ((temp - 32) * 5) / 9;
        explanation = `${temp}°F = ${result.toFixed(2)}°C (dikalikan 5/9 setelah dikurangi 32)`;
        document.getElementById("noteContent").textContent =
            "Skala Fahrenheit menetapkan titik beku air pada 32°F dan titik didih pada 212°F. Konversi ke Celsius dilakukan dengan rumus (F - 32) × 5/9.";
    } else {
        result = (temp * 9) / 5 + 32;
        explanation = `${temp}°C = ${result.toFixed(2)}°F (dikalikan 9/5 lalu ditambah 32)`;
        document.getElementById("noteContent").textContent =
            "Skala Celsius didasarkan pada titik beku air (0°C) dan titik didih (100°C). Konversi ke Fahrenheit dilakukan dengan rumus (C × 9/5) + 32.";
    }

    // Tampilkan hasil dan penjelasan
    const resultDiv = document.getElementById("result");
    const explanationDiv = document.getElementById("explanation");

    resultDiv.textContent = `Hasil: ${result.toFixed(2)}°`;
    explanationDiv.textContent = explanation;

    // Tambahkan animasi
    resultDiv.classList.remove("fade-in");
    explanationDiv.classList.remove("fade-in");

    void resultDiv.offsetWidth;
    void explanationDiv.offsetWidth;

    resultDiv.classList.add("fade-in");
    explanationDiv.classList.add("fade-in");
});

// Reset tombol
document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("temperature").value = "";
    document.getElementById("result").textContent = "";
    document.getElementById("explanation").textContent = "";
    document.getElementById("noteContent").textContent = "";
});

// Dark mode toggle
const toggle = document.getElementById("darkModeToggle");
toggle.addEventListener("change", function() {
    document.body.classList.toggle("dark", toggle.checked);
});