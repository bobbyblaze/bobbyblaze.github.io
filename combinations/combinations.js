var substances = [
    "Alkohol", "Amfetamín", "Benzodiazepíny", "Kofeín", "Konope", 
    "Kokaín", "DMT", "Ketamín", "LSD", "MDMA", "Huby", "Opiáty"
];

var causes = [
    "Môže spôsobiť alkoholickú intoxikáciu, ktorá sa prejavuje poruchou úsudku, strátou pamäti a zrakovej ostrosti, ako aj zníženou koordináciou pohybov a nesúvislou rečou.", 
    "Môže spôsobiť zvýšenie tepovej frekvencie, krvného tlaku a dýchania, zníženie chuti do jedla a zvýšenú bdelosť, ale aj úzkosť, paranoiu a agresivitu.", 
    "Môžu spôsobiť ospalosť, závraty a zmätenosť, ako aj zníženú koordináciu a spomalenie reakčného času.", 
    "Môže zvýšiť ostražitosť, energiu a tepovú frekvenciu, ako aj znížiť únavu, ale môže tiež spôsobiť nervozitu, záchvaty a gastrointestinálne problémy.", 
    "Pravidelné užívanie konope môže viesť k poškodeniu kognitívnycôže spôsobiť zníženú koordináciu, úzkosť a zmenenú vnímavosť, ako aj zvýšenú tepovú frekvenciu, krvný tlak a suché ústa.", 
    "Môže spôsobiť zvýšenie tepovej frekvencie, krvného tlaku a dýchacieho rytmu, zvýšenú energiu a sebaistotu, ale aj pocit úzkosti, paranoidnosti a halucinácie.", 
    "Môže spôsobiť zmenu vedomia, zvýšenú kreativitu a rýchle srdcové tepy, ale aj úzkosť, paniku a nekontrolované pocity strachu.", 
    "Môže spôsobiť pocit oddelenia od tela a okolitého sveta, zníženú citlivosť na bolesť a pocit eufórie, ale aj stratu pamäti a nepríjemné zážitky.", 
    "Môže spôsobiť silné vizuálne a sluchové halucinácie, zvýšenú vnímavosť a rýchle srdcové tepy, ale aj úzkosť, paranoidnosť a straty kontroly.", 
    "Môže spôsobiť zvýšenú energiu, zvýšené empatie a súcitu, ale aj nevoľnosť, záchvaty a zvýšenú srdcovú frekvenciu.", 
    "Môžu spôsobiť zvýšenú vnímavosť, intenzívne vizuálne a sluchové halucinácie, ale aj nevoľnosť, záchvaty a zvýšenú srdcovú frekvenciu.", 
    "Môžu spôsobiť zníženie bolesti, pocit eufórie a úľavu od stresu, ale aj ospalosť, zhoršenú koordináciu a pocit nevoľnosti."
];

var options = [
    "AlkoholAmfetamín", "AlkoholBenzodiazepíny", "AlkoholKofeín", 
    "AlkoholKonope","AlkoholKokaín", "AlkoholDMT", "AlkoholKetamín",
    "AlkoholLSD", "AlkoholMDMA", "AlkoholHuby", "AlkoholOpiáty",
    "AmfetamínBenzodiazepíny", "AmfetamínKofeín", "AmfetamínKonope",
    "AmfetamínKokaín", "AmfetamínDMT", "AmfetamínKetamín", "AmfetamínLSD", 
    "AmfetamínMDMA", "AmfetamínHuby", "AmfetamínOpiáty",
    "BenzodiazepínyKofeín", "BenzodiazepínyKonope", "BenzodiazepínyKokaín",
    "BenzodiazepínyDMT", "BenzodiazepínyKetamín", "BenzodiazepínyLSD", 
    "BenzodiazepínyMDMA", "BenzodiazepínyHuby", "BenzodiazepínyOpiáty",
    "KofeínKonope", "KofeínKokaín", "KofeínDMT", "KofeínKetamín", 
    "KofeínLSD", "KofeínMDMA", "KofeínHuby", "KofeínOpiáty",
    "KonopeKokaín", "KonopeDMT", "KonopeKetamín", "KonopeLSD", 
    "KonopeMDMA", "KonopeHuby", "KonopeOpiáty", "KokaínDMT", 
    "KokaínKetamín", "KokaínLSD", "KokaínMDMA", "KokaínHuby", "KokaínOpiáty",
    "DMTKetamín", "DMTLSD", "DMTMDMA", "DMTHuby", "DMTOpiáty", "KetamínLSD",
    "KetamínMDMA", "KetamínHuby", "KetamínOpiáty", "LSDMDMA", "LSDHuby", 
    "LSDOpiáty", "MDMAHuby", "MDMAOpiáty", "HubyOpiáty"
];

