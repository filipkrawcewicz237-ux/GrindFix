// Article content for blog posts

interface ArticleContent {
    html: string;
    faq: { q: string; a: string }[];
}

export const ARTICLE_CONTENT: Record<string, ArticleContent> = {
    "ile-kosztuje-przeglad-roweru": {
        html: `
<h2>Ile kosztuje przegląd roweru w 2025 roku?</h2>
<p>Cena przeglądu roweru to jedno z najczęściej zadawanych pytań przez warszawskich rowerzystów. Odpowiedź nie jest jednoznaczna – koszt przeglądu zależy od kilku czynników: rodzaju roweru, jego stanu technicznego, zakresu pracy i serwisu, który wybierzesz.</p>
<p>W GRINDFIX oferujemy przejrzyste ceny bez ukrytych kosztów. Poniżej znajdziesz szczegółowy cennik przeglądu roweru w 2025 roku.</p>
<h2>Cennik przeglądu roweru – GRINDFIX 2025</h2>
<ul>
<li><strong>Przegląd podstawowy</strong> – od 80 zł (regulacja + sprawdzenie kluczowych elementów)</li>
<li><strong>Przegląd pełny</strong> – od 120 zł (wszystkie podzespoły + protokół serwisowy)</li>
<li><strong>Przegląd roweru elektrycznego (e-bike)</strong> – od 150 zł (+ diagnostyka systemu elektrycznego)</li>
<li><strong>Przegląd roweru dziecięcego</strong> – od 60 zł</li>
</ul>
<p>Ceny nie obejmują kosztu wymienionych części. Jeśli podczas przeglądu okaże się, że konieczna jest wymiana zużytych elementów, podajemy wycenę przed przystąpieniem do pracy.</p>
<h2>Co obejmuje przegląd roweru?</h2>
<p><strong>Przegląd podstawowy</strong> obejmuje:</p>
<ul>
<li>Kontrolę i regulację hamulców (V-brake lub tarczowych)</li>
<li>Regulację przerzutek przednich i tylnych</li>
<li>Sprawdzenie luzów w sterze i piaście</li>
<li>Kontrolę stanu opon i dętek</li>
<li>Smarowanie łańcucha i linek</li>
<li>Sprawdzenie śrub mocujących</li>
</ul>
<p><strong>Przegląd pełny</strong> obejmuje dodatkowo:</p>
<ul>
<li>Centrowanie kół i sprawdzenie napięcia szprych</li>
<li>Kontrolę zużycia łańcucha (miernik)</li>
<li>Oględziny ramy i widelca pod kątem pęknięć</li>
<li>Sprawdzenie suportu i pedałów</li>
<li>Kontrolę i smarowanie amortyzatora (wstępne)</li>
<li>Wydanie protokołu serwisowego z oceną stanu roweru</li>
</ul>
<h2>Kiedy warto zrobić przegląd roweru?</h2>
<p>Zalecamy wykonanie przeglądu roweru przynajmniej dwa razy w roku:</p>
<ul>
<li><strong>Przed sezonem (marzec–kwiecień)</strong> – po zimie rower wymaga regulacji i smarowania</li>
<li><strong>Po sezonie (październik–listopad)</strong> – przed zimowaniem, aby rower nie narażał się na korozję</li>
</ul>
<p>Jeśli jeździsz intensywnie lub w trudnych warunkach (błoto, piasek, deszcz), warto robić przegląd co 3–4 miesiące lub po każdym 500–1000 km.</p>
<h2>Czy przegląd roweru się opłaca?</h2>
<p>Zdecydowanie tak. Regularne przeglądy są inwestycją, nie kosztem. Przykład: wczesne wykrycie zużytego łańcucha (wymiana ~30–50 zł) zapobiega zniszczeniu kasety kosztującej 100–500 zł. Regulacja hamulców przed sezonem (35 zł) może zapobiec wypadkowi lub kosztownej wymianie tarcz i okładzin.</p>
<h2>Ile kosztuje przegląd roweru elektrycznego?</h2>
<p>Przegląd roweru elektrycznego jest droższy niż standardowego, ponieważ obejmuje dodatkowo diagnostykę systemu elektrycznego. W GRINDFIX przegląd e-bike kosztuje od 150 zł i obejmuje pełen przegląd mechaniczny oraz odczyt kodów diagnostycznych systemu napędowego (Bosch, Shimano Steps, Yamaha).</p>
<h2>Jak przygotować rower na przegląd?</h2>
<p>Przed przywiezieniem roweru warto:</p>
<ul>
<li>Umyć rower – mechanik łatwiej diagnozuje czysty rower</li>
<li>Zabrać pompkę i manometr (opcjonalnie)</li>
<li>Przygotować listę rzeczy, które Cię niepokoją – szmergoty, luzy, problemy z przerzutkami</li>
</ul>
    `,
        faq: [
            { q: "Czy mogę zostawić rower bez umawiania się?", a: "Zalecamy wcześniejsze umówienie się przez formularz lub telefon. W szczycie sezonu czas oczekiwania bez rezerwacji może być dłuższy." },
            { q: "Jak długo trwa przegląd roweru?", a: "Przegląd podstawowy zajmuje 45–75 minut. Przegląd pełny 90–120 minut. Czas może się wydłużyć jeśli wykryjemy poważne usterki wymagające dodatkowej pracy." },
            { q: "Czy dostanę protokół po przeglądzie?", a: "Tak, przy przeglądzie pełnym wystawiamy szczegółowy protokół serwisowy z opisem stanu każdego podzespołu." },
            { q: "Czy cena przeglądu obejmuje smarowanie łańcucha?", a: "Tak, smarowanie łańcucha jest wliczone w cenę przeglądu. Używamy wysokiej jakości środków smarnych dostosowanych do warunków jazdy." },
        ],
    },
    "regulacja-przerzutek-cena": {
        html: `
<h2>Regulacja przerzutek – kiedy jest potrzebna?</h2>
<p>Przerzutki rowerowe odpowiadają za precyzyjne i płynne zmiany biegów. Prawidłowo wyregulowane przerzutki sprawiają, że zmiana biegu jest natychmiastowa i pewna. Źle wyregulowane – powodują problemy z wchodzeniem na biegi, przeskakiwanie łańcucha i nadmierne zużycie całego napędu.</p>
<h2>Objawy źle wyregulowanych przerzutek</h2>
<ul>
<li>Łańcuch nie chce wchodzić na wybrane przełożenie</li>
<li>Łańcuch przeskakuje na sąsiedni bieg podczas pedałowania</li>
<li>Głośne wydawanie dźwięków przez napęd (trzaski, stuki)</li>
<li>Długi czas zmiany biegu po naciśnięciu manetki</li>
<li>Łańcuch nie zejdzie na najmniejszą lub nie wejdzie na największą zębatkę</li>
</ul>
<h2>Ile kosztuje regulacja przerzutek?</h2>
<p>W GRINDFIX regulacja przerzutek rowerowych kosztuje:</p>
<ul>
<li><strong>Regulacja tylnej przerzutki</strong> – 35 zł</li>
<li><strong>Regulacja przedniej przerzutki</strong> – 25 zł</li>
<li><strong>Regulacja obu przerzutek</strong> – 50 zł</li>
<li><strong>Wymiana linki + regulacja</strong> – od 40 zł (+ koszt linki)</li>
<li><strong>Wymiana pancerza + linki + regulacja</strong> – od 60 zł (+ materiały)</li>
</ul>
<h2>Jak przebiega regulacja przerzutek?</h2>
<p>Regulacja przerzutek to proces kilkuetapowy:</p>
<ol>
<li>Sprawdzenie stanu linki i pancerza – wylinane lub pęknięte wymagają wymiany</li>
<li>Wstępne ustawienie ograniczników (śruby H i L)</li>
<li>Regulacja napięcia linki przez bębenek regulacyjny</li>
<li>Test zmiany biegów na wszystkich przełożeniach pod obciążeniem</li>
<li>Fine-tuning i kontrola końcowa</li>
</ol>
<h2>Kiedy wymienić linkę przerzutki?</h2>
<p>Linki przerzutek (i pancerze) warto wymieniać prewencyjnie co 1–2 sezony lub wcześniej jeśli zauważysz:</p>
<ul>
<li>Widoczną rdzę na lince</li>
<li>Szarpanie lub wyczuwalny opór przy zmianie biegu</li>
<li>Pocieniałą lub zdeformowaną końcówkę linki</li>
</ul>
<h2>Regulacja przerzutek elektronicznych (Di2, AXS)</h2>
<p>Rowery z elektronicznym układem przerzutek (Shimano Di2, SRAM AXS) wymagają innej procedury serwisowej. Nie ma tu mechanicznych linek – zmiany biegów sterowane są elektronicznie. Serwis obejmuje aktualizację oprogramowania i kalibrację elektroniczną. W GRINDFIX wykonujemy serwis systemów Di2 i AXS.</p>
    `,
        faq: [
            { q: "Jak często regulować przerzutki?", a: "Przerzutki wymagają regulacji przynajmniej raz w sezonie (przed sezonem). Dodatkowa regulacja może być potrzebna po wymianie linki, dłuższej przerwie lub po upadku. Nowe rowery wymagają regulacji po pierwszych 200–300 km, gdy linki się rozciągną." },
            { q: "Czy mogę samemu wyregulować przerzutki?", a: "Podstawową regulację tylnej przerzutki można wykonać samodzielnie przy pomocy bębenka regulacyjnego. Pełna regulacja z ustawieniem ograniczników wymaga więcej doświadczenia. Jeśli nie masz wprawy, lepiej oddać rower do serwisu." },
            { q: "Dlaczego przerzutka skacze pod obciążeniem?", a: "Łańcuch przeskakujący pod obciążeniem może wskazywać na: zużyty łańcuch, zużytą kasetę, zbyt luźną lub uszkodzoną linkę lub uszkodzoną przerzutkę. Diagnostyka w serwisie pokaże dokładną przyczynę." },
        ],
    },
    "wymiana-lozysk-w-piastce-cena": {
        html: `
<h2>Łożyska w piaście rowerowej – co warto wiedzieć?</h2>
<p>Piasta rowerowa to serce koła. To w niej obracają się szprychy i przenoszone jest obciążenie rowerzysty. Łożyska w piaście umożliwiają swobodne obroty koła z minimalnym oporem. Zużyte łożyska to gorszy komfort jazdy, mniejsza wydajność i większe ryzyko poważniejszych uszkodzeń.</p>
<h2>Rodzaje łożysk w piastach rowerowych</h2>
<ul>
<li><strong>Łożyska miseczkowe (cup-and-cone)</strong> – klasyczne, regulowane. Popularne w piastach Shimano. Tańsze w serwisie, ale wymagają dokładnej regulacji.</li>
<li><strong>Łożyska uszczelnione (kartridżowe)</strong> – jednorazowe, precyzyjne. Popularne w piastach premium. Łatwiejsze w wymianie, ale droższe.</li>
</ul>
<h2>Ile kosztuje wymiana łożysk w piaście?</h2>
<p>W GRINDFIX wymiana łożysk w piaście kosztuje:</p>
<ul>
<li><strong>Wymiana łożysk piasta przednia (uszczelnione)</strong> – od 60 zł + koszt łożysk</li>
<li><strong>Wymiana łożysk piasta tylna (uszczelnione)</strong> – od 80 zł + koszt łożysk</li>
<li><strong>Serwis piasta cup-and-cone (regulacja + smarowanie)</strong> – od 50 zł</li>
<li><strong>Wymiana kulki piasta cup-and-cone</strong> – od 60 zł + kulki</li>
</ul>
<h2>Objawy zużytych łożysk w piaście</h2>
<ul>
<li>Wyczuwalny luz boczny koła (poruszaj kołem bocznie)</li>
<li>Chropowatość lub opór podczas ręcznego obracania koła</li>
<li>Stuki lub chrzęstenie podczas jazdy lub ręcznego kręcenia kołem</li>
<li>Koło nie kręci się swobodnie i szybko się zatrzymuje</li>
</ul>
<h2>Jak długo wytrzymują łożyska w piastach?</h2>
<p>Trwałość łożysk zależy od jakości piasty, warunków jazdy i dbałości o rower:</p>
<ul>
<li>Łożyska uszczelnione – 3000–10 000 km (zależy od jakości)</li>
<li>Łożyska cup-and-cone Shimano – 5000–20 000 km przy regularnym serwisowaniu</li>
</ul>
<p>Jazda w deszczu, błocie i pyle skraca żywotność łożysk. Regularne mycie i smarowanie przedłuża ją znacznie.</p>
    `,
        faq: [
            { q: "Czy można serwisować piasty e-bike samodzielnie?", a: "Piasty z silnikiem (tylne w rowerach elektrycznych) wymagają specjalistycznych narzędzi i wiedzy. Zdecydowanie zalecamy serwis w profesjonalnym warsztacie." },
            { q: "Co to jest luz boczny piasty?", a: "Luz boczny to możliwość bocznego poruszenia koła w osi. Niewielki luz w piastach cup-and-cone jest normalny. Duży luz oznacza zużyte lub nieprawidłowo wyregulowane łożyska i wymaga serwisu." },
        ],
    },
    "serwis-amortyzatora-jak-czesto": {
        html: `
<h2>Jak często serwisować amortyzator rowerowy?</h2>
<p>Amortyzator rowerowy (przedni widelec lub tylna jednostka) to jeden z najdroższych i najważniejszych podzespołów roweru górskiego (MTB). Jego prawidłowe działanie ma bezpośredni wpływ na komfort, przyczepność i bezpieczeństwo jazdy. Zaniedbany amortyzator traci skuteczność i może ulec kosztownemu uszkodzeniu.</p>
<h2>Zalecane interwały serwisowe</h2>
<p>Producenci amortyzatorów (Fox, RockShox, Manitou) zalecają:</p>
<ul>
<li><strong>Serwis podstawowy (Lower Leg Service)</strong> – co 50–100 godzin jazdy lub raz w roku (co nastąpi pierwsze)</li>
<li><strong>Serwis pełny (Full Service)</strong> – co 100–200 godzin jazdy lub co 2 lata</li>
</ul>
<p>Jeśli dużo jeździsz w trudnych warunkach (błoto, piasek, deszcz, ekspozycja), wykonuj serwis częściej.</p>
<h2>Objawy amortyzatora wymagającego serwisu</h2>
<ul>
<li>Ślady oleju na łodydze widelca lub korpusie amortyzatora</li>
<li>Gąbczaste, niecisłe działanie przy małych nierównościach</li>
<li>Zbyt twarde lub zbyt miękkie działanie mimo prawidłowych ustawień</li>
<li>Stuki, trzaski lub chrzęstenie podczas pracy</li>
<li>Brak możliwości zmiany charakterystyki (twardość, tłumienie)</li>
</ul>
<h2>Co obejmuje serwis amortyzatora?</h2>
<p><strong>Serwis podstawowy widelca (Lower Leg Service):</strong></p>
<ul>
<li>Demontaż koron i łodyg widelca</li>
<li>Czyszczenie wszystkich wewnętrznych powierzchni</li>
<li>Wymiana uszczelnień dolnych (dust seal + foam ring)</li>
<li>Wymiana oleju w koronach (odpowiednia lepkość oleju Fox lub RockShox)</li>
<li>Kontrola luzów i ponowny montaż</li>
</ul>
<p>Koszt serwisu podstawowego w GRINDFIX: od 120 zł + uszczelki i olej.</p>
<h2>Dlaczego warto serwisować amortyzator regularnie?</h2>
<p>Brak serwisu przez kilka sezonów to bezpośrednia droga do uszkodzenia łodygi (rys, korozja) lub korpusu amortyzatora. Wymiana całego widelca Fox 36 lub RockShox Lyrik kosztuje 1500–4000 zł. Serwis podstawowy raz w roku to 150–200 zł. Oszczędność jest oczywista.</p>
    `,
        faq: [
            { q: "Czy mogę serwisować amortyzator samodzielnie?", a: "Serwis podstawowy (wymiana oleju w koronach) jest możliwy dla ambitnych rowerzystów ze specjalistycznymi narzędziami. Serwis pełny (tłumik, sprężyna) wymaga specjalistycznej wiedzy i narzędzi – zdecydowanie polecamy serwis profesjonalny." },
            { q: "Ile trwa serwis amortyzatora?", a: "Serwis podstawowy zajmuje 1–2 godziny. Serwis pełny 3–5 godzin. Czas może się wydłużyć jeśli odkryjemy uszkodzenia wymagające naprawy." },
        ],
    },
    "jak-dbac-o-rower-elektryczny": {
        html: `
<h2>Rower elektryczny – podstawy pielęgnacji</h2>
<p>Rower elektryczny (e-bike) to inwestycja wymagająca odpowiedniej pielęgnacji. Właściwa eksploatacja i serwisowanie przedłuży żywotność zarówno komponentów mechanicznych, jak i układu elektrycznego. Poniżej znajdziesz kompletny poradnik dbania o e-bike.</p>
<h2>Jak dbać o baterię roweru elektrycznego?</h2>
<p>Bateria to najdroższy element roweru elektrycznego. Jej właściwe użytkowanie jest kluczowe:</p>
<ul>
<li><strong>Ładuj regularnie</strong> – nie pozostawiaj baterii rozładowanej na długo (poniżej 20%)</li>
<li><strong>Nie przeładowuj</strong> – nowoczesne ładowarki mają zabezpieczenie, ale lepiej odłączyć po pełnym naładowaniu</li>
<li><strong>Temperatura przechowywania</strong> – bateria woli 15–20°C. Unikaj mrozu i wysokich temperatur</li>
<li><strong>Przechowywanie zimowe</strong> – naładuj baterię do 60% i przechowuj w temperaturze pokojowej</li>
<li><strong>Transport samochodem</strong> – wyjmij baterię podczas transportu na bagażniku</li>
</ul>
<h2>Jak myć rower elektryczny?</h2>
<p>Mycie e-bike wymaga ostrożności:</p>
<ul>
<li>Nie używaj myjki ciśnieniowej – woda pod ciśnieniem może dostać się do silnika, baterii i kontrolera</li>
<li>Używaj miękkiej gąbki i wody z detergentem</li>
<li>Unikaj bezpośredniego strumienia wody na silnik, baterię i wyświetlacz</li>
<li>Po myciu wytrzyj rower do sucha, szczególnie kontakty elektryczne</li>
</ul>
<h2>Serwis mechaniczny e-bike</h2>
<p>Komponent mechaniczne e-bike zużywają się szybciej niż w zwykłym rowerze, ze względu na większą masę i moment obrotowy silnika:</p>
<ul>
<li><strong>Łańcuch</strong> – sprawdzaj co 300–500 km, rower elektryczny zużywa łańcuch 2–3x szybciej</li>
<li><strong>Okładziny hamulcowe</strong> – kontroluj co miesiąc, e-bike jest cięższy więc hamulce pracują intensywniej</li>
<li><strong>Opony</strong> – sprawdzaj ciśnienie co tydzień, e-bike ma wyższe rekomendowane ciśnienie</li>
<li><strong>Przegląd techniczny</strong> – raz w roku lub co 1000 km</li>
</ul>
<h2>Serwis elektryczny e-bike</h2>
<p>System elektryczny wymaga specjalistycznego serwisu:</p>
<ul>
<li>Aktualizacja oprogramowania – raz w roku lub gdy producent wyda nową wersję</li>
<li>Diagnostyka błędów – niezwłocznie po pojawieniu się kodów błędów</li>
<li>Kontrola połączeń elektrycznych – serwis co 2 lata</li>
</ul>
    `,
        faq: [
            { q: "Czy mogę jeździć e-bike w deszczu?", a: "Tak, e-bike jest wodoodporny (IP-rating), ale nie jest wodoszczelny. Jazda w deszczu jest bezpieczna, ale unikaj zanurzania roweru w wodzie. Po jeździe w deszczu wytrzyj kontakty elektryczne." },
            { q: "Jak długo wytrzyma bateria e-bike?", a: "Baterie litowo-jonowe w rowerach elektrycznych wytrzymują zazwyczaj 500–1500 cykli ładowania, co odpowiada 3–7 latom użytkowania. Stan baterii maleje stopniowo – po 3 latach może mieć 80% pierwotnej pojemności." },
            { q: "Czy mogę ładować e-bike przez całą noc?", a: "Nowoczesne ładowarki mają zabezpieczenie przed przeładowaniem i automatycznie przerywają ładowanie po osiągnięciu 100%. Niemniej, lepszą praktyką jest odłączenie po naładowaniu." },
        ],
    },
    "kiedy-wymienic-lancuch-roweru": {
        html: `
<h2>Łańcuch rowerowy – kiedy go wymienić?</h2>
<p>Łańcuch rowerowy to element eksploatacyjny, który zużywa się stopniowo. Istotne jest, aby wymieniać go w odpowiednim momencie – za wcześnie to niepotrzebny wydatek, za późno – niszczymy kasetę i zębatki, co może kosztować kilkakrotnie więcej.</p>
<h2>Jak mierzyć zużycie łańcucha?</h2>
<p>Najprecyzyjniejszym narzędziem jest miernik zużycia łańcucha (chain wear indicator), dostępny od producent Park Tool, Shimano i innych. Miernik wskazuje procentowe wydłużenie łańcucha:</p>
<ul>
<li><strong>0.5 (0.5% elongacji)</strong> – można jeszcze jeździć, warto planować wymianę</li>
<li><strong>0.75 (0.75%)</strong> – czas na wymianę (kaseta jest jeszcze do uratowania)</li>
<li><strong>1.0 (1%)</strong> – łańcuch jest poważnie zużyty, kaseta może być uszkodzona</li>
</ul>
<h2>Ile kosztuje wymiana łańcucha rowerowego?</h2>
<ul>
<li><strong>Robocizna wymiany łańcucha</strong> – od 30 zł</li>
<li><strong>Łańcuch 7–8 biegów</strong> – 30–80 zł</li>
<li><strong>Łańcuch 9 biegów</strong> – 50–120 zł</li>
<li><strong>Łańcuch 10–11 biegów</strong> – 80–200 zł</li>
<li><strong>Łańcuch 12 biegów (AXS, Di2)</strong> – 100–300 zł</li>
</ul>
<h2>Jak przedłużyć żywotność łańcucha?</h2>
<ul>
<li>Smaruj łańcuch regularnie – co 200–400 km lub po jeździe w deszczu</li>
<li>Używaj odpowiedniego środka smarnego – olej do warunków suchych lub mokrych</li>
<li>Myj łańcuch co 500–1000 km specjalnym płynem do odtłuszczania</li>
<li>Unikaj krzyżowania biegów (duże zębatki z przodu i z tyłu jednocześnie)</li>
</ul>
    `,
        faq: [
            { q: "Czy zużyty łańcuch niszczy kasetę?", a: "Tak, to jeden z najczęstszych i najdroższych błędów rowerzystów. Zużyty (wydłużony) łańcuch nierównomiernie angażuje zębatki kasety, powodując ich szybsze zużycie. Kaseta kosztuje 80–500 zł, łańcuch 30–200 zł – opłaca się wymieniać łańcuch regularnie." },
            { q: "Jak często wymieniać łańcuch?", a: "Przy normalnej jeździe (3–4 razy w tygodniu, różne warunki) łańcuch wytrzymuje 1500–3000 km. Przy intensywnej jeździe w trudnych warunkach może być to tylko 1000 km. Zalecamy coroczny pomiar miernikiem zużycia." },
        ],
    },
    "budowa-kol-rowerowych-poradnik": {
        html: `
<h2>Ręcznie budowane koła vs. gotowe fabryczne – porównanie</h2>
<p>Wybór między ręcznie budowanymi kołami a gotowymi zestawami fabrycznymi to dylemat, przed którym staje wielu rowerzystów planujących upgrade lub wymianę uszkodzonego koła. Oba rozwiązania mają swoje zalety – różnią się jednak znacząco pod względem personalizacji, jakości i trwałości.</p>
<h2>Zalety ręcznie budowanych kół</h2>
<ul>
<li><strong>Pełna personalizacja</strong> – wybierasz obręcz, piastę, szprychy i wzór sznurowania dostosowany do stylu jazdy</li>
<li><strong>Wyższa jakość wykonania</strong> – doświadczony koleśniarz centruje koło precyzyjniej niż maszyna fabryczna</li>
<li><strong>Możliwość naprawy</strong> – każdą szprychę można wymienić, koło docentrować</li>
<li><strong>Optymalna masa</strong> – można zastoswać najlżejsze dostępne komponenty lub postawić na wytrzymałość</li>
<li><strong>Niestandardowe specyfikacje</strong> – Boost 148, 6-bolt vs. Centerlock, szeroka oś, dowolna liczba szprych</li>
</ul>
<h2>Zalety fabrycznych gotowych kół</h2>
<ul>
<li><strong>Niższa cena</strong> – przy masowej produkcji koszt jest niższy</li>
<li><strong>Szybka dostępność</strong> – gotowe koło możesz zamówić następnego dnia</li>
<li><strong>Gwarancja producenta</strong> – jako zestaw, nie pojedyncze komponenty</li>
</ul>
<h2>Jaki wzór sznurowania wybrać?</h2>
<ul>
<li><strong>3-cross</strong> – klasyczny, najbardziej wytrzymały, polecany dla MTB i rowerzystów cięższych</li>
<li><strong>2-cross</strong> – lżejszy, mniej wytrzymały, dla lżejszych rowerzystów na gruntach</li>
<li><strong>Radial (zero-cross)</strong> – najlżejszy, tylko dla kół przednich nienajeżdżających terenu</li>
</ul>
<h2>Komponenty do budowy kół na rynku polskim</h2>
<ul>
<li><strong>Obręcze</strong>: DT Swiss, Stan's NoTubes, Crankbrothers, Mavic, Roval</li>
<li><strong>Piasty</strong>: Shimano, Hope, DT Swiss, Chris King, Industry Nine</li>
<li><strong>Szprychy</strong>: Sapim CX-Ray, Sapim Laser, DT Swiss Competition, DT Swiss Race</li>
</ul>
    `,
        faq: [
            { q: "Ile kosztuje budowa komplet kół MTB?", a: "Para kół MTB mid-range (DT Swiss obręcze + Shimano piasta) to koszt komponentów 600–1200 zł + 300 zł robocizny. Para kół premium (Stan's + Hope) to 1200–3000 zł komponentów + 300 zł robocizny." },
            { q: "Jak długo trwają ręcznie budowane koła?", a: "Dobrze zbudowane koło z jakościowych komponentów wytrzyma wiele lat. Szprychy Sapim CX-Ray i piasty DT Swiss mają dożywotnią gwarancję producenta. Kluczowa jest regularna kontrola napięcia szprych." },
        ],
    },
    "mobilny-serwis-rowerowy-czy-warto": {
        html: `
<h2>Mobilny serwis rowerowy – co to jest?</h2>
<p>Mobilny serwis rowerowy to usługa, w ramach której technik rowerowy przyjeżdża do klienta z pełnym wyposażeniem serwisowym i wykonuje naprawę lub przegląd roweru na miejscu – pod blokiem, w biurze, w parku lub w garażu. Technik posiada przenośny warsztat ze wszystkim co potrzebne do większości napraw.</p>
<h2>Kiedy warto skorzystać z mobilnego serwisu?</h2>
<ul>
<li>Nie masz samochodu, którym możesz przewieźć rower do warsztatu</li>
<li>Masz dzieci i trudno Ci wyjść z domu na dłużej</li>
<li>Masz kontuzję lub problemy z mobilnością</li>
<li>Dojeżdżasz rowerem do pracy – technik przyjedzie w ciągu dnia</li>
<li>Awaria spotkała Cię w terenie lub z dala od domu</li>
<li>Twoja firma ma flotę rowerów wymagającą serwisu</li>
</ul>
<h2>Co może naprawić mobilny technik?</h2>
<p>Mobilny technik GRINDFIX wykonuje zdecydowaną większość typowych napraw:</p>
<ul>
<li>Wymiana dętki lub opony – dostępna od ręki</li>
<li>Regulacja przerzutek i hamulców</li>
<li>Wymiana linki i pancerza</li>
<li>Wymiana łańcucha</li>
<li>Centrowanie koła (do pewnego stopnia)</li>
<li>Przegląd techniczny z oceną stanu roweru</li>
<li>Diagnostyka e-bike (przenośne oprogramowanie)</li>
</ul>
<h2>Jakich napraw nie można wykonać mobilnie?</h2>
<p>Niektóre naprawy wymagają profesjonalnych stacjonarnych narzędzi:</p>
<ul>
<li>Budowa kół od podstaw (wymaga stołu centrującego)</li>
<li>Serwis amortyzatora (czysty i specjalistyczny sprzęt)</li>
<li>Wymiana suportu z presfit (wymaga prasy)</li>
<li>Odpowietrzanie hamulców hydraulicznych (możliwe, ale wymaga czystego środowiska)</li>
</ul>
<h2>Ile kosztuje mobilny serwis rowerowy w Warszawie?</h2>
<ul>
<li>Koszt dojazdu: od 30 zł (cała Warszawa)</li>
<li>Pakiet Mobile Basic (dojazd + 1h pracy): od 120 zł</li>
<li>Naprawy według standardowego cennika + koszt dojazdu</li>
</ul>
    `,
        faq: [
            { q: "Jak szybko technik przyjedzie?", a: "Zazwyczaj możemy umówić wizytę następnego dnia roboczego. W pilnych przypadkach (np. awaria po drodze do pracy) staramy się reagować szybciej – zadzwoń bezpośrednio." },
            { q: "Czy mobilny serwis jest droższy od stacjonarnego?", a: "Koszt samych napraw jest taki sam jak w warsztacie – doliczamy jedynie koszt dojazdu (od 30 zł). Biorąc pod uwagę oszczędność czasu i wysiłku transportu roweru, mobilny serwis często wychodzi opłacalniej." },
        ],
    },
    "przeglad-roweru-przed-sezonem": {
        html: `
<h2>Lista kontrolna przeglądu roweru przed sezonem</h2>
<p>Nowy sezon rowerowy to dla wielu rowerzystów chwila, na którą czekali przez całą zimę. Zanim jednak wyruszysz na pierwszy wyjazd, warto sprawdzić rower po zimowej przerwie. Przegląd roweru przed sezonem to inwestycja w Twoje bezpieczeństwo i komfort.</p>
<h2>Co sprawdzić samodzielnie przed sezonem?</h2>
<h3>1. Opony i dętki</h3>
<ul>
<li>Sprawdź ciśnienie – zimując traci się 0.5–1 bar miesięcznie</li>
<li>Obejrzyj bieżnik pod kątem pęknięć, nacięć lub przesuszenia</li>
<li>Sprawdź dętki (jeśli nie tubeless) – mogą być stare i podatne na przebicia</li>
</ul>
<h3>2. Hamulce</h3>
<ul>
<li>Sprawdź zużycie klocków – latem zużywają się szybko, zimą stają się twarde</li>
<li>Ściśnij dźwignię – rower powinien zatrzymać się zdecydowanie</li>
<li>Sprawdź stan linek i pancerzy – mogą być zardzewiałe</li>
</ul>
<h3>3. Napęd</h3>
<ul>
<li>Linka przerzutki – czy wciąż elastyczna? Rdza = wymiana</li>
<li>Łańcuch – czy sprawnie przebiega przez zębatki? Zmierz zużycie</li>
<li>Smarowanie – łańcuch przed sezonem wymaga świeżego smaru</li>
</ul>
<h3>4. Koła</h3>
<ul>
<li>Sprawdź bicie boczne i osiowe – spójrz na koło podczas obrotu</li>
<li>Sprawdź napięcie szprych – powinny wydawać podobny dźwięk przy szarpnięciu</li>
</ul>
<h2>Kiedy zabrać rower do serwisu przed sezonem?</h2>
<p>Jeśli widzisz cokolwiek nieprawidłowego w powyższej liście, a nie masz pewności jak to naprawić – czas na wizytę w serwisie. Marzec–kwiecień to szczyt sezonu serwisowego, więc warto zarezerwować termin wcześniej.</p>
<p>Przegląd roweru przed sezonem w GRINDFIX kosztuje od 80 zł i zajmuje 60–90 minut. Możesz też skorzystać z mobilnego serwisu w domu.</p>
    `,
        faq: [
            { q: "Czy opłaca się robić przegląd przed sezonem?", a: "Zdecydowanie tak. Marzec–kwiecień to czas, kiedy po zimie rower może mieć wiele drobnych usterek: rdzewiejące linki, twarde klocki hamulców, niskie ciśnienie w oponach. Wykrycie ich przed pierwszym wyjazdem to kwestia bezpieczeństwa." },
            { q: "Ile wcześniej zarezerwować przegląd przed sezonem?", a: "W szczycie sezonu (kwiecień–maj) czas oczekiwania może wynosić 3–7 dni. Zalecamy rezerwację w marcu lub nawet w lutym dla pewności terminu." },
        ],
    },
    "najczestsze-awarie-rowerow": {
        html: `
<h2>10 najczęstszych awarii rowerów w Warszawie</h2>
<p>Z naszej codziennej pracy w serwisie rowerowym wynika, że pewne awarie powtarzają się niezwykle często. Oto 10 usterek, z którymi rowerzyscy w Warszawie trafiają do GRINDFIX najczęściej.</p>
<h3>1. Przebita opona / dętka</h3>
<p>Zdecydowanie najczęstsza awaria. Ostre kamienie, szkło, gwoździe, a nawet drobne szklane odłamki na drodze powodują przebicie. Zapobieganie: opony o grubszym bieżniku, dętki Anti-Puncture lub system tubeless.</p>
<h3>2. Zerwany łańcuch</h3>
<p>Łańcuch zrywa się najczęściej pod dużym obciążeniem (wjazd pod górę, sprint) jeśli jest zużyty lub uszkodzony. Zapobieganie: regularna wymiana łańcucha, unikanie krzyżowania biegów.</p>
<h3>3. Problemy z przerzutkami</h3>
<p>Przerzutka nie chce wchodzić na bieg, łańcuch skacze lub spada. Najczęstsza przyczyna: zużyta linka lub zdeformowana przerzutka po upadku.</p>
<h3>4. Luźne lub zerwane szprychy</h3>
<p>Koła tracą centrowanie przez zużycie szprych lub ich pęknięcie. Przyczyna: słabe szprychy, nieprawidłowe naprężenie, jazda przez twarde krawężniki.</p>
<h3>5. Zużyte okładziny hamulcowe</h3>
<p>Hamulce skrzypią, a rower dłużej się zatrzymuje. Klocki V-brake wymagają wymiany co sezon, tarczowe co 800–2000 km zależnie od warunków.</p>
<h3>6. Poluzowany lub zużyty ster</h3>
<p>Kierownica ma luz lub przy hamowaniu słychać stuki. Ster wymaga dociągnięcia lub wymiany łożysk.</p>
<h3>7. Awaria hamulców hydraulicznych</h3>
<p>Dźwignia hamulca jest miękka lub wręcz nie działająca. Najczęstsza przyczyna: pęcherzyki powietrza w układzie (konieczne odpowietrzenie).</p>
<h3>8. Zużyty lub uszkodzony suport</h3>
<p>Korby skrzypią lub mają luz. Suport z zużytymi łożyskami wymaga wymiany lub serwisu.</p>
<h3>9. Problemy z oponą tubeless</h3>
<p>Opona tubeless nie chce się uszczelnić lub traci ciśnienie przez noc. Konieczna wymiana mleczka uszczelniającego lub naprawa uszkodzenia.</p>
<h3>10. Pęknięta rama lub widelec</h3>
<p>Rzadsza awaria, ale poważna. Ramy aluminiowe pękają w miejscach spawów, węglowe – mogą pęknąć bez widocznych objawów. Po wypadku zawsze sprawdź ramę i widelec w serwisie.</p>
    `,
        faq: [
            { q: "Co zrobić gdy łańcuch spadnie podczas jazdy?", a: "Zatrzymaj się, włóż łańcuch z powrotem na zębatkę (najlepiej na środkowe przełożenie) i ostrożnie uruchom napęd. Jeśli łańcuch często spada, rower potrzebuje regulacji lub wymiany wyszczerbionej zębatki." },
            { q: "Czy przebita opona tubeless zawsze wymaga serwisu?", a: "Małe przebicia (np. gwoździem) opona tubeless uszczelnia sama dzięki mleczku. Duże rozdarcia wymagają założenia dętki ratunkowej i wizyty w serwisie w celu naprawy lub wymiany opony." },
        ],
    },
    "serwis-hamulcow-hydraulicznych": {
        html: `
<h2>Hamulce hydrauliczne – jak działają i dlaczego wymagają serwisu?</h2>
<p>Hamulce hydrauliczne to premium standard w rowerach górskich (MTB), gravelowych i miastowych. Ich działanie opiera się na hydraulicznym przenoszeniu siły przez płyn hamulcowy – olej mineralny lub DOT. System jest zamknięty, szczelny, ale wymaga regularnego serwisu.</p>
<h2>Kiedy odpowietrzać hamulce hydrauliczne?</h2>
<p>Odpowietrzenie hamulców hydraulicznych jest konieczne gdy:</p>
<ul>
<li>Dźwignia hamulca jest miękka lub musi być wciśnięta bardzo głęboko</li>
<li>Czujesz gąbczastość lub brak pewności przy hamowaniu</li>
<li>Dźwignia dochodzi do kierownicy bez zatrzymania roweru</li>
<li>Po długiej jeździe zjazdowej hamulce tracą skuteczność (fade)</li>
</ul>
<p>Profilaktycznie – raz na rok lub co 2 sezony (zależnie od intensywności).</p>
<h2>Ile kosztuje odpowietrzenie hamulców?</h2>
<ul>
<li><strong>Odpowietrzenie jednego hamulca</strong> – od 80 zł + płyn hamulcowy</li>
<li><strong>Odpowietrzenie obu hamulców</strong> – od 140 zł + płyn</li>
<li><strong>Pełny serwis ze zmianą płynu</strong> – od 160 zł + płyn</li>
</ul>
<h2>Rodzaje płynów hamulcowych</h2>
<ul>
<li><strong>Olej mineralny</strong> – Shimano, Magura. Mniej agresywny, nie niszczy lakieru. Osobne oleje dla każdego producenta.</li>
<li><strong>DOT 4 / DOT 5.1</strong> – SRAM, Formula, Hayes. Wyższa temperatura wrzenia, ale bardziej agresywny dla lakieru i gumy.</li>
</ul>
<h2>Jak przedłużyć żywotność hamulców hydraulicznych?</h2>
<ul>
<li>Nie mieszaj typów płynów hamulcowych!</li>
<li>Regularnie wymieniaj okładziny – nie pozwól by metal tłoczka tarł o tarczę</li>
<li>Po docieraniu nowych klocków wykonaj 15–20 silnych hamowań z dużej prędkości</li>
<li>Przechowuj rower w pozycji pionowej – leżenie może powodować powstawianie pęcherzyków</li>
</ul>
    `,
        faq: [
            { q: "Czy mogę sam odpowietrzyć hamulce? ", a: "Technicznie tak, jeśli masz zestaw do odpowietrzania danego producenta (Shimano Bleed Kit, SRAM Bleed Kit). W praktyce to nieco skomplikowana procedura – błąd może pogorszyć działanie hamulców. Dla pewności warto zlecić to serwisowi." },
            { q: "Jak długo działają nowe klocki hamulcowe?", a: "Trwałość klocków zależy od typu (organiczne vs. metaliczne), warunków jazdy i masy rowerzysty. W MTB: 500–2000 km dla klocków organicznych, 1000–4000 km dla metalicznych. Klocki organiczne są cichsze, metaliczne – trwalsze i odporniejsze na temperaturę." },
        ],
    },
    "jak-wybrac-serwis-rowerowy": {
        html: `
<h2>Na co zwrócić uwagę wybierając serwis rowerowy?</h2>
<p>Warszawa ma wiele serwisów rowerowych. Jak wybrać ten właściwy? Odpowiedź nie jest prosta, ale kilka kryteriów pomoże Ci podjąć dobrą decyzję.</p>
<h2>1. Specjalizacja serwisu</h2>
<p>Nie każdy serwis zajmuje się wszystkim. Sprawdź czy dany serwis specjalizuje się w typie Twojego roweru:</p>
<ul>
<li>Rowery elektryczne e-bike – wymagają certyfikatów producenta systemu napędowego</li>
<li>Rowery MTB highend – serwis Fox, RockShox, elektronika (Di2, AXS)</li>
<li>Rowery szosowe – znajomość grup Campagnolo, SRAM Red, Shimano Dura-Ace</li>
</ul>
<h2>2. Opinie w Google</h2>
<p>Opinie Google to jeden z najwiarygodniejszych wskaźników jakości serwisu. Sprawdź:</p>
<ul>
<li>Liczbę opinii – więcej = bardziej wiarygodne</li>
<li>Średnią ocenę – poniżej 4.5/5 to sygnał ostrzegawczy</li>
<li>Treść opinii – czy klienci piszą o konkretnych pozytywnych doświadczeniach?</li>
<li>Odpowiedzi na negatywne opinie – jak serwis reaguje na krytykę?</li>
</ul>
<h2>3. Przejrzystość cennika</h2>
<p>Dobry serwis rowerowy podaje ceny z góry – przed przystąpieniem do pracy. Unikaj serwisów, które:</p>
<ul>
<li>Nie mają cennika lub odmawiają podania wyceny</li>
<li>Doliczają dodatkowe opłaty po fakcie</li>
<li>Stosują niejasne zasady wyceny</li>
</ul>
<h2>4. Czas oczekiwania i komunikacja</h2>
<p>Dobry serwis informuje o terminie realizacji i komunikuje wszelkie opóźnienia lub dodatkowe ustalenia. Jeśli serwis nie odpowiada na wiadomości lub ciągle przesuwa termin – szukaj innego.</p>
<h2>5. Gwarancja na usługi</h2>
<p>Sprawdź jaka gwarancja obowiązuje na wykonane usługi. W GRINDFIX udzielamy gwarancji 6 miesięcy na wykonane prace serwisowe.</p>
<h2>Dlaczego warto wybrać GRINDFIX?</h2>
<ul>
<li>Ponad 500 zadowolonych klientów w Warszawie</li>
<li>Ocena 4.9/5 w Google (127 opinii)</li>
<li>Certyfikowani technicy: Bosch, Shimano Steps, Yamaha</li>
<li>Przejrzysty cennik bez ukrytych kosztów</li>
<li>Mobilny serwis na terenie całej Warszawy</li>
<li>Gwarancja 6 miesięcy na usługi</li>
</ul>
    `,
        faq: [
            { q: "Czy serwis rowerowy musi mieć certyfikaty?", a: "Do serwisu standardowych rowerów certyfikaty nie są wymagane. Jednak do serwisu rowerów elektrycznych, szczególnie pod względem gwarancji producenta, certyfikaty są bardzo ważne. GRINDFIX posiada certyfikaty Bosch, Shimano Steps i Yamaha." },
            { q: "Jak długo powinien czekać rower w serwisie?", a: "Proste naprawy: 1–2 h. Przegląd pełny: 1–2 dni robocze. Budowa kół lub serwis amortyzatora: 2–5 dni. Jeśli serwis przetrzymuje rower ponad tydzień bez uzasadnienia – to zły znak." },
        ],
    },
};
