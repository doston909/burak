// H-TASK

function getPositive(integ: number[]) {
    const positive = integ.filter(x => x > 0);
    console.log("Berilgan array ichidagi musbat sonlar:", positive.join(''));
}
getPositive([-45,6,0,8,-4]);





// G-TASK

//  function getHighIndex(sonlar4: number[]) {
//     const max = Math.max(...sonlar4);
//     const index = sonlar4.indexOf(max);
//     console.log("Eng katta son:", max);
//     console.log("Indeksi:", index);
// }
// getHighIndex([34,42667,1,63390]);