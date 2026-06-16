/* ============================================================
   FABRYKA SMAKU — Real restaurant data (scraped June 2026)
   Address: Armii Krajowej 35 lok. 1/B, 09-410 Płock
   Phone: +48 24 351 20 88
   ============================================================ */

export const RESTAURANT = {
  name: 'Fabryka Smaku',
  tagline: 'Gdzie domowa kuchnia staje się sztuką',
  tagline_en: 'Where home cooking becomes art',
  address: 'Armii Krajowej 35 lok. 1/B',
  city: 'Płock',
  postcode: '09-410',
  phone: '+48 24 351 20 88',
  email: 'fabrykasmaku.plock@wp.pl',
  facebook: 'https://www.facebook.com/fabrykasmakuplock/',
  website: 'fabrykasmakuplock.pl',
  hours: 'Pon.–Ndz.  12:00 – 18:00',
  hoursDetailed: [
    { day: 'Poniedziałek – Niedziela', hours: '12:00 – 18:00' },
  ],
  lat: 52.5463,
  lng: 19.7065,
  values: [
    { label: 'Świeżość', description: 'Produkty od lokalnych dostawców, każdego dnia na nowo.' },
    { label: 'Jakość', description: 'Starannie dobrane składniki, bez kompromisów.' },
    { label: 'Tradycja', description: 'Smaki, które znasz z domu — podane z klasą.' },
  ],
};

