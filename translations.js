const translations = {
    en: {
        // Menu
        "menu_home": "Home",
        "menu_summary": "Summary",
        "menu_skills": "Skills",
        "menu_work": "My work",
        "menu_links": "Links",
        
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
        "card1_text": "Provizorni text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "card2_title": "Travels and photographs",
        "card1_text": "Provizorni text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "card2_title": "Programming and website development",
        "card1_text": "Provizorni text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",

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
        "work_text": "Provizorni text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "work_buttn": "See more",
        
        // Footer (společný pro všechny)
        "footer_desc": "Provizorni text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "footer_mail": "Mail me",
        "footer_follow": "Follow me",
        
        // Odkazy a tlačítka
        "back_home": "Back to Home Page",
        "links": "Can find me here",
    },
    cs: {
        // Menu
        "menu_home": "Domů",
        "menu_summary": "O mně",
        "menu_skills": "Dovednosti",
        "menu_work": "Moje práce",
        "menu_links": "Odkazy",
        
        // Hero sekce
        "hero_status": "Volný ke spolupráci",
        "hero_download": "Stáhnout",
        "hero_im": "Jsem",
        "role_1": "Fotograf",
        "role_2": "Web Designér",
        "role_3": "Programátor",
        
        // Summary karty
        "h2_summary": "Co jsem zač...",
        "card1_title": "Začátky a studie",
        "card1_text": "Provizorni text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "card2_title": "Cestování a fotografie",
        "card1_text": "Provizorni text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "card2_title": "Kód a web designe",
        "card1_text": "Provizorni text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",

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
        "work_text": "Provizorni text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "work_buttn": "Další",
        
        // Footer (společný pro všechny)
        "footer_desc": "Provizorni text aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        "footer_mail": "Napiš mi",
        "footer_follow": "Sleduj mě",
        
        // Odkazy a tlačítka
        "back_home": "Zpět na Hlavní stránku",
        "links": "Najdete mě zde",
    }
};


function changeLanguage(lang) {
    // 1. Uložit jazyk do prohlížeče
    localStorage.setItem('selectedLang', lang);

    // 2. Najít všechny elementy s atributem data-lang
    const elements = document.querySelectorAll('[data-lang]');

    elements.forEach(element => {
        const key = element.getAttribute('data-lang');
        
        // Pokud překlad existuje, nahradíme text
        if (translations[lang][key]) {
            // Speciální případ pro inputy (např. placeholder v kontaktním formuláři)
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });

    // 3. Zvýraznit aktivní tlačítko (volitelné stylování)
    updateActiveButton(lang);
}

function updateActiveButton(lang) {
    // Odebrat třídu active všem tlačítkům
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    
    // Přidat třídu tomu, které odpovídá jazyku (toto je zjednodušené)
    // Ideálně dej tlačítkům ID nebo kontroluj text
}

// 4. Načíst jazyk při startu stránky
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLang') || 'en'; // Default je EN
    changeLanguage(savedLang);
});