var primarySelected;
var secondarySelected;
var finalVerdict;

//insertion of substances into dropdowns 
substances.forEach(function(item){
    let opt = document.createElement("option");
    let opt2 = document.createElement("option");
    opt.text = item;
    opt.value = item;
    opt2.text = item;
    opt2.value = item;
    firstSubstance.appendChild(opt);
    secondSubstance.appendChild(opt2);
});

//get selected substance from first dropdown
var selectFirst = document.getElementById('firstSubstance');
selectFirst.onchange = (ev) =>{
    primarySelected = selectFirst.value;
}

//get selected substance from second dropdown
var selectSecond = document.getElementById('secondSubstance');
selectSecond.onchange = (ev) =>{
    secondarySelected = selectSecond.value;
}

function calculate(dropdownValues){
    if (
            dropdownValues == options[3] //Alkohol Konope
        || dropdownValues == options[18] //Amfetamín mdma
        || dropdownValues == options[40] //Konope Ketamín
        || dropdownValues == options[42] //Konope mdma
        || dropdownValues == options[44] //Konope Opiáty
        || dropdownValues == options[51] //dmt Ketamín
        || dropdownValues == options[52] //dmt lsd
        || dropdownValues == options[53] //dmt mdma
        || dropdownValues == options[54] //dmt Huby
        || dropdownValues == options[56] //Ketamín lsd
        || dropdownValues == options[57] //Ketamín mdma
        || dropdownValues == options[58] //Ketamín Huby
        || dropdownValues == options[60] //lsd mdma
        || dropdownValues == options[61] //lsd Huby
        || dropdownValues == options[63] //mdma Huby
        ) {
        finalVerdict = "Nízke riziko a synergia";
    } else if (
           dropdownValues == options[2]  //Alkohol Kofeín
        || dropdownValues == options[30] //Kofeín canabis
        || dropdownValues == options[32] //Kofeín dmt
        || dropdownValues == options[33] //Kofeín Ketamín
        || dropdownValues == options[34] //Kofeín lsd
        || dropdownValues == options[36] //Kofeín Huby
        || dropdownValues == options[37] //Kofeín Opiáty
        || dropdownValues == options[55] //dmt Opiáty
        || dropdownValues == options[62] //lsd Opiáty
        || dropdownValues == options[64] //mdma Opiáty
        || dropdownValues == options[65] //Huby Opiáty
        ) {
        finalVerdict = "Nízke riziko a žiadna synergia"
    } else if ( 
           dropdownValues == options[5]  //Alkohol dmt
        || dropdownValues == options[7]  //Alkohol lsd
        || dropdownValues == options[9]  //Alkohol Huby
        || dropdownValues == options[11] //Amfetamín Benzodiazepíny
        || dropdownValues == options[21] //Benzodiazepíny Kofeín
        || dropdownValues == options[22] //Benzodiazepíny Konope
        || dropdownValues == options[23] //Benzodiazepíny Kokaín
        || dropdownValues == options[24] //Benzodiazepíny dmt
        || dropdownValues == options[26] //Benzodiazepíny lsd
        || dropdownValues == options[27] //Benzodiazepíny mdma
        || dropdownValues == options[28] //Benzodiazepíny Huby
        ) {
        finalVerdict = "Nízke riziko a zníženie účinku"
    } else if (
           dropdownValues == options[0]  //alkohol Amfetamín
        || dropdownValues == options[8]  //Alkohol mdma
        || dropdownValues == options[12] //Amfetamín Kofeín
        || dropdownValues == options[13] //Amfetamín Konope
        || dropdownValues == options[14] //Amfetamín Kokaín
        || dropdownValues == options[15] //Amfetamín dmt
        || dropdownValues == options[16] //Amfetamín Ketamín
        || dropdownValues == options[17] //Amfetamín lsd
        || dropdownValues == options[19] //Amfetamín Huby
        || dropdownValues == options[20] //Amfetamín Opiáty
        || dropdownValues == options[25] //benyodiazepines Ketamín
        || dropdownValues == options[31] //Kofeín Kokaín
        || dropdownValues == options[35] //Kofeín mdma
        || dropdownValues == options[38] //Konope Kokaín
        || dropdownValues == options[39] //Konope dmt
        || dropdownValues == options[41] //Konope lsd
        || dropdownValues == options[43] //Konope Huby
        || dropdownValues == options[45] //Kokaín dmt 
        || dropdownValues == options[46] //Kokaín Ketamín 
        || dropdownValues == options[47] //Kokaín lsd 
        || dropdownValues == options[48] //Kokaín mdma 
        || dropdownValues == options[49] //Kokaín Huby 
        ) {
        finalVerdict = "Dávaj pozor"
    } else if (
            dropdownValues == options[4] //Kokaín alkohol
         ) {
        finalVerdict = "Nebezpečné!"
    } else if (
           dropdownValues == options[1]  //Alkohol Benzodiazepíny
        || dropdownValues == options[6]  //Alkohol Ketamín
        || dropdownValues == options[10] //alkohol Opiáty 
        || dropdownValues == options[29] //benyodiazepines Opiáty
        || dropdownValues == options[50] //Kokaín Opiáty
        || dropdownValues == options[59] //Ketamín Opiáty
        ) {
        finalVerdict = "Veľmi Nebezpečné!!!"
    } else {
        finalVerdict = calculateSwitched(secondarySelected + primarySelected);
    }

    return finalVerdict;
}

