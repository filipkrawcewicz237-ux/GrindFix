const fs = require('fs');
const path = require('path');

const replacements = [
    // wydarzenie dla firm
    [/180 zł \/ rower/g, '220 zł / rower'],
    [/cena wynosi 180 zł/gi, 'cena wynosi 220 zł'],
    [/pakiet 180 zł/gi, 'pakiet 220 zł'],
    [/cenie 180 zł/gi, 'cenie 220 zł'],
    [/od 180 zł \/ rower/gi, 'od 220 zł / rower'],
    [/180 zł za rower/gi, '220 zł za rower'],

    // cennik and others
    [/od 80 do 150 zł/g, 'od 150 do 230 zł'],
    [/od 80 do 180 zł/g, 'od 150 do 230 zł'],
    [/od 80 zł \(podstawowy\) do 120 zł \(pełny/g, 'od 150 zł (podstawowy) do 230 zł (pełny'],
    [/Przegląd roweru od 80 zł/g, 'Przegląd roweru 150 zł'],
    [/przegląd e-bike kosztuje od 150 zł/g, 'przegląd premium kosztuje 430 zł'],
    [/kosztująca od 25–35 zł/g, 'kosztująca od 30–50 zł'],
    [/\(30 zł wymiany\)/g, '(40 zł wymiany)'],
    [/30 zł robocizny/g, '40 zł robocizny'],
    [/od 80 zł za koło/g, 'od 100 zł za koło'],
    [/od 150 zł za koło/g, 'od 180 zł za koło'],
    [/dojazd od 30 zł/g, 'dojazd od 40 zł'],

    // amortyzator exceptions
    [/Serwis podstawowy widelca \(Lower Leg\) – od 120 zł \+ części/g, 'Serwis podstawowy widelca (Lower Leg) – od 150 zł + części'],
    [/Serwis pełny widelca \(Full Service\) – od 200 zł \+ części/g, 'Serwis pełny widelca (Full Service) – od 240 zł + części'],
    [/Serwis tylnego amortyzatora \(basic\) – od 120 zł \+ części/g, 'Serwis tylnego amortyzatora (basic) – od 150 zł + części'],
    [/Serwis tylnego amortyzatora \(full\) – od 180 zł \+ części/g, 'Serwis tylnego amortyzatora (full) – od 220 zł + części'],
    [/Regulacja ustawień \(bez serwisu\) – od 40 zł/g, 'Regulacja ustawień (bez serwisu) – od 50 zł'],
    [/od 120 zł \+ części \(uszczelki i olej\)/g, 'od 150 zł + części (uszczelki i olej)'],
    [/od 200 zł \+ części/g, 'od 240 zł + części'],
    [/od 120 zł za serwis/g, 'od 150 zł za serwis'],

    // specific list items across district pages
    [/Wymiana dętki – od 20 zł/g, 'Wymiana dętki – od 30 zł'],
    [/Przebita dętka lub opona – od 20 zł/g, 'Przebita dętka lub opona – od 30 zł'],
    [/Przebita opona lub dętka – szybka wymiana od 20 zł/g, 'Przebita opona lub dętka – szybka wymiana od 30 zł'],
    [/Regulacja przerzutek i hamulców – od 25 zł/g, 'Regulacja przerzutek i hamulców – od 30 zł'],
    [/Regulacja przerzutek po zimie – od 35 zł/g, 'Regulacja przerzutek po zimie – od 50 zł'],
    [/Regulacja przerzutki – od 35 zł/g, 'Regulacja przerzutki – od 50 zł'],
    [/Regulacja hamulców tarczowych – od 35 zł/g, 'Regulacja hamulców tarczowych – od 50 zł'],
    [/Centrowanie koła – 40–70 zł/g, 'Centrowanie koła – 50–90 zł'],
    [/Wycentrowanie koła – 40–70 zł/g, 'Wycentrowanie koła – 50–90 zł'],
    [/Przegląd roweru – od 80 zł/g, 'Przegląd roweru – od 150 zł'],
    [/Przegląd roweru przed sezonem – od 80 zł/g, 'Przegląd roweru przed sezonem – od 150 zł'],
    [/Przegląd podstawowy – od 80 zł/g, 'Przegląd podstawowy – od 150 zł'],
    [/Przegląd pełny – od 120 zł/g, 'Przegląd pełny – od 230 zł'],
    [/Serwis e-bike – od 150 zł/g, 'Serwis e-bike (Przegląd premium) – od 430 zł'],
    [/Serwis roweru elektrycznego – od 150 zł/g, 'Serwis roweru elektrycznego (Przegląd premium) – od 430 zł'],
    [/Mobilny dojazd na Wolę – od 30 zł/g, 'Mobilny dojazd na Wolę – od 40 zł'],
    [/Mobilny dojazd na Ursynów – od 30 zł/g, 'Mobilny dojazd na Ursynów – od 40 zł'],
    [/Mobilny dojazd na Mokotów – od 30 zł/g, 'Mobilny dojazd na Mokotów – od 40 zł'],
    [/Mobilny dojazd na Pragę – od 30 zł/g, 'Mobilny dojazd na Pragę – od 40 zł'],
    [/Mobilny dojazd do Centrum – od 30 zł/g, 'Mobilny dojazd do Centrum – od 40 zł'],
    [/Odpowietrzenie hamulców hydraulicznych – od 80 zł/g, 'Odpowietrzenie hamulców hydraulicznych – od 100 zł'],

    // and some stray ones found in PRZEGLAD:
    [/Cena od 80 zł/g, 'Cena od 150 zł'],
    [/zaczyna się od 80 zł/g, 'zaczyna się od 150 zł'],
    [/kosztuje od 120 zł/g, 'kosztuje od 230 zł'],
    [/e-bike\) od 150 zł/g, 'e-bike) od 430 zł'],
    [/ceny od 80 zł/g, 'ceny od 150 zł'],

    // and stray ones from NAPRAWA
    [/Naprawa od 20 zł/g, 'Naprawa od 30 zł'],
    [/od 20 zł \(wymiana dętki\)/g, 'od 30 zł (wymiana dętki)'],

    // global ebike fixes
    [/diagnoza błędów kosztuje od 80 zł/gi, 'diagnoza błędów kosztuje od 100 zł'],
    [/diagnoza od 80 zł/gi, 'diagnoza od 100 zł'],
];

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
    });
}

const dir = 'd:/Programs/User/Downloads/Grindfix/src/app';

let modifiedFiles = 0;
walkDir(dir, function (filePath) {
    if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        let content = fs.readFileSync(filePath, 'utf-8');
        let newContent = content;
        for (let r of replacements) {
            newContent = newContent.replace(r[0], r[1]);
        }
        if (newContent !== content) {
            fs.writeFileSync(filePath, newContent, 'utf-8');
            modifiedFiles++;
        }
    }
});
console.log('Modified ' + modifiedFiles + ' files.');
