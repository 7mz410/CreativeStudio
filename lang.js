
    (function () {
      var els = document.querySelectorAll('[data-en]');
      els.forEach(function (el) { el.dataset.ar = el.innerHTML; });
      var btn = document.getElementById('lang');
      function set(lang) {
        var en = lang === 'en';
        document.documentElement.lang = lang;
        document.documentElement.dir = en ? 'ltr' : 'rtl';
        var t = document.querySelector('title'); if (t.dataset.en) { if (!t.dataset.ar) t.dataset.ar = t.textContent; document.title = en ? t.dataset.en : t.dataset.ar; }
        els.forEach(function (el) { el.innerHTML = en ? el.dataset.en : el.dataset.ar; });
        btn.textContent = en ? 'العربية' : 'English';
        btn.lang = en ? 'ar' : 'en';
        try { localStorage.setItem('lang', lang); } catch (e) {}
      }
      var saved = null;
      try { saved = localStorage.getItem('lang'); } catch (e) {}
      var start = new URLSearchParams(location.search).get('lang') || saved ||
        (/^ar/i.test(navigator.language || '') ? 'ar' : 'en');
      if (start === 'en') set('en');
      btn.addEventListener('click', function () { set(document.documentElement.lang === 'en' ? 'ar' : 'en'); });
    })();
  