function calculateSwitched(dropdownValues){
    if (
        dropdownValues == options[3] //Alkohol Konope
    || dropdownValues == options[18] //Amfetamín mdma
    || dropdownValues == options[40] //Konope Ketamín
    || dropdownValues == options[42] //Konope mdma
    || dropdownValues == options[44] //Konope Opiáty
    || dropdownValues == options[51] //dmt Ketamín
    || dropdownValues == options[52] //dmt lsd
    || dropdownValues == options[53] //dmt mdma
    || dropdownValues == options[54] //dmt Huby
    || dropdownValues == options[56] //Ketamín lsd
    || dropdownValues == options[57] //Ketamín mdma
    || dropdownValues == options[58] //Ketamín Huby
    || dropdownValues == options[60] //lsd mdma
    || dropdownValues == options[61] //lsd Huby
    || dropdownValues == options[63] //mdma Huby
    ) {
    finalVerdict = "Nízke riziko a synergia";
} else if (
       dropdownValues == options[2]  //Alkohol Kofeín
    || dropdownValues == options[30] //Kofeín canabis
    || dropdownValues == options[32] //Kofeín dmt
    || dropdownValues == options[33] //Kofeín Ketamín
    || dropdownValues == options[34] //Kofeín lsd
    || dropdownValues == options[36] //Kofeín Huby
    || dropdownValues == options[37] //Kofeín Opiáty
    || dropdownValues == options[55] //dmt Opiáty
    || dropdownValues == options[62] //lsd Opiáty
    || dropdownValues == options[64] //mdma Opiáty
    || dropdownValues == options[65] //Huby Opiáty
    ) {
    finalVerdict = "Nízke riziko a žiadna synergia"
} else if ( 
       dropdownValues == options[5]  //Alkohol dmt
    || dropdownValues == options[7]  //Alkohol lsd
    || dropdownValues == options[9]  //Alkohol Huby
    || dropdownValues == options[11] //Amfetamín Benzodiazepíny
    || dropdownValues == options[21] //Benzodiazepíny Kofeín
    || dropdownValues == options[22] //Benzodiazepíny Konope
    || dropdownValues == options[23] //Benzodiazepíny Kokaín
    || dropdownValues == options[24] //Benzodiazepíny dmt
    || dropdownValues == options[26] //Benzodiazepíny lsd
    || dropdownValues == options[27] //Benzodiazepíny mdma
    || dropdownValues == options[28] //Benzodiazepíny Huby
    ) {
    finalVerdict = "Nízke riziko a zníženie účinku"
} else if (
       dropdownValues == options[0]  //alkohol Amfetamín
    || dropdownValues == options[8]  //Alkohol mdma
    || dropdownValues == options[12] //Amfetamín Kofeín
    || dropdownValues == options[13] //Amfetamín Konope
    || dropdownValues == options[14] //Amfetamín Kokaín
    || dropdownValues == options[15] //Amfetamín dmt
    || dropdownValues == options[16] //Amfetamín Ketamín
    || dropdownValues == options[17] //Amfetamín lsd
    || dropdownValues == options[19] //Amfetamín Huby
    || dropdownValues == options[20] //Amfetamín Opiáty
    || dropdownValues == options[25] //benyodiazepines Ketamín
    || dropdownValues == options[31] //Kofeín Kokaín
    || dropdownValues == options[35] //Kofeín mdma
    || dropdownValues == options[38] //Konope Kokaín
    || dropdownValues == options[39] //Konope dmt
    || dropdownValues == options[41] //Konope lsd
    || dropdownValues == options[43] //Konope Huby
    || dropdownValues == options[45] //Kokaín dmt 
    || dropdownValues == options[46] //Kokaín Ketamín 
    || dropdownValues == options[47] //Kokaín lsd 
    || dropdownValues == options[48] //Kokaín mdma 
    || dropdownValues == options[49] //Kokaín Huby 
    ) {
    finalVerdict = "Dávaj pozor"
} else if (
        dropdownValues == options[4] //Kokaín alkohol
     ) {
    finalVerdict = "Nebezpečné!"
} else if (
       dropdownValues == options[1]  //Alkohol Benzodiazepíny
    || dropdownValues == options[6]  //Alkohol Ketamín
    || dropdownValues == options[10] //alkohol Opiáty 
    || dropdownValues == options[29] //benyodiazepines Opiáty
    || dropdownValues == options[50] //Kokaín Opiáty
    || dropdownValues == options[59] //Ketamín Opiáty
    ) {
    finalVerdict = "Veľmi Nebezpečné!!!"
} else {
        finalVerdict = "Neznáme"
    }

    return finalVerdict;
}

function description(primary, secondary) {
    // popis k jednotlivým drogám 
    const description1 = document.getElementById("substance1text");
    const description2 = document.getElementById("substance2text");

    for(x = 0; x < substances.length; x++){
        if(primary == substances[x]){
            description1.innerHTML = causes[x];
        }
        if(secondary == substances[x]){
            description2.innerHTML = causes[x];
        }
    }
}

const substance1 = document.getElementById("substance1");
const substance2 = document.getElementById("substance2");

const outputElement = document.getElementById("verdict");
const element = document.getElementById("calculate");
element.addEventListener("click", function() {
    if(primarySelected == secondarySelected){
        finalVerdict = "Pohodička"
        outputElement.innerHTML = finalVerdict;
    } else {
        calculate(primarySelected + secondarySelected);
        outputElement.innerHTML = finalVerdict;
        substance1.innerHTML = primarySelected;
        substance2.innerHTML = secondarySelected;
        description(primarySelected, secondarySelected);
    }
});