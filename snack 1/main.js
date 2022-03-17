let nomi = ["Modestino", "Abdelhamid" ,"Andrea","Alberto","Vincenzo","Gerardo" ,"Luca","Tancredi","Valentino","Ludovica","Davide","Nizar","Alessandro","Gabriele" ,"Stefano","Angelo","Caterina","Sergio","Clara","Matteo","Simone" ,"Noemi","Roberto","Andrea","Andrea","Simone" ,"Samuele" ,"Vera","Ivan","Michael","Simone Luca","Francesco"];

let cognomi = ["Arpa","Ayadi","Bellucci","Biga","Borriello","Calia","Carbone","Carluccio","De Stefano","Di Benedetto","Di Pietro","Fergag","Fonzi","Magni","Maiorchini","Melotti","Moccia","Nifosi","Nocilla","Nuvoloni","Pavone","Pintaldi","Piva","Pontillo","Rosellini","Saputo","Spadaro","Sprinceana","Toselli","Wachnicki","Zaino","Natoli"]

let lista = [];

let i = 0;

while ( i < nomi.length) {
    
    let listaNomi = `${nomi[i]} ${cognomi[i]}`;
    
    i++;

    lista.push (listaNomi);
}
console.log (lista);

let x = 0;

let bottone = document.getElementById("bottone");

bottone.addEventListener("click",
function(){
        let random = Math.floor(Math.random() * (lista.length));
        document.getElementById("nome-random").innerHTML = lista[random];
    }
)