// Seleziona tutte le label che hanno l'attributo data-label
const labels = document.querySelectorAll('.label[data-label]');

labels.forEach(label => {
    // Legge il testo reale dall'attributo data-label (es: "Nome", "Email")
    const text = label.getAttribute('data-label');
    label.innerHTML = ''; // Rimuove eventuale contenuto preesistente nella label
    
    // Trasforma il testo in singoli span, uno per carattere.
    // Ogni span riceve la classe 'char' e una variabile CSS --index per il ritardo nell'animazione.
    text.split('').forEach((char, index) => {
        const span = document.createElement('span');
        span.className = 'char';
        // Variabile CSS usata in style.css per calcolare il delay dell'animazione
        span.style.setProperty('--index', index);
        span.textContent = char;
        label.appendChild(span);
    });
});