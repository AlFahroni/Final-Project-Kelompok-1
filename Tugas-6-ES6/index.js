// soal 1
const luasPersegi = s => s*s 
console.log('Luas Persegi = '+luasPersegi(3));

const kelilingPersegi = s => 4*s 
console.log('Keliling Persegi = '+kelilingPersegi(3));

// soal 2

const newFunction = (firstName, lastName) => {
    return {
      firstName: firstName,
      lastName: lastName,
      fullName : () => {
        console.log(`${firstName} ${lastName}`);
      }
    }
  }
   
  newFunction("William", "Imoh").fullName();

// soal 3
const newObject = {
    firstName: "Muhammad",
    lastName: "Iqbal Mubarok",
    address: "Jalan Ranamanyar",
    hobby: "playing football",
  } 
const {firstName, lastName, address, hobby} = newObject;
console.log(firstName, lastName, address, hobby);

// soal 4
const west = ["Will", "Chris", "Sam", "Holly"];
const east = ["Gill", "Brian", "Noel", "Maggie"];
const combined = [...west, ...east];
//Driver Code
console.log(combined);

// soal 5
const planet = "earth" ;
const view = "glass" ;
var before = `Lorem ${view} dolor sit amet consectetur adipiscing elit ${planet}`;
console.log(before);