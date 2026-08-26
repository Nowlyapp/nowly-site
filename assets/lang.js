// Language toggle. Preference persists, and the document direction follows,
// so the Arabic pages read right-to-left without a second stylesheet.

(function () {
  const KEY = 'nowly-lang';
  const saved = localStorage.getItem(KEY);
  const initial = saved || (navigator.language.startsWith('ar') ? 'ar' : 'en');

  function apply(lang) {
    document.body.dataset.lang = lang;
    document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    const btn = document.querySelector('.lang');
    if (btn) btn.textContent = lang === 'ar' ? 'English' : 'العربية';
    localStorage.setItem(KEY, lang);
  }

  document.addEventListener('DOMContentLoaded', () => {
    apply(initial);
    const btn = document.querySelector('.lang');
    if (btn) btn.onclick = () => apply(document.body.dataset.lang === 'ar' ? 'en' : 'ar');
  });
})();
