function calculate() {
    // Example logic for HOMA-IR: (Glucose * Insulin) / 405
    const glucose = document.getElementById('glucose').value;
    const insulin = document.getElementById('insulin').value;
    
    if (glucose && insulin) {
        const homa = (glucose * insulin) / 405;
        document.getElementById('homa').innerText = `HOMA-IR: ${homa.toFixed(2)}`;
    } else {
        alert("Please enter both Glucose and Insulin values.");
    }
}
