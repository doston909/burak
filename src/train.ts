/*
Project Standards:
-Logging standards
-Naming standards:
    function, method, variable => CAMEL
    class => PASCAL
    folder, file => KEBAB
    css => SNAKE

- Error handling

*/ 

/** 
   Traditional Api
    Rest Api
    GraphQL Api
 */


/* 
    Traditional FD => BSSR (Admin) => EJS
    Modern FD      => SPA (User's applications) => REACT
 */

/*
    Validation:
    Frontend validation
    Backend validation
    Database validation
 */

// N-TASK 
function palindromCheck(palin: string) {
    const palin1 = palin.split('').reverse().join('');
    return palin === palin1;
};

console.log(palindromCheck('non'));

// M-TASK
// function getSquareNumbers(numbers: number[]) {
//      for (let num of numbers) {
//         const number2 = num * num;
//         console.log(`${num} ning kvadrati ${number2} ga teng`);
//     };  
// };

// getSquareNumbers([3, 4, 5]);

// const numbers1 = numbers.map(n => n * n);
    // console.log(`${numbers} ning kvadrati ${numbers1}ga teng`)






// L-TASK 

// function reverseSentence (soz: string) {
//     return soz.split(" ").map(word => word.split("").reverse().join("")).join(" ");
// };

// console.log(reverseSentence("no pain no gain"));

// K-TASK

// function countVowels(soz: string) {
//     const unlilar = "aoueiAOUEI";
//     let unli = 0;
    
//     for ( let harf of soz) {
//         if (unlilar.includes(harf)) {
//             unli++;
//         }
//     }
//     console.log("Unli harflar:", unli);
// }

// countVowels("Anjanliklarkeldi");


// J-TASK

// function findLongestWord(matn3: string) {
//     const matn4 = matn3.split(" ");

//     let uzunSoz = "";

//     for (let soz of matn4) {
//         if (soz.length > uzunSoz.length) {
//             uzunSoz = soz;
//         }
//     }

//     console.log("Eng uzun so'z: ", uzunSoz);
// }
// findLongestWord("Salom men Dostonbek");


// I-TASK

// function majorityElement(arr: number[]): number | null {
//   const map = new Map<number, number>();
//   let maxCount = 0;
//   let maxNumber: number | null = null;

//   for (let num of arr) {
//     let count = map.get(num) || 0;
//     count++;
//     map.set(num, count);

//     if (count > maxCount) {
//       maxCount = count;
//       maxNumber = num;
//     }
//   }

//   return maxNumber;
// }
// console.log(majorityElement([5,7,4,3,5,8,56,4,2,3,5,5,5,56,3]));







// H2-TASK

// function getDigits(soz: string) {
//     const soz1 = soz.split('');
//     const soz2 = soz1.filter(x => !isNaN(Number(x))).join('');
//     console.log(soz2);

//     }
//     getDigits('sa4lo8m7nh5');






// H-TASK

// function getPositive(integ: number[]) {
//     const positive = integ.filter(x => x > 0);
//     console.log("Berilgan array ichidagi musbat sonlar:", positive.join(''));
// }
// getPositive([-45,6,0,8,-4]);





// G-TASK

//  function getHighIndex(sonlar4: number[]) {
//     const max = Math.max(...sonlar4);
//     const index = sonlar4.indexOf(max);
//     console.log("Eng katta son:", max);
//     console.log("Indeksi:", index);
// }
// getHighIndex([34,42667,1,63390]);