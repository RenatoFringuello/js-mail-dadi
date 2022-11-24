const dado = [1,2,3,4,5,6];

let user, com, result;

for (let i = 0; i < 100; i++) {
    user = Math.floor(Math.random() * dado.length);
    com = Math.floor(Math.random() * dado.length);
    
    if(dado[user] > dado[com]){
        result = 'user win ';
    }else if(dado[user] < dado[com]){
        result = 'com win ';
    }else{
        result = 'equal ';
    }
    console.log(result, dado[user], dado[com]);
}