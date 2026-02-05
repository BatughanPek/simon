let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

// --- Løs opgaverne herunder --- 



// --- opgave 1 ---
let newNumbers = numbersArray.filter(num => num > 20);
console.log('opgave 1', newNumbers);

// --- opgave 2 ---
catsArray.push("Sniffles");
console.log('opgave 2', catsArray);

// --- opgave 3 ---
let hasTrixie = dogsArray.includes("Trixie");
console.log('opgave 3a', hasTrixie);
let hasBaxter = dogsArray.includes("Baxter");
console.log('opgave 3b', hasBaxter);

// --- opgave 4 ---
let foundCat = catsArray.find(cat => cat === "Bagheera");
console.log('opgave 4a', foundCat);
let foundSalem = catsArray.find(cat => cat === "Salem");
console.log('opgave 4b', foundSalem);

// --- opgave 5 ---
let numbersTimesThree = numbersArray.map(num => num * 3);
console.log('opgave 5', numbersTimesThree);

// --- opgave 6 ---
let dogsString = dogsArray.join("");
console.log('opgave 6', dogsString);

// --- opgave 7 ---
let mangoIndex = fruitsArray.indexOf("Mango");
console.log('opgave 7a', mangoIndex);

let blueberriesIndex = fruitsArray.indexOf("Blueberries");
console.log('opgave 7b', blueberriesIndex);

// --- opgave 8 ---
let pollyIndex = dogsArray.indexOf("Polly");
let deletePolly = 1;
let removedPolly = dogsArray.splice(pollyIndex, deletePolly);

console.log('opgave 8', dogsArray);
