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

// I-TASK

function majorityElement(arr: number[]): number | null {
  const map = new Map<number, number>();
  let maxCount = 0;
  let maxNumber: number | null = null;

  for (let num of arr) {
    let count = map.get(num) || 0;
    count++;
    map.set(num, count);

    if (count > maxCount) {
      maxCount = count;
      maxNumber = num;
    }
  }

  return maxNumber;
}
console.log(majorityElement([5,7,4,3,5,8,56,4,2,3,5,5,5,56,3]));







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