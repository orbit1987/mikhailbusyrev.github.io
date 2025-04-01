function toggleLanguage() {
    const lang = document.documentElement.lang === "en" ? "es" : "en";
    document.documentElement.lang = lang;
    const translations = {
        en: {
            name: "Mikhail Busyrev",
            title: "Software Engineer",
            intro: "I am a communicative, balanced, and results-driven developer with experience in SDKs, mobile applications, and web solutions.",
            "email-label": "Email:",
            "phone-label": "Phone:",
            "location-label": "Location:",
            "contact-btn": "Contact Me",
            "skills-label": "Technology Stack",
            "experience-label": "Work Experience",
            "job1": "Developed SDKs for event tracking and push notifications, created mobile applications for testing SDKs, and implemented A/B testing.",
            "job2": "Worked on logistics systems, smart lockers, visitor management software, and other enterprise solutions.",
            "education-label": "Education",
            "languages-label": "Languages"
        },
        es: {
            name: "Mikhail Busyrev",
            title: "Ingeniero de Software",
            intro: "Soy un desarrollador comunicativo, equilibrado y orientado a resultados con experiencia en SDKs, aplicaciones móviles y soluciones web.",
            "email-label": "Correo electrónico:",
            "phone-label": "Teléfono:",
            "location-label": "Ubicación:",
            "contact-btn": "Contáctame",
            "skills-label": "Stack Tecnológico",
            "experience-label": "Experiencia Laboral",
            "job1": "Desarrollé SDKs para seguimiento de eventos y notificaciones push, creé aplicaciones móviles para probar SDKs e implementé pruebas A/B.",
            "job2": "Trabajé en sistemas logísticos, taquillas inteligentes, software de gestión de visitantes y otras soluciones empresariales.",
            "education-label": "Educación",
            "languages-label": "Idiomas"
        }
    };
    for (const id in translations[lang]) {
        document.getElementById(id).textContent = translations[lang][id];
    }
}