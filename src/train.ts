// G-TASK

 function getHighIndex(sonlar4: number[]) {
    const max = Math.max(...sonlar4);
    const index = sonlar4.indexOf(max);
    console.log("Eng katta son:", max);
    console.log("Indeksi:", index);
}
getHighIndex([34,42667,1,63390]);