let translations: Record<string, any> = {};

async function loadTranslations() {
  try {
    const langs = ['pt', 'en', 'es'];

    for (let lang of langs) {
      const response = await fetch(`/locales/${lang}.json`);
      translations[lang] = await response.json();
    }

    console.log('Traduções carregadas:', translations);
  } catch (error) {
    console.error('Erro ao carregar traduções:', error);
  }
}

function applyTranslation(lang: string) {
  if (!translations[lang]) {
    console.error(`Idioma ${lang} não encontrado`);
    return;
  }

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");

    if (key && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("language", lang);
  document.documentElement.lang = lang;
}

async function initTranslation() {
  await loadTranslations();

  const select = document.getElementById("language") as HTMLSelectElement;

  if (select) {
    select.addEventListener("change", (e) => {
      const target = e.target as HTMLSelectElement;
      applyTranslation(target.value);
    });

    const savedLang = localStorage.getItem("language") || "pt";
    select.value = savedLang;
    applyTranslation(savedLang);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initTranslation);
} else {
  initTranslation();
}