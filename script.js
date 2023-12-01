/* 
const openModalBtn = document.getElementById("open-modal");
const closeModalBtn = document.getElementById("close-modal");
const modal = document.getElementById("modal");

openModalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);

function openModal() {
  console.log("apro modal");
  modal.classList.remove("hidden");
}
function closeModal() {
  console.log("chiudo modal");
  modal.classList.add("hidden");
} 
*/

function setBackgroundColor(obj, collegamento) {
  if (collegamento == undefined) { // if aggiunto per non sovrascrivere la variabile collegamento al click sul control score
    collegamento = obj.name;
  }
  if (collegamento == "c-home") {
    document.getElementById("c-home").style.backgroundColor = "rgb(92 172 203)";
    document.getElementById("c-home").style.borderRadius = "7px";
    document.getElementById("c-servizi").style.backgroundColor = "unset";
    document.getElementById("c-chi-sono").style.backgroundColor = "unset";
    document.getElementById("c-contatti").style.backgroundColor = "unset";
  }
  else if (collegamento == "c-servizi") {
    document.getElementById("c-home").style.backgroundColor = "unset";
    document.getElementById("c-servizi").style.backgroundColor = "rgb(92 172 203)";
    document.getElementById("c-servizi").style.borderRadius = "7px";
    document.getElementById("c-chi-sono").style.backgroundColor = "unset";
    document.getElementById("c-contatti").style.backgroundColor = "unset";
  }
  else if (collegamento == "c-chi-sono") {
    document.getElementById("c-home").style.backgroundColor = "unset";
    document.getElementById("c-servizi").style.backgroundColor = "unset";
    document.getElementById("c-chi-sono").style.backgroundColor = "rgb(92 172 203)";
    document.getElementById("c-chi-sono").style.borderRadius = "7px";
    document.getElementById("c-contatti").style.backgroundColor = "unset";
  }
  else if (collegamento == "c-contatti") {
    document.getElementById("c-home").style.backgroundColor = "unset";
    document.getElementById("c-servizi").style.backgroundColor = "unset";
    document.getElementById("c-chi-sono").style.backgroundColor = "unset";
    document.getElementById("c-contatti").style.backgroundColor = "rgb(92 172 203)";
    document.getElementById("c-contatti").style.borderRadius = "7px";
  }
  if (collegamento == "c-torna-home") {
    document.getElementById("c-torna-home").style.backgroundColor = "rgb(92 172 203)";
    document.getElementById("c-torna-home").style.borderRadius = "7px";
  }
}
function mostra(obj) {
  document.getElementById("modal").style.display = "block";
  var attivita = document.getElementById("attivita");
  var descrizione = document.getElementById("descrizione");
  var button = obj.name;
  if ("ginnasticaAntalgica" == button) {
    this.ginnasticaAntalgica(attivita, descrizione);
  }
  else if ("ginnasticaPosturale" == button) {
    this.ginnasticaPosturale(attivita, descrizione);
  }
  else if ("ginnasticaRespiratoria" == button) {
    this.ginnasticaRespiratoria(attivita, descrizione);
  }
  else if ("ginnasticaFunzionale" == button) {
    this.ginnasticaFunzionale(attivita, descrizione);
  }
  else if ("riatletizzazione" == button) {
    this.riatletizzazione(attivita, descrizione);
  }
  else if ("personalTraining" == button) {
    this.personalTraining(attivita, descrizione);
  }
  else if ("disabilita" == button) {
    this.disabilita(attivita, descrizione);
  }
}
function nascondi() {
  document.getElementById("modal").style.display = "none";
}
function ginnasticaAntalgica(titolo, descrizione) {
    titolo.innerHTML = "Ginnastica antalgica:";
    descrizione.innerHTML = "Ginnastica dolce eseguita con movimenti lenti di stabilizzazione. <br> " +
    "Si svolgono esercizi finalizzati ad <b>alleviare</b> e <b>prevenire</b> dolori muscolari e articolari.";
}
function ginnasticaPosturale(titolo, descrizione) {
  titolo.innerHTML = "Ginnastica posturale:";
  descrizione.innerHTML = "Ginnastica eseguita con movimenti di stabilizzazione del tronco. <br> " + 
  "&Egrave finalizzata a <b>correggere</b> e <b>prevenire</b> dismetrie corporee e asimmetrie.";
}
function ginnasticaRespiratoria(titolo, descrizione) {
  titolo.innerHTML = "Ginnastica respiratoria:";
  descrizione.innerHTML = "Ginnastica  effettuata con movimenti respiratori. <br> " +
  "&Egrave finalizzata a <b>stabilizzare</b> il tronco e ad <b>aiutare l'ossigenazione</b> dei tessuti.";
}
function ginnasticaFunzionale(titolo, descrizione) {
  titolo.innerHTML = "Ginnastica Funzionale:";
  descrizione.innerHTML = "Attività motoria eseguita per migliorare il movimento e le funzioni motorie quotidiane.";
}
function riatletizzazione(titolo, descrizione) {
  titolo.innerHTML = "Riatletizzazione:";
  descrizione.innerHTML = "Preparazione fisica dopo un infortunio per un <b>return-to-play</b> rapido ed efficiente.";
}
function personalTraining(titolo, descrizione) {
  titolo.innerHTML = "Personal training:";
  descrizione.innerHTML = "Allenamento programmato e cucito in base alle esigenze della persona.";
}
function disabilita(titolo, descrizione) {
  titolo.innerHTML = "Allenamento fisico per persone con disabilità:";
  descrizione.innerHTML = "Attività fisica volta a migliorare le condizioni fisiche del soggetto al fine di prevenire <br> " +
  "l'insorgere di disabilità motorie secondarie.";
}

// far apparire div on scroll
var myScrollFunc = function () {
  var backHome = document.getElementById("backHome");
  var y = window.scrollY;
  if (y >= 800) {
    backHome.className = "backHome show"
  } else {
    backHome.className = "backHome hide"
  }
};
window.addEventListener("scroll", myScrollFunc);

// anteprima mail (temporaneo)
function setAnteprimaForm() {
  this.setNome();
  this.setCognome();
  this.setDataNascita();
  this.setEmail();
  this.setTel();
  this.setMotivazione();
  this.setMessaggio();
}
function setNome() {
  var nome = document.getElementById("nome").value;
  localStorage.setItem("nome", nome);
}
function setCognome() {
  var cognome = document.getElementById("cognome").value;
  localStorage.setItem("cognome", cognome);
}
function setDataNascita() {
  var dataNascita = document.getElementById("dataNascita").value;
  localStorage.setItem("dataNascita", dataNascita);
}
function setEmail() {
  var email = document.getElementById("email").value;
  localStorage.setItem("email", email);
}
function setTel() {
  var tel = document.getElementById("tel").value;
  localStorage.setItem("tel", tel);
}
function setMotivazione() {
  var motivazione = document.getElementById("motivazione").value;
  localStorage.setItem("motivazione", motivazione);
}
function setMessaggio() {
  var messaggio = document.getElementById("messaggio").value; 
  localStorage.setItem("messaggio", messaggio);
}