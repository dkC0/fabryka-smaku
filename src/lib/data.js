/* ============================================================
   FABRYKA SMAKU — Data (scraped from fabrykasmakuplock.pl, June 2026)
   Address: Armii Krajowej 35 lok. 1/B, 09-410 Płock
   ============================================================ */

export const RESTAURANT = {
  name: 'Fabryka Smaku',
  tagline: 'Gdzie domowa kuchnia staje się sztuką',
  address: 'Armii Krajowej 35 lok. 1/B',
  city: 'Płock',
  postcode: '09-410',
  phone: '+48 24 351 20 88',
  email: 'fabrykasmaku.plock@wp.pl',
  facebook: 'https://www.facebook.com/fabrykasmakuplock/',
  website: 'fabrykasmakuplock.pl',
  hours: 'Pon.–Ndz.  12:00–18:00',
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
        price: 16,
      },
      {
        name: 'Frytki z batatów z sosem czosnkowym',
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
        description: 'z sosem barbecue, jalapeno i karmelizowaną cebulą, zapiekane z serem (400g)',
        price: 33,
        tags: ['bestseller'],
        allergens: '1, 3, 7',
      },
      {
        name: 'Naleśniki z camembertem i warzywami',
        description: 'zapiekane z serem (400g)',
        price: 33,
        tags: ['vegetarian'],
        allergens: '1, 3, 7',
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
        description: 'pierś z kurczaka z pieca, sałaty, winegret, pomidor, czerwona cebula, ogórek konserwowy',
        price: 32,
      },
      {
        name: 'Sałatka z serem Halloumi',
        description: 'grillowany ser Halloumi, sałaty, winegret, pomidorki koktajlowe, czerwona cebula, suszone pomidory, czarne oliwki',
        price: 35,
        tags: ['vegetarian'],
      },
    ],
  },
  {
    id: 'burgery',
    chapter: '04',
    title: 'Burgery',
    subtitle: 'W bułkach na zakwasie od rzemieślniczego piekarza',
    items: [
      {
        name: 'Burger z wieprzowiną',
        description: 'bułka na zakwasie, kotlet wieprzowy, ser, sos chrzanowy, sałata, czerwona cebula, ogórek konserwowy, pomidor',
        price: 33,
        tags: ['popular'],
      },
      {
        name: 'Burger z panierowanym kurczakiem',
        description: 'bułka na zakwasie, stripsy z kurczaka, sos miodowo-musztardowy, sałata, czerwona cebula, ogórek konserwowy, pomidor, rukola',
        price: 33,
        tags: ['popular'],
      },
      {
        name: 'Burger z serem Halloumi',
        description: 'bułka na zakwasie, grillowany ser Halloumi, sos czosnkowy, sałata, karmelizowana czerwona cebula, suszone pomidory, rukola',
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
        description: 'z frytkami i surówką (350g)',
        price: 32,
        tags: ['popular'],
      },
      {
        name: 'Gyros drobiowy z frytkami',
        description: 'z surówką i sosem czosnkowym',
        price: 34,
        tags: ['popular'],
        allergens: '6, 7',
      },
      {
        name: 'Pierś z kurczaka z pomidorami',
        description: 'z puree ziemniaczanym i surówką (400g)',
        price: 34,
      },
      {
        name: 'Pierś z kurczaka zapiekana z warzywami i serem',
        description: 'z puree ziemniaczanym i surówką',
        price: 39,
        tags: ['popular'],
      },
      {
        name: 'Kotlet schabowy',
        description: 'z puree ziemniaczanym i surówką',
        price: 34,
        allergens: '1, 3, 7',
      },
      {
        name: 'Kotlet po zbójnicku',
        description: 'z frytkami i surówką',
        price: 39,
        tags: ['bestseller'],
        allergens: '1, 3, 7',
      },
      {
        name: 'Kotlet po myśliwsku',
        description: 'kotlet schabowy, placki ziemniaczane, sos grzybowy, surówka',
        price: 45,
        tags: ['new'],
        allergens: '1, 3, 7',
      },
      {
        name: 'Karkówka z sosem grzybowym',
        description: 'z puree ziemniaczanym i surówką',
        price: 45,
        tags: ['popular'],
      },
    ],
  },
  {
    id: 'dodatki',
    chapter: '06',
    title: 'Dodatki',
    subtitle: 'Do każdego dania',
    items: [
      { name: 'Surówka', price: 8 },
      { name: 'Sos czosnkowy (80 ml)', price: 3 },
      { name: 'Ketchup (80 ml)', price: 2 },
      { name: 'Smalec z mięsem i cebulką (słoik 180 g)', price: 15 },
    ],
  },
  {
    id: 'danie-dnia',
    chapter: '07',
    title: 'Danie Dnia',
    subtitle: 'Wtorek — oferta specjalna',
    items: [
      {
        name: 'Zupa ogórkowa',
        description: 'z kiełbasą',
        price: 11,
        tags: ['tuesday'],
      },
      {
        name: 'Gulasz wieprzowy',
        description: 'z kaszą gryczaną i surówką',
        price: 26,
        priceFrom: true,
        tags: ['tuesday'],
      },
      {
        name: 'Kurczak panierowany',
        description: 'z puree ziemniaczanym i surówką',
        price: 26,
        priceFrom: true,
        tags: ['tuesday'],
      },
      {
        name: 'Makaron z sosem pieczarkowym',
        description: 'z serem Grana Padano',
        price: 26,
        priceFrom: true,
        tags: ['tuesday', 'vegetarian'],
      },
    ],
  },
  {
    id: 'desery',
    chapter: '08',
    title: 'Desery',
    subtitle: 'Słodkie finały',
    items: [
      {
        name: 'Panna Cotta',
        description: 'z musem malinowym',
        price: 15,
      },
      {
        name: 'Milkshake Oreo (400 ml)',
        description: 'z bitą śmietaną',
        price: 20,
        tags: ['popular'],
      },
      {
        name: 'Milkshake Kinder Bueno (400 ml)',
        description: 'z bitą śmietaną',
        price: 20,
      },
      {
        name: 'Milkshake Pistacja z Maliną (400 ml)',
        description: 'z bitą śmietaną',
        price: 20,
        tags: ['popular'],
      },
      {
        name: 'Milkshake czekoladowy (400 ml)',
        description: 'z bitą śmietaną',
        price: 17,
      },
      {
        name: 'Milkshake waniliowy (400 ml)',
        description: 'z bitą śmietaną',
        price: 17,
      },
    ],
  },
  {
    id: 'napoje',
    chapter: '09',
    title: 'Napoje',
    subtitle: 'Do każdej chwili',
    items: [
      { name: 'Lemoniada (400 ml)', price: 15 },
      { name: 'Sok pomarańczowy świeżo wyciskany (250 ml)', price: 12, tags: ['popular'] },
      { name: 'Kompot (250 ml)', price: 5 },
      { name: 'Oranżada Ciechocinka czerwona (330 ml)', price: 7 },
      { name: 'Oranżada Ciechocinka cytrynowa (330 ml)', price: 7 },
      { name: 'Oranżada Ciechocinka pomarańczowa (330 ml)', price: 7 },
      { name: 'Woda Krystynka (330 ml)', price: 7 },
      { name: 'Lech Free 0% (330 ml)', price: 9 },
      { name: 'Coca-Cola (330 ml)', price: 9 },
      { name: 'Coca-Cola Zero (330 ml)', price: 9 },
    ],
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Laura K.',
    text: 'Najlepszy barszcz czerwony w Płocku. Serio — nigdzie w mieście nie ma takiego. Musi być na liście obowiązków każdego płocczanina.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Hanna M.',
    text: 'Pyszne jedzenie i duże porcje. Kotlet po zbójnicku to absolutny must-have. Wrócimy na pewno.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Mariusz T.',
    text: 'Pyszne burgery — jeden z lepszych w Płocku. Bułka na zakwasie robi całą różnicę.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Robert W.',
    text: 'Dowóz zawsze ciepły, jedzenie zawsze świetnie zapakowane. Zamawiam regularnie i jeszcze mnie nie zawiedli.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Hanna S.',
    text: 'Naleśniki z szarpaną wieprzowiną — rewelacyjne. Prawdziwy domowy smak, którego szukasz.',
    rating: 5,
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