export const MENU = [
  {
    id: 'przekaski',
    chapter: '01',
    title: 'Przekąski',
    subtitle: 'Na dobry początek',
    items: [
      {
        name: 'Frytki z ketchupem',
        description: 'Chrupiące frytki podane z klasycznym ketchupem.',
        price: 16,
        tags: [],
      },
      {
        name: 'Frytki z batatów z sosem czosnkowym',
        description: 'Słodkie frytki z batatów podane z aromatycznym sosem czosnkowym.',
        price: 21,
        tags: ['popular'],
      },
    ],
  },
  {
    id: 'nalesniki',
    chapter: '02',
    title: 'Naleśniki',
    subtitle: 'Ekspresyjne i sycące',
    items: [
      {
        name: 'Naleśniki z szarpaną wieprzowiną',
        description: 'Delikatne naleśniki nadziewane szarpaną wieprzowiną, jalapeños, karmelizowaną cebulą i sosem BBQ.',
        price: 33,
        tags: ['popular', 'bestseller'],
        allergens: '1,3,7',
      },
      {
        name: 'Naleśniki z camembertem i warzywami',
        description: 'Zapiekane naleśniki z kremowym serem camembert i sezonowymi warzywami.',
        price: 33,
        tags: ['vegetarian'],
        allergens: '1,3,7',
      },
    ],
  },
  {
    id: 'salatki',
    chapter: '03',
    title: 'Sałatki',
    subtitle: 'Lekko i świeżo',
    items: [
      {
        name: 'Sałatka z kurczakiem',
        description: 'Świeże liście sałaty, soczysty kurczak, warzywa sezonowe i nasz sos domowy.',
        price: 32,
        tags: [],
      },
      {
        name: 'Sałatka z serem Halloumi',
        description: 'Grillowany ser Halloumi na świeżej sałacie z suszonymi pomidorami i rukolą.',
        price: 35,
        tags: ['new', 'vegetarian'],
      },
    ],
  },
  {
    id: 'burgery',
    chapter: '04',
    title: 'Burgery',
    subtitle: 'W świeżych bułkach na zakwasie',
    items: [
      {
        name: 'Burger z wieprzowiną',
        description: 'Bułka na zakwasie, kotlet wieprzowy, ser, sos chrzanowy, sałata, czerwona cebula, kiszony ogórek, pomidor.',
        price: 33,
        tags: ['popular'],
      },
      {
        name: 'Burger z panierowanym kurczakiem',
        description: 'Bułka na zakwasie, panierowane paski kurczaka, sos miodowo-musztardowy, sałata, czerwona cebula, kiszony ogórek, pomidor, rukola.',
        price: 33,
        tags: ['popular'],
      },
      {
        name: 'Burger z serem Halloumi',
        description: 'Bułka na zakwasie, grillowany ser Halloumi, sos czosnkowy, sałata, karmelizowana czerwona cebula, suszone pomidory, rukola.',
        price: 35,
        tags: ['new', 'vegetarian'],
      },
    ],
  },
  {
    id: 'dania-glowne',
    chapter: '05',
    title: 'Dania Główne',
    subtitle: 'Serce naszego menu',
    items: [
      {
        name: 'Stripsy z kurczaka',
        description: 'Chrupiące paski z kurczaka podane z frytkami i surówką.',
        price: 32,
        tags: ['popular'],
      },
      {
        name: 'Gyros drobiowy z frytkami',
        description: 'Aromatyczny gyros z kurczaka z warzywami, sosem czosnkowym i frytkami.',
        price: 34,
        tags: ['popular'],
        allergens: '6,7',
      },
      {
        name: 'Pierś z kurczaka z pomidorami',
        description: 'Soczysta pierś z kurczaka duszona z pomidorami, podana z puree ziemniaczanym.',
        price: 34,
        tags: [],
      },
      {
        name: 'Pierś z kurczaka zapiekana z warzywami i serem',
        description: 'Pierś z kurczaka zapiekana z sezonowymi warzywami i stopionym serem. Podana z puree.',
        price: 39,
        tags: ['popular'],
      },
      {
        name: 'Kotlet schabowy',
        description: 'Klasyczny kotlet schabowy w złocistej panierce, z frytkami i surówką.',
        price: 34,
        tags: [],
        allergens: '1,3,7',
      },
      {
        name: 'Kotlet po zbójnicku',
        description: 'Kotlet schabowy z frytkami, surówką i sekretnymi ziołami zbójnickimi.',
        price: 39,
        tags: ['bestseller'],
        allergens: '1,3,7',
      },
      {
        name: 'Kotlet po myśliwsku',
        description: 'Kotlet schabowy w sosie grzybowym z plackami ziemniaczanymi. Pełnia leśnych aromatów.',
        price: 45,
        tags: ['new'],
        allergens: '1,3,7',
      },
      {
        name: 'Karkówka z sosem grzybowym',
        description: 'Soczysta karkówka wieprzowa w bogatym sosie grzybowym, podana z puree i surówką.',
        price: 45,
        tags: ['popular'],
      },
    ],
  },
  {
    id: 'danie-dnia',
    chapter: '06',
    title: 'Danie Dnia',
    subtitle: 'Wtorek — oferta specjalna',
    items: [
      {
        name: 'Zupa ogórkowa z kiełbasą',
        description: 'Tradycyjna zupa ogórkowa z plastrami kiełbasy. Rozgrzewająca i sycąca.',
        price: 11,
        tags: ['tuesday'],
      },
      {
        name: 'Kurczak panierowany',
        description: 'Zestaw dnia — kurczak panierowany z surówką i frytkami lub puree.',
        price: 26,
        tags: ['tuesday'],
        priceFrom: true,
      },
    ],
  },
  {
    id: 'desery',
    chapter: '07',
    title: 'Desery',
    subtitle: 'Słodkie finały',
    items: [
      {
        name: 'Panna Cotta z musem malinowym',
        description: 'Klasyczna panna cotta podana z intensywnym musem z malin.',
        price: 15,
        tags: [],
      },
      {
        name: 'Milkshake Oreo',
        description: 'Kremowy shake z ciasteczkami Oreo. 400 ml.',
        price: 20,
        tags: ['popular'],
      },
      {
        name: 'Milkshake Kinder Bueno',
        description: 'Aksamitny shake z Kinder Bueno. 400 ml.',
        price: 20,
        tags: [],
      },
      {
        name: 'Milkshake Pistacja z maliną',
        description: 'Wykwintne połączenie pistacji i malin. 400 ml.',
        price: 20,
        tags: ['popular'],
      },
      {
        name: 'Milkshake czekoladowy',
        description: 'Intensywny shake czekoladowy. 400 ml.',
        price: 17,
        tags: [],
      },
      {
        name: 'Milkshake waniliowy',
        description: 'Klasyczny shake waniliowy. 400 ml.',
        price: 17,
        tags: [],
      },
    ],
  },
  {
    id: 'napoje',
    chapter: '08',
    title: 'Napoje',
    subtitle: 'Do każdej chwili',
    items: [
      {
        name: 'Sok pomarańczowy świeżo wyciskany',
        description: 'Świeżo wyciskany sok pomarańczowy. 250 ml.',
        price: 12,
        tags: ['popular'],
      },
      {
        name: 'Ciechocinka oranżada',
        description: 'Klasyczna oranżada Ciechocinka — czerwona, cytrynowa lub pomarańczowa. 330 ml.',
        price: 7,
        tags: [],
      },
      {
        name: 'Woda Krystynka',
        description: 'Woda mineralna. 330 ml.',
        price: 7,
        tags: [],
      },
      {
        name: 'Coca-Cola',
        description: 'Coca-Cola lub Coca-Cola Zero. Puszka 330 ml.',
        price: 9,
        tags: [],
      },
      {
        name: 'Lech Free 0%',
        description: 'Piwo bezalkoholowe Lech Free. 330 ml.',
        price: 9,
        tags: [],
      },
    ],
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Laura K.',
    text: 'Najlepszy barszcz czerwony w Płocku. Serio — nigdzie w mieście nie ma takiego. Musi być na liście obowiązków każdego płocczanina!',
    rating: 5,
    source: 'Strona restauracji',
  },
  {
    id: 2,
    name: 'Robert W.',
    text: 'Pysznie i zawsze na czas. Dowóz zawsze ciepły, jedzenie zawsze świetnie zapakowane. Zamawiam regularnie i jeszcze mnie nie zawiedli.',
    rating: 5,
    source: 'Strona restauracji',
  },
  {
    id: 3,
    name: 'Hanna M.',
    text: 'Pyszne jedzenie i duże porcje! Kotlet po zbójnicku to absolutny must-have. Wrócimy na pewno.',
    rating: 5,
    source: 'Strona restauracji',
  },
  {
    id: 4,
    name: 'Mariusz T.',
    text: 'Pyszne burgery — jeden z lepszych w Płocku. Bułka na zakwasie robi całą różnicę. Polecam szczególnie z panierowanym kurczakiem.',
    rating: 5,
    source: 'Strona restauracji',
  },
  {
    id: 5,
    name: 'Inga R.',
    text: 'Wszystko OK. Smacznie i zdrowo! Milkshake pistacjowo-malinowy to małe odkrycie. Polecam!',
    rating: 5,
    source: 'Strona restauracji',
  },
  {
    id: 6,
    name: 'Hanna S.',
    text: 'Szybka dostawa, smaczne jedzenie. Naleśniki z szarpaną wieprzowiną — rewelacyjne. Prawdziwy domowy smak.',
    rating: 5,
    source: 'Strona restauracji',
  },
];

export const ABOUT_STORY = {
  eyebrow: 'Nasza Historia',
  heading: 'Z pasji do domowego gotowania',
  paragraphs: [
    'Fabryka Smaku powstała z prostego przekonania: najlepsza kuchnia to ta, która smakuje jak w domu — uczciwa, sycąca, bez kompromisów. Dlatego każdego dnia pracujemy nad tym, by nasze dania były nie tylko pyszne, ale i przygotowane z najlepszych składników od lokalnych dostawców.',
    'Świeżość, jakość i tradycja — to trzy wartości, które napędzają naszą kuchnię. Nie szukamy skrótów. Szarpaną wieprzowinę przygotowujemy powoli, bułki do burgerów zamawiamy od lokalnego piekarza, a milkshaki robimy na prawdziwych składnikach.',
    'Niezależnie od tego, czy jadasz u nas na miejscu, czy zamawiasz dostawę — chcemy, żebyś poczuł smak domowej kuchni. Tej, za którą się tęskni.',
  ],
  signature: 'Adrian Strzelczak\nZałożyciel, Fabryka Smaku',
};
