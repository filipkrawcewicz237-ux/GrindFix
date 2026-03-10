// Site-wide constants
export const SITE_URL = "https://grindfix.pl";
export const SITE_NAME = "GRINDFIX";

// NAP
export const NAP = {
    name: "GRINDFIX Serwis Rowerowy",
    address: {
        street: "ul. Rowerowa 15/7",
        city: "Warszawa",
        postalCode: "00-950",
        country: "PL",
    },
    phone: "+48572456397",
    phoneFormatted: "+48 572 456 397",
    email: "kontakt@grindfix.pl",
    lat: 52.2297,
    lng: 21.0122,
};

// Services list
export const SERVICES = [
    {
        slug: "serwis-rowerowy-warszawa",
        label: "Serwis Rowerowy",
        icon: "🔧",
        short: "Kompleksowy serwis rowerów wszystkich marek.",
    },
    {
        slug: "naprawa-rowerow-warszawa",
        label: "Naprawa Rowerów",
        icon: "⚙️",
        short: "Szybka naprawa awarii i mechanicznych usterek.",
    },
    {
        slug: "przeglad-roweru-warszawa",
        label: "Przegląd Roweru",
        icon: "🔍",
        short: "Pełny przegląd przed sezonem i po sezonie.",
    },
    {
        slug: "serwis-roweru-elektrycznego-warszawa",
        label: "Serwis E-Bike",
        icon: "⚡",
        short: "Specjalistyczny serwis rowerów elektrycznych.",
    },
    {
        slug: "mobilny-serwis-rowerowy-warszawa",
        label: "Mobilny Serwis",
        icon: "🚐",
        short: "Technik przyjedzie pod Twój adres w Warszawie.",
    },
    {
        slug: "budowa-kol-rowerowych-warszawa",
        label: "Budowa Kół",
        icon: "⭕",
        short: "Profesjonalna budowa i sznurowanie kół.",
    },
    {
        slug: "serwis-amortyzatora-warszawa",
        label: "Serwis Amortyzatora",
        icon: "🏔️",
        short: "Serwis i regulacja amortyzatorów MTB.",
    },
];

