function login() {
    const riktigBrukernavn = "Saygex";
    const riktigPassord = "morriganisbest";

    const bruker = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    const melding = document.getElementById("melding");

    if (bruker === riktigBrukernavn && pass === riktigPassord) {
        melding.innerText = "Riktig brukernavn og passord!";
        melding.style.color = "green";
    } else {
        melding.innerText = "Feil brukernavn eller passord!";
        melding.style.color = "red";
    }
}