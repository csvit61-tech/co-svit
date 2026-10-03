(function () {
  'use strict';
  var m = window.location.pathname.match(/^\/(en|uk|nl)(?:\/|$)/);
  var lang = m ? m[1] : 'en';
  var dict = {
    en: {
      navProjects:'Portfolio',navServices:'Services',navProcess:'Process',navTeam:'Team',navContact:'Contact',consult:'Get a Consultation',heroKicker:'Interior renovation · Svit&Co',introEyebrow:'Interior renovation',introTitle:'Spaces where every detail matters.',introText:'From a complete apartment renovation to a single shower room — careful execution, a clear process and contemporary interior finishing.',portfolioEyebrow:'Portfolio',portfolioText:'The result takes centre stage — large imagery with minimal distraction.',servicesEyebrow:'Services',servicesText:'Our primary service is complete apartment renovation. Individual works can also be commissioned separately.',processEyebrow:'Process',processText:'A clear sequence from the first conversation to completion.',teamEyebrow:'Team',teamText:'The specialists working on your renovation.',advantagesEyebrow:'Approach',faqText:'Short answers before our first conversation.',contactEyebrow:'Start with a conversation',contactTitle:'Planning a renovation?\nLet’s discuss your project.',contactText:'Send a request and choose the most convenient way for us to reply.',nameLabel:'Name *',serviceLabel:'Service',preferredLabel:'How would you like us to contact you?',convenientTimeLabel:'Convenient time to contact you',messageLabel:'Tell us about the project *',photosLabel:'Property photos (up to 5)',consentLabel:'I agree to the processing of my data so Svit&Co can reply. *',send:'Send Request',footerNav:'Navigation',footerSocial:'Social media',footerText:'Apartment renovation and interior finishing.'
    },
    uk: {
      navProjects:'Портфоліо',navServices:'Послуги',navProcess:'Процес',navTeam:'Команда',navContact:'Контакти',consult:'Отримати консультацію',heroKicker:'Внутрішні ремонти · Svit&Co',introEyebrow:'Внутрішні ремонти',introTitle:'Простір, у якому важлива кожна деталь.',introText:'Від комплексного ремонту квартири до окремої душової — акуратна реалізація, зрозумілий процес і сучасне внутрішнє оздоблення.',portfolioEyebrow:'Портфоліо',portfolioText:'Головну роль тут відіграє результат — великі фотографії та мінімум зайвого тексту.',servicesEyebrow:'Послуги',servicesText:'Основний напрямок — ремонт квартир під ключ. Окремі роботи також можна замовити як самостійну послугу.',processEyebrow:'Процес',processText:'Прозора послідовність від першої розмови до завершення робіт.',teamEyebrow:'Команда',teamText:'Фахівці, які працюють над вашим ремонтом.',advantagesEyebrow:'Підхід',faqText:'Короткі відповіді перед першою розмовою.',contactEyebrow:'Почнемо з розмови',contactTitle:'Плануєте ремонт?\nОбговорімо ваш проєкт.',contactText:'Залиште заявку та виберіть зручний спосіб відповіді.',nameLabel:'Ім’я *',serviceLabel:'Послуга',preferredLabel:'Як із вами зв’язатися?',convenientTimeLabel:'Зручний час для зв’язку',messageLabel:'Коротко про завдання *',photosLabel:'Фото приміщення (до 5)',consentLabel:'Погоджуюся на обробку даних для відповіді на заявку. *',send:'Надіслати заявку',footerNav:'Навігація',footerSocial:'Соціальні мережі',footerText:'Ремонт квартир і внутрішнє оздоблення.'
    },
    nl: {
      navProjects:'Portfolio',navServices:'Diensten',navProcess:'Werkwijze',navTeam:'Team',navContact:'Contact',consult:'Vraag een adviesgesprek aan',heroKicker:'Interieurrenovatie · Svit&Co',introEyebrow:'Interieurrenovatie',introTitle:'Ruimtes waar elk detail telt.',introText:'Van een complete appartementrenovatie tot een afzonderlijke doucheruimte — zorgvuldige uitvoering, een helder proces en moderne interieurafwerking.',portfolioEyebrow:'Portfolio',portfolioText:'Het resultaat staat centraal — grote beelden met zo min mogelijk afleiding.',servicesEyebrow:'Diensten',servicesText:'Onze belangrijkste dienst is complete appartementrenovatie. Afzonderlijke werkzaamheden kunnen ook apart worden uitgevoerd.',processEyebrow:'Werkwijze',processText:'Een duidelijk traject van het eerste gesprek tot de oplevering.',teamEyebrow:'Team',teamText:'De vakmensen die aan uw renovatie werken.',advantagesEyebrow:'Onze aanpak',faqText:'Korte antwoorden vóór het eerste gesprek.',contactEyebrow:'Begin met een gesprek',contactTitle:'Plant u een renovatie?\nLaten we uw project bespreken.',contactText:'Stuur een aanvraag en kies hoe wij het beste contact met u kunnen opnemen.',nameLabel:'Naam *',serviceLabel:'Dienst',preferredLabel:'Hoe wilt u gecontacteerd worden?',convenientTimeLabel:'Geschikt moment om contact op te nemen',messageLabel:'Vertel kort over het project *',photosLabel:'Foto’s van de ruimte (max. 5)',consentLabel:'Ik ga akkoord met de verwerking van mijn gegevens zodat Svit&Co kan antwoorden. *',send:'Aanvraag versturen',footerNav:'Navigatie',footerSocial:'Sociale media',footerText:'Appartementrenovatie en interieurafwerking.'
    }
  };
  function setText(el, value) {
    if (!el || value == null) return;
    if (String(value).indexOf('\n') >= 0) {
      while (el.firstChild) el.removeChild(el.firstChild);
      String(value).split('\n').forEach(function (line, i) {
        if (i) el.appendChild(document.createElement('br'));
        el.appendChild(document.createTextNode(line));
      });
    } else {
      el.textContent = value;
    }
  }
  function apply() {
    var d = dict[lang] || dict.en;
    document.documentElement.lang = lang;
    var nodes = document.querySelectorAll('[data-i18n]');
    for (var i=0;i<nodes.length;i++) {
      var k = nodes[i].getAttribute('data-i18n');
      if (d[k]) setText(nodes[i], d[k]);
    }
    var staticText = lang === 'nl' ? {
      heroTitle:'Complete appartementrenovatie',
      heroSubtitle:'Complete appartementrenovatie en interieurafwerking met aandacht voor detail.',
      heroPrimary:'Vraag een adviesgesprek aan',
      heroSecondary:'Bekijk ons werk',
      projectsHeading:'Geselecteerde projecten',
      servicesHeading:'Renovatiediensten',
      processHeading:'Onze werkwijze',
      teamHeading:'Ons team',
      advantagesHeading:'Onze aanpak',
      faqHeading:'Veelgestelde vragen'
    } : lang === 'en' ? {
      heroTitle:'Complete Apartment Renovation',
      heroSubtitle:'Complete apartment renovation and interior finishing with attention to detail.',
      heroPrimary:'Get a Consultation',
      heroSecondary:'View Our Work',
      projectsHeading:'Selected Projects',
      servicesHeading:'Renovation Services',
      processHeading:'How We Work',
      teamHeading:'Our Team',
      advantagesHeading:'Our Approach',
      faqHeading:'Frequently Asked Questions'
    } : null;
    if (staticText) {
      Object.keys(staticText).forEach(function (id) { setText(document.getElementById(id), staticText[id]); });
    }
    var links = document.querySelectorAll('[data-language]');
    for (var j=0;j<links.length;j++) {
      if (links[j].getAttribute('data-language') === lang) links[j].classList.add('active');
      else links[j].classList.remove('active');
    }
  }
  apply();
})();