// Blog articles data
export const BLOG_ARTICLES = [
    {
        slug: "ile-kosztuje-przeglad-roweru",
        title: "Ile kosztuje przegląd roweru? Cennik 2025",
        excerpt: "Sprawdź aktualne ceny przeglądu roweru w Warszawie i dowiedz się, co zawiera pełny przegląd serwisowy.",
        date: "2025-03-10",
        updatedDate: "2025-11-15",
        author: "marcin-kowalski",
        readingTime: 7,
        category: "Cennik",
        image: "/images/blog/przeglad-roweru-cennik.jpg",
    },
    {
        slug: "regulacja-przerzutek-cena",
        title: "Regulacja przerzutek – koszt i kiedy warto to zrobić",
        excerpt: "Ile kosztuje regulacja przerzutek? Kiedy trzeba ją wykonać i jak rozpoznać, że przerzutki wymagają serwisu.",
        date: "2025-03-20",
        updatedDate: "2025-10-05",
        author: "marcin-kowalski",
        readingTime: 6,
        category: "Naprawa",
        image: "/images/blog/regulacja-przerzutek.jpg",
    },
    {
        slug: "wymiana-lozysk-w-piastce-cena",
        title: "Wymiana łożysk w piaście – cena i opis usługi",
        excerpt: "Kiedy wymienić łożyska w piaście i ile to kosztuje? Poradnik dla rowerzystów szukających serwisu.",
        date: "2025-04-02",
        updatedDate: "2025-10-01",
        author: "anna-wisniewska",
        readingTime: 5,
        category: "Naprawa",
        image: "/images/blog/wymiana-lozysk.jpg",
    },
    {
        slug: "serwis-amortyzatora-jak-czesto",
        title: "Jak często serwisować amortyzator rowerowy?",
        excerpt: "Amortyzator to jeden z kluczowych elementów roweru górskiego. Dowiedz się, jak często trzeba go serwisować.",
        date: "2025-04-15",
        updatedDate: "2025-09-20",
        author: "marcin-kowalski",
        readingTime: 8,
        category: "MTB",
        image: "/images/blog/serwis-amortyzatora.jpg",
    },
    {
        slug: "jak-dbac-o-rower-elektryczny",
        title: "Jak dbać o rower elektryczny? Kompletny poradnik",
        excerpt: "E-bike wymaga szczególnej pielęgnacji. Poznaj zasady eksploatacji, ładowania i serwisowania roweru elektrycznego.",
        date: "2025-05-01",
        updatedDate: "2025-10-10",
        author: "anna-wisniewska",
        readingTime: 9,
        category: "E-Bike",
        image: "/images/blog/rower-elektryczny-poradnik.jpg",
    },
    {
        slug: "kiedy-wymienic-lancuch-roweru",
        title: "Kiedy wymienić łańcuch roweru? Oznaki zużycia",
        excerpt: "Regularnie sprawdzaj swój łańcuch. Zużyty łańcuch niszczy kasetę i przerzutki – dowiedz się jak go sprawdzić.",
        date: "2025-05-12",
        updatedDate: "2025-09-15",
        author: "marcin-kowalski",
        readingTime: 5,
        category: "Naprawa",
        image: "/images/blog/wymiana-lancucha.jpg",
    },
    {
        slug: "budowa-kol-rowerowych-poradnik",
        title: "Budowa kół rowerowych – czym się różni od kupna gotowych?",
        excerpt: "Ręcznie budowane koła rowerowe vs gotowe – różnice w trwałości, masie i cenie. Kiedy warto zainwestować?",
        date: "2025-06-01",
        updatedDate: "2025-10-20",
        author: "anna-wisniewska",
        readingTime: 10,
        category: "Koła",
        image: "/images/blog/budowa-kol.jpg",
    },
    {
        slug: "mobilny-serwis-rowerowy-czy-warto",
        title: "Mobilny serwis rowerowy – czy to się opłaca?",
        excerpt: "Technik przyjeżdża do Ciebie i naprawia rower na miejscu. Sprawdź co obejmuje mobilny serwis rowerowy.",
        date: "2025-06-15",
        updatedDate: "2025-11-01",
        author: "marcin-kowalski",
        readingTime: 6,
        category: "Mobilny Serwis",
        image: "/images/blog/mobilny-serwis.jpg",
    },
    {
        slug: "przeglad-roweru-przed-sezonem",
        title: "Przegląd roweru przed sezonem – co sprawdzić?",
        excerpt: "Lista kontrolna przed wyjazdem w nowym sezonie. Co serwisant sprawdza podczas przeglądu i dlaczego warto go zrobić.",
        date: "2025-07-01",
        updatedDate: "2025-11-10",
        author: "anna-wisniewska",
        readingTime: 7,
        category: "Przegląd",
        image: "/images/blog/przeglad-przed-sezonem.jpg",
    },
    {
        slug: "najczestsze-awarie-rowerow",
        title: "10 najczęstszych awarii rowerów w Warszawie",
        excerpt: "Przebite opony, zerwany łańcuch, problem z przerzutkami – poznaj najczęstsze awarie i jak im zapobiegać.",
        date: "2025-07-15",
        updatedDate: "2025-10-25",
        author: "marcin-kowalski",
        readingTime: 8,
        category: "Naprawa",
        image: "/images/blog/najczestsze-awarie.jpg",
    },
    {
        slug: "serwis-hamulcow-hydraulicznych",
        title: "Serwis hamulców hydraulicznych – kiedy i jak?",
        excerpt: "Hamulce hydrauliczne regenerują olej co roku. Sprawdź kiedy serwisować hamulce i ile to kosztuje w Warszawie.",
        date: "2025-08-01",
        updatedDate: "2025-10-30",
        author: "anna-wisniewska",
        readingTime: 7,
        category: "Hamulce",
        image: "/images/blog/hamulce-hydrauliczne.jpg",
    },
    {
        slug: "jak-wybrac-serwis-rowerowy",
        title: "Jak wybrać dobry serwis rowerowy w Warszawie?",
        excerpt: "Na co zwrócić uwagę wybierając serwis rowerowy? Opinie, specjalizacja, czas oczekiwania i przejrzyste ceny.",
        date: "2025-08-15",
        updatedDate: "2025-11-05",
        author: "marcin-kowalski",
        readingTime: 6,
        category: "Poradnik",
        image: "/images/blog/jak-wybrac-serwis.jpg",
    },
];

