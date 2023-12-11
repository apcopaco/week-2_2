// ● დაწერე ფუნქცია, რომელიც მიიღებს სამ
// პარამეტრს (string, valueToReplace,
// valueToReplaceWith), ჩაანაცვლებს
// "valueToReplace"-ს "valueToReplaceWith"
// მნიშვნელობით და დააბრუნებს ახალ stringს
// ● არ გამოიყენო string.replace() ფუნქცია

const replaceValue = (inputString, firstValue, replaceValue) => {
    let parts = inputString.split(firstValue);
    let replacedString = parts.join(replaceValue);
    return replacedString;
}

let originalString = "This is a old string with some old text.";
let replacedString = replaceValue(originalString, "old", "new");
console.log(replacedString);


// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს string ტიპის მნიშვნელობას
// (წინადადებას), მასში ყოველ სიტყვას
// გადაწერს დიდი ასოთი და დააბრუნებს
// ახალ წინადადებას

const changeLetters = (someString) => {
    const words = someString.split(' ');

    let upperCasedwords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });

    const capitalizedString = upperCasedwords.join(' ');
    return capitalizedString;
}

let originalSentence = "hello world, james bond giorgi aptsiauri tbilisi";
let capitalized = changeLetters(originalSentence);
console.log(capitalized);

// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს მომხმარებლების მასივს და
// დააბრუნებს დალაგებულ მასივს
// მომხმარებლების ასაკის ზრდადობის
// მიხედვით
// ● მაგალითად, ჩავთვალოთ, რომ გვაქვს
// [{name: ‘Lasha’, age: 30}, {name: ‘Saba’, age: 20}].
// ფუნქციამ უნდა დააბრუნოს [{name: ‘Saba’,
// age: 20}, {name: ‘Lasha’, age: 30}]
// ● შეგიძლია გამოიყენო sort() ფუნქცია

const users = [{name: 'Lasha', age: 30}, {name: 'Saba', age: 20}, {name: 'giorgi', age: 19}, {name: 'mariami', age: 15}];

const sortArr = (users) => {
    users.sort(function(a, b){return a.age - b.age});
    return users;
    
}
const sortedUsers = sortArr(users)
console.log(sortedUsers);
