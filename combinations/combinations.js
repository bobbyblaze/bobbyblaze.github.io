var substances = [
    "Alcohol", "Amphetamines", "Benzodiazepines", "Caffeine", "Cannabis", 
    "Cocaine", "DMT", "Ketamine", "LSD", "MDMA", "Mushrooms", "Opioids"
];
var options = [
    "AlcoholAmphetamines", "AlcoholBenzodiazepines", "AlcoholCaffeine", 
    "AlcoholCannabis","AlcoholCocaine", "AlcoholDMT", "AlcoholKetamine",
    "AlcoholLSD", "AlcoholMDMA", "AlcoholMushrooms", "AlcoholOpioids",
    "AmphetaminesBenzodiazepines", "AmphetaminesCaffeine", "AmphetaminesCannabis",
    "AmphetaminesCocaine", "AmphetaminesDMT", "AmphetaminesKetamine", "AmphetaminesLSD", 
    "AmphetaminesMDMA", "AmphetaminesMushrooms", "AmphetaminesOpioids",
    "BenzodiazepinesCaffeine", "BenzodiazepinesCannabis", "BenzodiazepinesCocaine",
    "BenzodiazepinesDMT", "BenzodiazepinesKetamine", "BenzodiazepinesLSD", 
    "BenzodiazepinesMDMA", "BenzodiazepinesMushrooms", "BenzodiazepinesOpioids",
    "CaffeineCannabis", "CaffeineCocaine", "CaffeineDMT", "CaffeineKetamine", 
    "CaffeineLSD", "CaffeineMDMA", "CaffeineMushrooms", "CaffeineOpioids",
    "CannabisCocaine", "CannabisDMT", "CannabisKetamine", "CannabisLSD", 
    "CannabisMDMA", "CannabisMushrooms", "CannabisOpioids", "CocaineDMT", 
    "CocaineKetamine", "CocaineLSD", "CocaineMDMA", "CocaineMushrooms", "CocaineOpioids",
    "DMTKetamine", "DMTLSD", "DMTMDMA", "DMTMushrooms", "DMTOpioids", "KetamineLSD",
    "KetamineMDMA", "KetamineMushrooms", "KetamineOpioids", "LSDMDMA", "LSDMushrooms", 
    "LSDOpioids", "MDMAMushrooms", "MDMAOpioids", "MushroomsOpioids"
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
            dropdownValues == options[3] //alcohol cannabis
        || dropdownValues == options[18] //amphetamines mdma
        || dropdownValues == options[40] //cannabis ketamine
        || dropdownValues == options[42] //cannabis mdma
        || dropdownValues == options[44] //cannabis opioids
        || dropdownValues == options[51] //dmt ketamine
        || dropdownValues == options[52] //dmt lsd
        || dropdownValues == options[53] //dmt mdma
        || dropdownValues == options[54] //dmt mushrooms
        || dropdownValues == options[56] //ketamine lsd
        || dropdownValues == options[57] //ketamine mdma
        || dropdownValues == options[58] //ketamine mushrooms
        || dropdownValues == options[60] //lsd mdma
        || dropdownValues == options[61] //lsd mushrooms
        || dropdownValues == options[63] //mdma mushrooms
        ) {
        finalVerdict = "Nízke riziko a synergia";
    } else if (
           dropdownValues == options[2]  //alcohol caffeine
        || dropdownValues == options[30] //caffeine canabis
        || dropdownValues == options[32] //caffeine dmt
        || dropdownValues == options[33] //caffeine ketamine
        || dropdownValues == options[34] //caffeine lsd
        || dropdownValues == options[36] //caffeine mushrooms
        || dropdownValues == options[37] //caffeine opioids
        || dropdownValues == options[55] //dmt opioids
        || dropdownValues == options[62] //lsd opioids
        || dropdownValues == options[64] //mdma opioids
        || dropdownValues == options[65] //mushrooms opioids
        ) {
        finalVerdict = "Nízke riziko a žiadna synergia"
    } else if ( 
           dropdownValues == options[5]  //alcohol dmt
        || dropdownValues == options[7]  //alcohol lsd
        || dropdownValues == options[9]  //alcohol mushrooms
        || dropdownValues == options[11] //amphetamines benzodiazepines
        || dropdownValues == options[21] //benzodiazepines caffeine
        || dropdownValues == options[22] //benzodiazepines cannabis
        || dropdownValues == options[23] //benzodiazepines cocaine
        || dropdownValues == options[24] //benzodiazepines dmt
        || dropdownValues == options[26] //benzodiazepines lsd
        || dropdownValues == options[27] //benzodiazepines mdma
        || dropdownValues == options[28] //benzodiazepines mushrooms
        ) {
        finalVerdict = "Nízke riziko a zníženie účinku"
    } else if (
           dropdownValues == options[0]  //alkohol amphetamines
        || dropdownValues == options[8]  //alcohol mdma
        || dropdownValues == options[12] //amphetamines caffeine
        || dropdownValues == options[13] //amphetamines cannabis
        || dropdownValues == options[14] //amphetamines cocaine
        || dropdownValues == options[15] //amphetamines dmt
        || dropdownValues == options[16] //amphetamines ketamine
        || dropdownValues == options[17] //amphetamines lsd
        || dropdownValues == options[19] //amphetamines mushrooms
        || dropdownValues == options[20] //amphetamines opioids
        || dropdownValues == options[25] //benyodiazepines ketamine
        || dropdownValues == options[31] //caffeine cocaine
        || dropdownValues == options[35] //caffeine mdma
        || dropdownValues == options[38] //cannabis cocaine
        || dropdownValues == options[39] //cannabis dmt
        || dropdownValues == options[41] //cannabis lsd
        || dropdownValues == options[43] //cannabis mushrooms
        || dropdownValues == options[45] //cocaine dmt 
        || dropdownValues == options[46] //cocaine ketamine 
        || dropdownValues == options[47] //cocaine lsd 
        || dropdownValues == options[48] //cocaine mdma 
        || dropdownValues == options[49] //cocaine mushrooms 
        ) {
        finalVerdict = "Dávaj pozor"
    } else if (
            dropdownValues == options[4] //cocaine alkohol
         ) {
        finalVerdict = "Nebezpečné!"
    } else if (
           dropdownValues == options[1]  //alcohol benzodiazepines
        || dropdownValues == options[6]  //alcohol ketamine
        || dropdownValues == options[10] //alkohol opioids 
        || dropdownValues == options[29] //benyodiazepines opioids
        || dropdownValues == options[50] //cocaine opioids
        || dropdownValues == options[59] //ketamine opioids
        ) {
        finalVerdict = "Veľmi Nebezpečné!!!"
    } else {
        finalVerdict = calculateSwitched(secondarySelected + primarySelected);
    }

    return finalVerdict;
}

