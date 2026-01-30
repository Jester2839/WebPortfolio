const translations = {
    en: {
        // Menu
        "menu_home": "Home",
        "menu_summary": "Summary",
        "menu_skills": "Skills",
        "menu_work": "My work",
        "menu_links": "Links",
        // "btn_text": "Cz",
        
        // Hero sekce
        "hero_status": "Open to work",
        "hero_download": "Download",
        "hero_im": "I'm",
        "role_1": "Photographer",
        "role_2": "Web Designer",
        "role_3": "Coder",
        
        // Summary karty
        "h2_summary": "What am I...",
        "card1_title": "Beginnings and studies",
        "card1_text": "Provizorni text aaaaaa aaaaaaa aaaaaaaaaaa aaaa aa aaaaaa aaaaaa aaaaaaaa aaaa aaaa",
        "card2_title": "Travels and photographs",
        "card2_text": "Provizorni text aaaaaa aaaaaaa aaaaaaaaaaa aaaa aa aaaaaa aaaaaa aaaaaaaa aaaa aaaa",
        "card3_title": "Programming and website development",
        "card3_text": "Provizorni text aaaaaa aaaaaaa aaaaaaaaaaa aaaa aa aaaaaa aaaaaa aaaaaaaa aaaa aaaa",

        //skills sekce
        "h2_skills": "What I can do...",
        "h3_languages": "Languages",
        "skills_cz": "Czech",
        "skills_en": "English",
        "h3_edu": "Education & Certificates",
        "skills_record1": "DELTA Střední škola informatiky a ekonomie",
        "skills_subrecord1": "Programming, web development, and graphic design - 2024-present",
        "skills_record2": "Photography workshop in Litomyšl",
        "skills_subrecord2": "May 2025",

        //work card
        "h2_work": "My Work...",
        "work_text": "Provizorni text aaaaaa aaaaaaa aaaaaaaaaaa aaaa aa aaaaaa aaaaaa aaaaaaaa aaaa aaaa",
        "work_buttn": "See more",
        
        // Footer (společný pro všechny)
        "footer_desc": "Provizorni text aaaaaa aaaaaaa aaaaaaaaaaa aaaa aa aaaaaa aaaaaa aaaaaaaa aaaa aaaa",
        "footer_mail": "Mail me",
        "footer_follow": "Follow me",
        
        // Odkazy a tlačítka
        "back_home": "Back to Home Page",
        "links": "Can find me here",

        "photo": "Photos",
        "design": "Designes",
        "designe_idea": "2025 - Web designe idea",
    },
    cs: {
        // Menu
        "menu_home": "Domů",
        "menu_summary": "O mně",
        "menu_skills": "Dovednosti",
        "menu_work": "Moje práce",
        "menu_links": "Odkazy",
        // "btn_text": "En",
        
        // Hero sekce
        "hero_status": "Otevřený spolupráci",
        "hero_download": "Stáhnout",
        "hero_im": "Jsem",
        "role_1": "Fotograf",
        "role_2": "Web Designér",
        "role_3": "Programátor",
        
        // Summary karty
        "h2_summary": "Co jsem zač...",
        "card1_title": "Začátky a studie",
        "card1_text": "Provizorni text aaaaaa aaaaaaa aaaaaaaaaaa aaaa aa aaaaaa aaaaaa aaaaaaaa aaaa aaaa",
        "card2_title": "Cestování a fotografie",
        "card2_text": "Provizorni text aaaaaa aaaaaaa aaaaaaaaaaa aaaa aa aaaaaa aaaaaa aaaaaaaa aaaa aaaa",
        "card3_title": "Kód a web designe",
        "card3_text": "Provizorni text aaaaaa aaaaaaa aaaaaaaaaaa aaaa aa aaaaaa aaaaaa aaaaaaaa aaaa aaaa",

        //skills sekce
        "h2_skills": "Co umím...",
        "h3_languages": "Languages",
        "skills_cz": "Čeština",
        "skills_en": "Angličtina",
        "h3_edu": "Edukace & Certifikáty",
        "skills_record1": "DELTA Střední škola informatiky a ekonomie",
        "skills_subrecord1": "Programování, tvorba webů a grafický designe - 2024-dodnes",
        "skills_record2": "Fotografický plenér v Litomyšli",
        "skills_subrecord2": "Květen 2025",

        //work card
        "h2_work": "Moje práce...",
        "work_text": "Provizorni text aaaaaa aaaaaaa aaaaaaaaaaa aaaa aa aaaaaa aaaaaa aaaaaaaa aaaa aaaa",
        "work_buttn": "Další",
        
        // Footer (společný pro všechny)
        "footer_desc": "Provizorni text aaaaaa aaaaaaa aaaaaaaaaaa aaaa aa aaaaaa aaaaaa aaaaaaaa aaaa aaaa",
        "footer_mail": "Napište mi",
        "footer_follow": "Sledujte mě",
        
        // Odkazy a tlačítka
        "back_home": "Zpět na Hlavní stránku",
        "links": "Najdete mě zde",

        "photo": "Fotky",
        "design": "Grafický designe",
        "designe_idea": "2025 - Návrh webového designu",
    }
};


// Hlavní funkce pro změnu jazyka
function changeLanguage(lang) {
    // 1. Uložíme volbu do localStorage
    localStorage.setItem('selectedLang', lang);

    // 2. Najdeme všechny prvky s atributem data-lang
    const elements = document.querySelectorAll('[data-lang]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-lang');
        // Kontrola, zda překlad existuje
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerText = translations[lang][key];
            }
        }
    });

    // 3. Změna textu v tlačítku (CZ/EN)
    const btnText = document.getElementById('lang-btn-text');
    if (btnText && translations[lang]['btn_text']) {
        btnText.innerText = translations[lang]['btn_text'];
    }
}

// Funkce pro přepínání (volaná kliknutím)
function prepniJazyk() {
    const currentLang = localStorage.getItem('selectedLang') || 'en';
    const newLang = (currentLang === 'en') ? 'cs' : 'en';
    changeLanguage(newLang);
}

// Spuštění po načtení stránky
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en';
    changeLanguage(savedLang);
});