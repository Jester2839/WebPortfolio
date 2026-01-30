// Funkce pro načtení HTML komponenty
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error('Komponentu nelze načíst');
        
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;

        // DŮLEŽITÉ: Pokud používáte překlady, musíme je znovu spustit po načtení patičky
        // Protože v momentě, kdy se stránka načetla, patička tam ještě nebyla.
        const savedLang = localStorage.getItem('selectedLang') || 'en';
        if (typeof changeLanguage === 'function') {
             changeLanguage(savedLang);
        }

    } catch (error) {
        console.error('Chyba:', error);
    }
}

// Spustit načtení patičky po načtení stránky
document.addEventListener('DOMContentLoaded', () => {
    loadComponent('footer-placeholder', 'footer.html'); 
    // Upravte cestu 'footer.html' podle toho, kde soubor leží
});