function calculateSwitched(dropdownValues){
    if (
        dropdownValues == options[3] //alcohol cannabis
    || dropdownValues == options[18] //amphetamines mdma
    || dropdownValues == options[40] //cannabis ketamine
    || dropdownValues == options[42] //cannabis mdma
    || dropdownValues == options[44] //cannabis opioids
    || dropdownValues == options[51] //dmt ketamine
    || dropdownValues == options[52] //dmt lsd
    || dropdownValues == options[53] //dmt mdma
    || dropdownValues == options[54] //dmt mushrooms
    || dropdownValues == options[56] //ketamine lsd
    || dropdownValues == options[57] //ketamine mdma
    || dropdownValues == options[58] //ketamine mushrooms
    || dropdownValues == options[60] //lsd mdma
    || dropdownValues == options[61] //lsd mushrooms
    || dropdownValues == options[63] //mdma mushrooms
    ) {
    finalVerdict = "Nízke riziko a synergia";
} else if (
       dropdownValues == options[2]  //alcohol caffeine
    || dropdownValues == options[30] //caffeine canabis
    || dropdownValues == options[32] //caffeine dmt
    || dropdownValues == options[33] //caffeine ketamine
    || dropdownValues == options[34] //caffeine lsd
    || dropdownValues == options[36] //caffeine mushrooms
    || dropdownValues == options[37] //caffeine opioids
    || dropdownValues == options[55] //dmt opioids
    || dropdownValues == options[62] //lsd opioids
    || dropdownValues == options[64] //mdma opioids
    || dropdownValues == options[65] //mushrooms opioids
    ) {
    finalVerdict = "Nízke riziko a žiadna synergia"
} else if ( 
       dropdownValues == options[5]  //alcohol dmt
    || dropdownValues == options[7]  //alcohol lsd
    || dropdownValues == options[9]  //alcohol mushrooms
    || dropdownValues == options[11] //amphetamines benzodiazepines
    || dropdownValues == options[21] //benzodiazepines caffeine
    || dropdownValues == options[22] //benzodiazepines cannabis
    || dropdownValues == options[23] //benzodiazepines cocaine
    || dropdownValues == options[24] //benzodiazepines dmt
    || dropdownValues == options[26] //benzodiazepines lsd
    || dropdownValues == options[27] //benzodiazepines mdma
    || dropdownValues == options[28] //benzodiazepines mushrooms
    ) {
    finalVerdict = "Nízke riziko a zníženie účinku"
} else if (
       dropdownValues == options[0]  //alkohol amphetamines
    || dropdownValues == options[8]  //alcohol mdma
    || dropdownValues == options[12] //amphetamines caffeine
    || dropdownValues == options[13] //amphetamines cannabis
    || dropdownValues == options[14] //amphetamines cocaine
    || dropdownValues == options[15] //amphetamines dmt
    || dropdownValues == options[16] //amphetamines ketamine
    || dropdownValues == options[17] //amphetamines lsd
    || dropdownValues == options[19] //amphetamines mushrooms
    || dropdownValues == options[20] //amphetamines opioids
    || dropdownValues == options[25] //benyodiazepines ketamine
    || dropdownValues == options[31] //caffeine cocaine
    || dropdownValues == options[35] //caffeine mdma
    || dropdownValues == options[38] //cannabis cocaine
    || dropdownValues == options[39] //cannabis dmt
    || dropdownValues == options[41] //cannabis lsd
    || dropdownValues == options[43] //cannabis mushrooms
    || dropdownValues == options[45] //cocaine dmt 
    || dropdownValues == options[46] //cocaine ketamine 
    || dropdownValues == options[47] //cocaine lsd 
    || dropdownValues == options[48] //cocaine mdma 
    || dropdownValues == options[49] //cocaine mushrooms 
    ) {
    finalVerdict = "Dávaj pozor"
} else if (
        dropdownValues == options[4] //cocaine alkohol
     ) {
    finalVerdict = "Nebezpečné!"
} else if (
       dropdownValues == options[1]  //alcohol benzodiazepines
    || dropdownValues == options[6]  //alcohol ketamine
    || dropdownValues == options[10] //alkohol opioids 
    || dropdownValues == options[29] //benyodiazepines opioids
    || dropdownValues == options[50] //cocaine opioids
    || dropdownValues == options[59] //ketamine opioids
    ) {
    finalVerdict = "Veľmi Nebezpečné!!!"
} else {
        finalVerdict = "Neznáme"
    }

    return finalVerdict;
}

const outputElement = document.getElementById("verdict");
const element = document.getElementById("calculate");
element.addEventListener("click", function() {
    if(primarySelected == secondarySelected){
        finalVerdict = "Pohodička"
        outputElement.innerHTML = finalVerdict;
    } else {
        calculate(primarySelected + secondarySelected);
        outputElement.innerHTML = finalVerdict;
    }
});