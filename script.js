let navbarEl = document.getElementById("navbar");

let programVare = ["Windows-apper", "OneDrive", 'Outlook', 'Skype', 'Onenote', 'Microsoft Teams'];
let enheter = ['Kjøp Xbox', 'Tilbehør'];
let underholdning = ['Xbox Game Pass Ultimate', 'Xbox Live Gold', 'Xbox og spill', 'Pc-spill', 'Windows spill', 'Filmer og TV'];
let bedrift = ['Microsoft Cloud', 'Microsoft Azure', 'Microsoft Dynamics 365', 'Microsoft 365', 'Windows 365', 'Microsoft Industry', 'Microsoft Advertising', 'Kjøp for bedrifter'];
let develop = ['.NET', 'Windows Server', 'Windoes Utviklingssenter', 'Dokumenter', 'Power Platform', 'Power Apps', 'HoloLens 2'];
let annen = ['Microsoft Rewards', 'Gratis nedlastninger og sikkerhet', 'Utdanning', 'Gavekort', 'Lisensiering'];

let navbar = '<div class="left-navbar">'
    + '    <ul>'
    + '        <li>'
    + '            <a class=" href="">Microsoft</a>'
    + '        </li>'
    + '        <li>'
    + '            <a href="">Microsoft 365</a>'
    + '        </li>'
    + '        <li>'
    + '            <a href="">Office</a>'
    + '        </li>'
    + '        <li>'
    + '            <a href="">Windows</a>'
    + '        </li>'
    + '        <li>'
    + '            <a href="">Surface</a>'
    + '        </li>'
    + '        <li>'
    + '            <a href="">Xbox</a>'
    + '        </li>'
    + '        <li>'
    + '            <a href="">Spesialtilbud</a>'
    + '        </li>'
    + '        <li>'
    + '            <a href="">Kundestøtte</a>'
    + '        </li>'
    + '    </ul>'
    + '</div>'
    + '<div class = " right-navbar">'
    + '                <ul>'
    + '                    <li>'
    + '                        <span id="dropButton">'
    + '                            Alt fra Microsoft'
    + '                        </span>'
    + '                    </li>'
    + '                    <li>'
    + '                        <span id="søk">Søk</span>'
    + '                    </li>'
    + '                    <li>'
    + '                        <span>Handlekurv</span>'
    + '                    </li>'
    + '                    <li>'
    + '                        <span>Logg på</span>'
    + '                    </li>'
    + '                </ul>'
    + '</div>'
    + '<div>'
    + '</div>';

navbarEl.innerHTML = navbar;

let dropButtonEl = document.getElementById("dropButton");
let testEl = document.getElementById("test");
let dropDownEl = document.getElementById("dropDown");
let søkEl = document.getElementById("søk");

let dropDownTitles = [programVare, enheter, underholdning, bedrift, develop, annen];


for (i = 0; i < dropDownTitles.length; i++) {
    testEl.innerHTML += "<div class = 'titler'> "
    for (j = 0; j < dropDownTitles[i].length; j++) {
        testEl.innerHTML += dropDownTitles[i][j].toString();
    }
    testEl.innerHTML += "</div>";

}

dropButtonEl.addEventListener("click", dropdown);
søkEl.addEventListener("click", endreNavbar);

dropDownEl.style.display = "none";

function dropdown() {
    console.log("asd");
    if (dropDownEl.style.display === "none") {
        dropDownEl.style.display = "flex";
    } else {
        dropDownEl.style.display = "none";
    }
}

function endreNavbar() {
    navbarEl.innerHTML = '<ul>'
        + '<li>'
        + '     <a class=" href="">Microsoft</a>'
        + '</li>'
        + '</ul>'
        + '<input class = "søk" type = "text" placeholder = "Søk her"></input>'
        + '<button id = "avbryt"> Avbryt </button>';
    avbrytEl = document.getElementById("avbryt");
    avbrytEl.addEventListener("click", returnerUI);
    dropButtonEl = document.getElementById("dropButton");
    testEl = document.getElementById("test");
    dropDownEl = document.getElementById("dropDown");
    søkEl = document.getElementById("søk");
}

function returnerUI() {
    console.log("caps");
    navbarEl.innerHTML = navbar;
    setElements();
}
function setElements() {

}



