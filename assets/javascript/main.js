//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
//Stampare a schermo attraverso il for in tutte le proprietà.

var gianni = {
    "nome" : "Gianni",
    "cognome" : "Rossi",
    "eta" : "30"
}


for(var prop in gianni){

    document.getElementById("studgianni").innerHTML = "Lo studente si chiama " + gianni.nome + " " + gianni.cognome + " e ha " + gianni.eta + " anni."

    console.log(gianni[prop]);
    
}

//Creare un array di oggetti di studenti.
//Ciclare su tutti gli studenti e stampare per ognuno nome e cognome

//creo un array vuoto in cui pushare gli object

var studenti = [];


//creo i dati degli studenti
var user1 = {

    "nome" : nomeUser(),

    "cognome" : cognomeUser()
  
}

studenti.push(user1)


var user2 = {

    "nome" : nomeUser(),

    "cognome" : cognomeUser()

}

studenti.push(user2)


var user3 = {

    "nome" : nomeUser(),

    "cognome" : cognomeUser()

}

studenti.push(user3)

console.log(studenti);



//ciclo per stampare nome e cognome degli studenti
for (i = 0; i < studenti.length; i++){


    document.getElementById("stud1").innerHTML = "Nome del primo studente: " + user1.nome + " " + user1.cognome;
  
    document.getElementById("stud2").innerHTML = "Nome del secondo studente: " + user2.nome + " " + user2.cognome;

    document.getElementById("stud3").innerHTML = "Nome del terzo studente: " + user3.nome + " " + user3.cognome;

}


// Dare la possibilità all’utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var user4 = {
    
    "nome" : nomeUser(),

    "cognome" : cognomeUser(),

    "eta" : etaUser()

}

studenti.push(user4);

document.getElementById("stud4").innerHTML = "Nome, cognome ed età del quarto studente, il ritardatario: " + user4.nome + " " + user4.cognome + " e ha " + user4.eta + " anni."

console.log(studenti);




//blocco funzioni


//funzione che chiede il nome
function nomeUser(nome){

    nome = prompt("Qual è il tuo nome?")
   
    return nome
}


//funzione che chiede il cognome
function cognomeUser(cognome){

    cognome = prompt("E il tuo cognome?")

    return cognome

}

//funzione che chiede l'età

function etaUser(eta){

    eta = prompt("E quanti anni hai?")

    return eta
}
//aggiungo l'età dei primi 3 studenti

user1.eta = 30;

user2.eta = 32;

user3.eta = 3;



//log dei vari studenti

for(var prop1 in user1){

    console.log("Lo studente uno si chiama: " + user1.nome, user1.cognome);
    
}

for(var prop2 in user2){

    console.log("Lo studente due si chiama: " + user2.nome, user2.cognome);
    
}

for(var prop3 in user3){

    console.log("Lo studente tre si chiama: " + user2.nome, user2.cognome);
    
}

for(var prop4 in user4){

    console.log("Lo studente quattro si chiama: " + user4.nome, user4.cognome, "e ha", user4.eta, "anni.");
    
}


