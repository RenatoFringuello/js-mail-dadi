// gioco dei dadi
let user, com, result, nMatch = 10;

    // crea 10 match
for (let i = 0; i < nMatch; i++) {
    // genero una giocata random per ogni giocatore
    user = Math.floor(Math.random() * 6 + 1);
    com = Math.floor(Math.random() * 6 + 1);
    
    // verifico il vincitore o il pareggio
    if(user > com){
        result = 'user win ';
    }else if(user < com){
        result = 'com win ';
    }else{
        result = 'equal ';
    }
    // output dell'esito
    console.log(result, user, com);
}

// mail check
    // creo una lista di utenti verificati
const users = [
    'gino@gmail.com',
    'pippo@gmail.com',
    'paolina@gmail.com',
    'andrea@gmail.com',
    'maria@gmail.com'
];
    // recupero dal DOM gli elementi che mi servono
        //userEMail per recuperare l'input utente
const userEMail = document.getElementById('useremail');
        //checkEMail per svolgere una funzione su un evento click del button
const checkEMail = document.querySelector('.form button');
        //response per recuperare l'elemento su cui inserire l'esito
const response = document.getElementById('response');

checkEMail.addEventListener('click', function(){
    // riciclo la variabile user che tanto non ha più uno scopo
    user = users.length;//cosi se non trova nessuno restituisce 'undefined'

    // giro tante volte quante sono le email in lista
    for (let i = 0; i < users.length; i++) {
        // verifico che la mail inserita esista fra quelle in lista
        if(userEMail.value === users[i]){
            // tengo conto della posizione
            user = i;
        }
        /**
         *  else non faccio nulla in quanto di default resul ha un messaggio con
         *  esito negativo e la posizione in 'user' non tiene conto di nessun elemento in lista
         */
    }
    // metto un output dell'esito, della mail inserita, e di quella corrispondente in lista
    response.innerHTML = (users[user] !== undefined) ? `Bentornato ${users[user]} ci sono 2345 email da leggere` : "utente non trovato";
});