// Authors
export const AUTHORS = [
    {
        slug: "marcin-kowalski",
        name: "Marcin Kowalski",
        role: "Główny Mechanik",
        bio: "Marcin jest głównym mechanikiem w GRINDFIX z ponad 12-letnim doświadczeniem w serwisowaniu rowerów. Specjalizuje się w rowerach górskich (MTB), szosowych i elektrycznych. Ukończył kurs mechaniki rowerowej Barnett Bicycle Institute oraz szkolenia Shimano i SRAM. Pasjonat kolarstwa górskiego – regularnie uczestniczy w zawodach XCO. W GRINDFIX odpowiada za jakość serwisu, szkolenie teams i budowę kół rowerowych na zamówienie. Każdy rower traktuje indywidualnie i z pełnym zaangażowaniem.",
        specialization: "Rowery MTB, rowery szosowe, budowa kół",
        avatar: "/images/authors/marcin-kowalski.jpg",
        social: {
            instagram: "https://instagram.com/grindfix_warszawa",
            facebook: "https://facebook.com/grindfix",
        },
    },
    {
        slug: "anna-wisniewska",
        name: "Anna Wiśniewska",
        role: "Specjalistka E-Bike",
        bio: "Anna jest certyfikowaną specjalistką serwisu rowerów elektrycznych w GRINDFIX. Posiada certyfikat Bosch eBike Systems oraz szkolenia Shimano Steps i Yamaha. Przed dołączeniem do GRINDFIX pracowała jako testerka rowerów elektrycznych dla jednego z polskich dystrybutorów. Szczególnie interesuje się mobilnością miejską i rozwojem infrastruktury rowerowej w Warszawie. W wolnym czasie aktywnie uczestniczy w akcjach Masa Krytyczna i promuje transport rowerowy jako alternatywę dla samochodu.",
        specialization: "Rowery elektryczne, mobilny serwis, miejskie e-bike",
        avatar: "/images/authors/anna-wisniewska.jpg",
        social: {
            instagram: "https://instagram.com/grindfix_warszawa",
        },
    },
];

// Testimonials
export const TESTIMONIALS = [
    {
        name: "Piotr Malinowski",
        location: "Mokotów",
        rating: 5,
        text: "Przegląd roweru zrobiony ekspresowo i w super cenie. Technik wyjaśnił każdy problem, nie wcisnął nic niepotrzebnego. Polecam bez zastrzeżeń!",
        date: "2025-10-15",
    },
    {
        name: "Karolina Wróbel",
        location: "Ursynów",
        rating: 5,
        text: "Korzystam z mobilnego serwisu GRINDFIX od roku. Technik przyjeżdża pod blok i naprawia rower na miejscu. Ogromna wygoda, szczególnie z dzieckiem.",
        date: "2025-10-28",
    },
    {
        name: "Marek Nowak",
        location: "Śródmieście",
        rating: 5,
        text: "Miałem problem z rowerem elektrycznym, inne serwisy odmawiały. GRINDFIX zajął się e-bikem kompleksowo, diagnoza i naprawa w jeden dzień. Rewelacja.",
        date: "2025-11-05",
    },
    {
        name: "Agnieszka Szymańska",
        location: "Wola",
        rating: 5,
        text: "Budowa kół rowerowych na zamówienie – niesamowita robota. Koła są lekkie, idealnie wycentrowane. Czuć jakość przy każdym kilometrze.",
        date: "2025-11-12",
    },
    {
        name: "Tomasz Lewandowski",
        location: "Praga",
        rating: 5,
        text: "Serwis amortyzatora Fox – profesjonalizm na najwyższym poziomie. Marcin wie co robi, wyjaśnił co było nie tak i jak temu zapobiec następnym razem.",
        date: "2025-11-20",
    },
    {
        name: "Zofia Kowalczyk",
        location: "Wilanów",
        rating: 5,
        text: "Regulacja przerzutek i wymiana linek – tanio, szybko, jakościowo. Wreszcie rower chodzi jak nowy. Szkoda że nie znalazłam GRINDFIX wcześniej!",
        date: "2025-12-01",
    },
];

