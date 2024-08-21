function moveZeros(arr) {
    const array1 = arr.filter((el)=> el!==0)
   const array2 = arr.filter((el)=> el===0)
   return array1.concat(array2)
 }