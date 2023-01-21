// 1.
// Написать функцию переворота строки. СТАНДАРТНУЮ ФУНКЦИЮ REVERSE НЕ ИСПОЛЬЗОВАТЬ. Например: myReverse("123456789") -> "987654321"
function reverseStr(str) {
    var newStr = '', i;
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str.charAt(i);
    }
    return newStr;
}
console.log(reverseStr("123456789"));

// 2.
// Написать функцию которая генерирует массив из чисел в определенном диапазоне с определенным шагом (по умолчанию 1). 
// Например: getRange(1, 10) -> [1,2,3,4,5,6,7,8,9,10]; getRange(10, 30, 5) -> [10,15,20,25,30].
function getRange(start, end, step) {
    var numList = [];
    for (var i = start; i <= end; i += step) {
        numList.push(i);
    }
    return numList;
}
console.log(getRange(0, 40, 5));

// 3.
// Написать функцию для проверки пароля. Нужно возвращать true если в пароле есть хотя 
// бы одна буква верхнего регистра (большие буквы). passwordHasUpperCase("Welcome") -> true, 
// passwordHasUpperCase("123qwerty") -> false
let pass = "Hello, World!"
function passwordUpperCase(password){
    return /[A-Z]/.test(password);
}
console.log(passwordUpperCase(pass));

// 4.
// Написать функцию которая маскирует номер банковской карты.
// Например: maskCard("4815154823541789") -> "481515XXXXXX1789". 
// Должны быть видны первые 6 и последние 4 символа, остальные скрыть символом(по умолчанию Х). 
// Причем сделать так чтобы скрывающий символ можно было передавать как параметр. 
// Например: maskCard("4815154823541789", "*") -> "481515******1789".
function maskCard(cardNumber, mask) {
    var mask = mask || "*";

    if(cardNumber.length == 16){
        return cardNumber.slice(0, 6) + mask+mask+mask+mask+mask+mask + cardNumber.slice(cardNumber.length - 4);
        // return cardNumber.slice(0, 6) + mask + cardNumber.slice
    }
    else{
        console.log("error: invalid card number");
    }
}
console.log(maskCard("4815154823541789", "X"));

// 5.
// Написать функцию капитализации строк. Например: capitalizeString("ЕВГЕНИЙ") -> "Евгений"; 
// ("иВАНОВ") -> "Иванов"; Капитализация - это процесс преобразования строки, 
// когда первая буква становится заглавной, а остальные строчными.
function caputalizeString(string){
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
console.log(caputalizeString("иВАНОВ"));