// FAQ global / home
export const FAQ_HOME = [
    {
        q: "Ile kosztuje przegląd roweru w GRINDFIX?",
        a: "Standardowy przegląd roweru kosztuje od 150 do 230 zł w zależności od zakresu. Przegląd podstawowy (sprawdzenie i regulacja) od 150 zł, przegląd pełny z wymianą zużytych elementów – od 230 zł. Dokładną wycenę podajemy po oględzinach roweru lub przez formularz kontaktowy.",
    },
    {
        q: "Czy GRINDFIX oferuje mobilny serwis rowerowy?",
        a: "Tak! Nasz mechanik przyjedzie pod wskazany adres w Warszawie i na miejscu wykona naprawę lub przegląd. Mobilny serwis jest dostępny na terenie całej Warszawy – Mokotów, Ursynów, Śródmieście, Wola, Praga i okolice.",
    },
    {
        q: "Jak długo trwa naprawa roweru?",
        a: "Proste naprawy (regulacja, wymiana dętki, linki) wykonujemy w ciągu 1–2 godzin. Kompleksowy serwis lub budowa kół zajmuje 1–3 dni robocze. Informujemy o terminie realizacji przy przyjęciu roweru.",
    },
    {
        q: "Czy naprawiacie rowery elektryczne?",
        a: "Tak, specjalizujemy się w serwisie rowerów elektrycznych z napędami Bosch, Shimano Steps, Yamaha i Brose. Posiadamy certyfikowane narzędzia diagnostyczne i aktualną wiedzę o systemach e-bike.",
    },
    {
        q: "Jak umówić wizytę w GRINDFIX?",
        a: "Możesz umówić wizytę przez formularz kontaktowy na stronie, pisząc na kontakt@grindfix.pl lub dzwoniąc pod numer +48 572 456 397. Odpowiadamy w ciągu 2–4 godzin w dni robocze.",
    },
    {
        q: "Jakie marki rowerów serwisujecie?",
        a: "Serwisujemy wszystkie marki rowerów: Trek, Giant, Specialized, Cube, Scott, Merida, Kross, Romet i wiele innych. Naprawiamy zarówno rowery miejskie, górskie (MTB), szosowe, gravelowe, jak i elektryczne.",
    },
];

// Pricing data
export const PRICING = [
    { category: "Przegląd", service: "Przegląd podstawowy (regulacja)", price: "150 zł" },
    { category: "Przegląd", service: "Przegląd pełny", price: "230 zł" },
    { category: "Przegląd", service: "Przegląd premium", price: "430 zł" },
    { category: "Napęd", service: "Regulacja przerzutki tylnej", price: "50 zł" },
    { category: "Napęd", service: "Regulacja przerzutki przedniej", price: "30 zł" },
    { category: "Napęd", service: "Wymiana linki i pancerza", price: "od 50 zł" },
    { category: "Napęd", service: "Wymiana łańcucha", price: "od 40 zł (+ koszt łańcucha)" },
    { category: "Napęd", service: "Wymiana kasety i łańcucha", price: "od 60 zł (+ części)" },
    { category: "Koła", service: "Centrowanie koła", price: "50–90 zł" },
    { category: "Koła", service: "Wymiana szprychy", price: "od 30 zł" },
    { category: "Koła", service: "Wymiana dętki", price: "od 30 zł (+ dętka)" },
    { category: "Koła", service: "Budowa koła 32H (bez części)", price: "od 180 zł" },
    { category: "Hamulce", service: "Regulacja hamulców V-brake", price: "30 zł" },
    { category: "Hamulce", service: "Regulacja hamulców tarczowych", price: "50 zł" },
    { category: "Hamulce", service: "Odpowietrzenie hamulców hydraulicznych", price: "od 100 zł" },
    { category: "Amortyzator", service: "Serwis amortyzatora (basic)", price: "od 150 zł (+ uszczelki)" },
    { category: "Amortyzator", service: "Serwis amortyzatora (full)", price: "od 240 zł (+ części)" },
    { category: "Piasty", service: "Wymiana łożysk w piaście", price: "od 100 zł (+ łożyska)" },
    { category: "Mobilny", service: "Dojazd – Warszawa", price: "od 40 zł" },
    { category: "Mobilny", service: "Pakiet Mobile Basic (dojazd + 1 h pracy)", price: "od 150 zł" },
];
