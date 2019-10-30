//Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età.
//Stampare a schermo attraverso il for in tutte le proprietà.

var gianni = {
    nome : "Gianni",
    cognome : "Rossi",
    età : "30"
}


for(var prop in gianni){

    console.log(prop);
    
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

console.log(user1);

var user2 = {

    "nome" : nomeUser(),

    "cognome" : cognomeUser()

}

studenti.push(user2)

console.log(user2);

var user3 = {

    "nome" : nomeUser(),

    "cognome" : cognomeUser()

}

studenti.push(user3)

console.log(user3);

console.log(studenti);


//ciclo per stampare nome e cognome degli studenti
for (i = 0; i < studenti.length; i++){

    for(var studente in studenti[i])

    console.log(studente);
    

}



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