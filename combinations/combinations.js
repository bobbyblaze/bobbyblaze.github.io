var substances = [
    "LSD", "Huby", "DMT", "Meskalín", "DOx", "NBOMe", "2C-x", "2C-T-x", "5-MeO-x", "Konope", "Ketamín", "MXE", "DXM", "N2O", "Amfetamín", "MDMA", "Kokaín", "a-PVP", "4-MMC", "Kofeín", "Alkohol", "GHB/GBL", "Opiáty", "Tramadol", "Benzodiazepíny", "MAOI", "SSRI"
];
/**
 * 0 same substance
 * 1 low risk counteracting
 * 2 low risk no amplification
 * 3 low risk and amplification
 * 4 caution
 * 5 unsafe
 * 6 dangerous
 */
var substances2D = [
    //L, H, D, M, D, N, 2, 2, 5, K, K, M, D, N, A, M, K, a, 4, K, A, G, O, T, B, M, S 
    [0, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 4, 4, 3, 2, 1, 1, 2, 5, 1, 1, 1],
    [3, 0, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 4, 4, 3, 2, 1, 1, 2, 5, 1, 3, 1],
    [3, 3, 0, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 4, 4, 3, 2, 1, 1, 2, 5, 1, 3, 1],
    [3, 3, 3, 0, 4, 4, 4, 4, 4, 4, 3, 3, 3, 3, 4, 3, 4, 5, 5, 2, 1, 1, 2, 5, 1, 4, 1],
    [3, 3, 3, 4, 0, 4, 4, 4, 4, 4, 3, 4, 5, 3, 5, 4, 5, 5, 5, 4, 1, 1, 2, 5, 1, 4, 1],
    [3, 3, 3, 4, 4, 0, 4, 4, 4, 4, 3, 4, 5, 3, 5, 4, 5, 6, 5, 4, 1, 1, 2, 5, 1, 4, 1],
    [3, 3, 3, 4, 4, 4, 0, 4, 4, 4, 3, 3, 3, 3, 4, 3, 4, 5, 5, 2, 1, 1, 2, 5, 1, 4, 1],
    [3, 3, 3, 4, 4, 4, 3, 0, 4, 4, 3, 4, 5, 3, 5, 4, 5, 5, 6, 2, 1, 1, 2, 5, 1, 4, 1],
    [3, 3, 3, 4, 4, 4, 4, 4, 0, 4, 3, 3, 5, 3, 5, 4, 5, 5, 5, 2, 1, 1, 2, 5, 1, 6, 1],
    [4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 3, 3, 3, 3, 4, 3, 4, 4, 3, 2, 3, 3, 3, 3, 1, 3, 2],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 2, 3, 4, 3, 4, 5, 5, 2, 6, 6, 6, 6, 4, 4, 2],
    [3, 3, 3, 3, 4, 4, 3, 4, 3, 3, 3, 0, 2, 3, 4, 4, 4, 5, 5, 2, 6, 6, 6, 6, 4, 5, 4],
    [3, 3, 3, 3, 5, 5, 3, 5, 5, 3, 2, 2, 0, 3, 5, 6, 5, 5, 6, 2, 6, 6, 6, 6, 4, 6, 6],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 2, 4, 4, 4, 4, 1, 2, 2],
    [4, 4, 4, 4, 5, 5, 4, 5, 5, 4, 4, 4, 5, 3, 0, 3, 4, 6, 4, 4, 4, 4, 4, 6, 1, 6, 2],
    [3, 3, 3, 3, 4, 4, 3, 4, 4, 3, 3, 4, 6, 3, 3, 0, 4, 4, 4, 4, 4, 4, 2, 6, 1, 6, 1],
    [4, 4, 4, 4, 5, 5, 4, 5, 5, 4, 4, 4, 5, 3, 4, 4, 0, 5, 4, 4, 5, 4, 6, 6, 1, 6, 2],
    [4, 4, 4, 5, 5, 6, 5, 5, 5, 4, 5, 5, 5, 3, 6, 4, 5, 0, 5, 4, 4, 5, 5, 6, 1, 6, 2],
    [3, 3, 3, 5, 5, 5, 5, 6, 5, 3, 5, 5, 6, 3, 4, 4, 4, 5, 0, 4, 4, 4, 5, 6, 1, 6, 1],
    [2, 2, 2, 2, 4, 4, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 1, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 4, 4, 4, 5, 4, 4, 2, 0, 6, 6, 6, 6, 5, 4],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 6, 6, 6, 4, 4, 4, 4, 5, 4, 2, 6, 0, 6, 6, 6, 3, 2],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 6, 6, 6, 4, 4, 2, 6, 5, 5, 2, 6, 6, 0, 6, 6, 4, 2],
    [5, 5, 5, 5, 5, 5, 5, 5, 5, 3, 6, 6, 6, 4, 6, 6, 6, 6, 6, 2, 6, 6, 6, 0, 6, 6, 6],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 6, 6, 6, 6, 0, 3, 2],
    [1, 3, 3, 4, 4, 4, 4, 4, 6, 3, 4, 5, 6, 2, 6, 6, 6, 6, 6, 2, 5, 3, 4, 6, 3, 0, 6],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 4, 6, 2, 2, 1, 2, 2, 1, 2, 4, 2, 2, 6, 2, 6, 0] // SSRI
];
//individual description for selected drugs
var descriptions = [
    /* lsd */ "Môže spôsobiť silné vizuálne a sluchové halucinácie, zvýšenú vnímavosť a rýchle srdcové tepy, ale aj úzkosť, paranoidnosť a straty kontroly.",
    /* huby */ "Môžu spôsobiť zvýšenú vnímavosť, intenzívne vizuálne a sluchové halucinácie, ale aj nevoľnosť, záchvaty a zvýšenú srdcovú frekvenciu.",
    /* dmt */ "Môže spôsobiť zmenu vedomia, zvýšenú kreativitu a rýchle srdcové tepy, ale aj úzkosť, paniku a nekontrolované pocity strachu.",
    /* meskalin */ "Môže viesť k vizuálnym halucináciám, zmene myslenia a zvýšenej citlivosti na zvuky a farby, ale aj nevoľnosť a zvracanie.",
    /* DOx */ "Tieto syntetické psychedelické látky môžu spôsobiť intenzívne zážitky a zmeny vedomia, ale aj úzkosť, nevoľnosť a zhoršenú koordináciu.",
    /* NBOMe */ "Môžu viesť k vizuálnym halucináciám, zmenám myslenia a zvýšenej citlivosti na zvuky a farby, ale aj nevoľnosť, zvracanie a zhoršenú koordináciu.",
    /* 2C-x */ "Môžu viesť k vizuálnym halucináciám, zmenám vedomia a zvýšenej citlivosti na zvuky a farby, ale aj nevoľnosť a zhoršenú koordináciu.",
    /* 2C-T-x */ "Môžu viesť k vizuálnym halucináciám, zmenám vedomia a zvýšenej citlivosti na zvuky a farby, ale aj nevoľnosť a zhoršenú koordináciu",
    /* 5-MeO-x */ "Môžu viesť k vizuálnym halucináciám, zmenám vedomia a zvýšenej citlivosti na zvuky a farby, ale aj nevoľnosť, zvracanie a zhoršenú koordináciu.",
    /* konope */ "Môže spôsobiť zníženú koordináciu, úzkosť a zmenenú vnímavosť ako aj zvýšenú tepovú frekvenciu, krvný tlak a suché ústa.",
    /* ketamin */ "Môže spôsobiť pocit oddelenia od tela a okolitého sveta, zníženú citlivosť na bolesť a pocit eufórie, ale aj stratu pamäti a nepríjemné zážitky.",
    /* MXE */ "Môže viesť k halucináciám, znecitliveniu, zníženiu koordinácie a zmene vedomia. Taktiež môže spôsobiť eufóriu, pocit odpočinku, ale aj nevoľnosť a zvracanie.",
    /* DXM */ "Môže viesť k halucináciám, znecitliveniu, zmene vedomia a zvýšenej citlivosti na zvuky a farby. Taktiež môže spôsobiť eufóriu, ale aj nevoľnosť a zvracanie.",
    /* N2O */ "Známy aj ako \"smiechový plyn\", môže viesť k zmenám vedomia a pocitu eufórie. Taktiež môže spôsobiť výpadky pamäti, necitlivosť a zmätenosť, ale aj nevoľnosť a zvracanie.",
    /* amfetamin */ "Môže spôsobiť zvýšenie tepovej frekvencie, krvného tlaku a dýchania, zníženie chuti do jedla a zvýšenú bdelosť, ale aj úzkosť, paranoiu a agresivitu.",
    /* mdma */ "Môže spôsobiť zvýšenú energiu, zvýšené empatie a súcitu, ale aj nevoľnosť, záchvaty a zvýšenú srdcovú frekvenciu.",
    /* kokain */ "Môže spôsobiť zvýšenie tepovej frekvencie, krvného tlaku a dýchacieho rytmu, zvýšenú energiu a sebaistotu, ale aj pocit úzkosti, paranoidnosti a halucinácie.",
    /* a-PVP */ "Môže viesť k zvýšeniu energie, zvýšeniu mozgovej činnosti a halucináciám. Taktiež môže spôsobiť eufóriu, ale aj zvýšený tlak krvi, zvýšený tep srdca a riziko infarktu.",
    /* 4-MMC */ "Môže viesť k zvýšeniu energie, zvýšeniu mozgovej činnosti a halucináciám. Taktiež môže spôsobiť eufóriu, ale aj zníženú inhibíciu, zvýšený tep srdca a krvný tlak, úzkosť a nespavosť.",
    /* kofein */ "Môže zvýšiť ostražitosť, energiu a tepovú frekvenciu, ako aj znížiť únavu, ale môže tiež spôsobiť nervozitu, záchvaty a gastrointestinálne problémy.",
    /* alkohol */ "Môže spôsobiť alkoholickú intoxikáciu, ktorá sa prejavuje poruchou úsudku, stratou pamäti a zrakovej ostrosti ako aj zníženou koordináciou pohybov a nesúvislou rečou.",
    /* GHB/GBL */ "Môžu spôsobiť zmiernenie úzkosti, zníženie inhibícií a pocit eufórie. Taktiež môžu spôsobiť znecitlivenie, zvýšenie závislosti a kómu.",
    /* opiaty */ "Môžu spôsobiť zníženie bolesti, pocit eufórie a úľavu od stresu, ale aj ospalosť, zhoršenú koordináciu a pocit nevoľnosti.",
    /* Tramadol */ "Môže viesť k úľave od bolesti, zmierneniu úzkosti a zvýšeniu nálady. Taktiež môže spôsobiť ospalosť, závraty, nevoľnosť, zvracanie a zvýšené riziko závislosti.",
    /* benzo */ "Môžu spôsobiť ospalosť, závraty a zmätenosť ako aj zníženú koordináciu a spomalenie reakčného času.",
    /* MAOI */ "Môžu viesť k zvýšeniu nálady, zníženiu úzkosti a zvýšeniu mozgovej činnosti. Taktiež môžu spôsobiť ospalosť, závraty, nevoľnosť, zvracanie a zvýšené riziko závažných vedľajších účinkov, ako je hypertenzia.",
    /* SSRI */ "Môžu viesť k zvýšeniu nálady, zníženiu úzkosti a zvýšeniu mozgovej činnosti. Taktiež môžu spôsobiť nevoľnosť, zvracanie, nervozitu, bolesti hlavy a zvýšené riziko vedľajších účinkov, ako je riziko závažných zmien nálady a správania."
];
//get html element - dropdowns 
var firstDropdown = document.getElementById('firstSubstance');
var secondDropdown = document.getElementById('secondSubstance');
//title for individual drugs
var substanceTitleOne = document.getElementById("substance1");
var substanceTitleTwo = document.getElementById("substance2");
//description for individual drugs
var descriptionOne = document.getElementById("substance1text");
var descriptionTwo = document.getElementById("substance2text");
//main calculation message holder 
var finalMessage = document.getElementById("verdict");
//button for add click listener
var buttonCalculate = document.getElementById("calculate");
var arrowDown = document.getElementById("arrowDown");
var arrowUp = document.getElementById("arrowUp");
//message holder - for moving
var messageHolder = document.getElementById("msgHolder");
var primarySelected;
var secondarySelected;
var finalVerdict;
var num;
//insertion of substances into dropdowns 
substances.forEach(function (item) {
    var opt = document.createElement("option");
    var opt2 = document.createElement("option");
    opt.text = item;
    opt.value = item;
    opt2.text = item;
    opt2.value = item;
    firstDropdown.appendChild(opt);
    secondDropdown.appendChild(opt2);
});
//get selected substance from first dropdown
firstDropdown.onchange = function (ev) {
    primarySelected = firstDropdown.value;
};
//get selected substance from second dropdown
secondDropdown.onchange = function (ev) {
    secondarySelected = secondDropdown.value;
};
//get index of substances and find final value
function findNumber(firstIndex, secondIndex) {
    //index of selected substances from simple array
    var index1 = substances.indexOf(firstIndex);
    var index2 = substances.indexOf(secondIndex);
    //find value based on two indexes
    num = substances2D[index1][index2];
    return num;
}
//assign descriptions for each individual drug
function description(primary, secondary) {
    for (var x = 0; x < substances.length; x++) {
        if (primary == substances[x]) {
            descriptionOne.innerHTML = descriptions[x];
        }
        if (secondary == substances[x]) {
            descriptionTwo.innerHTML = descriptions[x];
        }
    }
}
//write final message 
function verdict(num) {
    if (num == 0) {
        finalVerdict = "Pohodička";
    }
    else if (num == 1) {
        finalVerdict = "Nízke riziko a zníženie účinku";
    }
    else if (num == 2) {
        finalVerdict = "Nízke riziko a žiadna synergia";
    }
    else if (num == 3) {
        finalVerdict = "Nízke riziko a synergia";
    }
    else if (num == 4) {
        finalVerdict = "Dávaj pozor";
    }
    else if (num == 5) {
        finalVerdict = "Nebezpečné!";
    }
    else if (num == 6) {
        finalVerdict = "Veľmi Nebezpečné!!!";
    }
    else {
        finalVerdict = "Neznáme";
    }
    finalMessage.innerHTML = finalVerdict;
}
//main functionality starter 
buttonCalculate.addEventListener("click", function () {
    if (primarySelected == secondarySelected) {
        finalVerdict = "Pohodička";
        finalMessage.innerHTML = finalVerdict;
        //write title for selected substances
        substanceTitleOne.innerHTML = primarySelected;
        substanceTitleTwo.innerHTML = secondarySelected;
        //write description for 
        description(primarySelected, secondarySelected);
        messageHolder.classList.add('clickedDown');
    }
    else {
        //find index of substance combination
        findNumber(primarySelected, secondarySelected);
        //write final message from calculation
        verdict(num);
        //write title for selected substances
        substanceTitleOne.innerHTML = primarySelected;
        substanceTitleTwo.innerHTML = secondarySelected;
        //write description for 
        description(primarySelected, secondarySelected);
        messageHolder.classList.add('clickedDown');
    }
});
//anchor scroll - add clicked class 
//move down
arrowDown.addEventListener("click", function () {
    messageHolder.classList.add('clickedDown');
});
//move up
arrowUp.addEventListener("click", function () {
    messageHolder.classList.remove('clickedDown');
});
var onScroll = function () {
    if (scroll) {
        messageHolder.classList.remove('clickedDown');
    }
};
