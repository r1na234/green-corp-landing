function secretPassword(){
    let password = 'xh38sk';
    return {
        guessPassword: function(guess){
            return guess === password;
        }
    }
}

let passwordGame = secretPassword();
password = 'mypassword';
console.log(passwordGame.guessPassword('mypassword'))


function makeCounter() {
    let count = 0;
    return function(){
        return count++;
    }
}
const counter = makeCounter();
counter()
console.log(counter());



array = [1, "dfvk", false, 3456];
for (let index = 0; index < array.length; index++) {
    console.log(array[index]);
   }
   
   array = [1, "dfvk", false, 3456];
   for (let e of array) {
    console.log(e);
   }

   array = [1, "dfvk", false, 3456];
   for (let e in array) {
    console.log(e);
   }

   array = [1, "dfvk", false, 3456];
   let i = 0;
   while (i > array.length) {
    i++;
    console.log(array[i]);
   }
   array = [1, "dfvk", false, 3456];
   let i = 0;
   while (i < array.length) { 
    i++;
    console.log(array[i]);
   }


   C:\Users\79516\Desktop\green-corp-landing