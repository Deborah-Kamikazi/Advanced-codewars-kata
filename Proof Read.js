function proofread (str) { 
    const arr1 = str.toLowerCase().split(" ")
    const arr2 = arr1.shift()
    const arr3 = arr2[0].toUpperCase()+ arr2.slice(1)
     arr1.unshift(arr3)
    const result = arr1.map((el,index)=> {
      el= el.replace('ie','ei')
        const prevEl = arr1[index-1];
        if(prevEl && prevEl[prevEl.length-1]==="."){
            el = el[0].toUpperCase()+ el.slice(1)
        }
        return el
    }).join(" ")
    return result
    
    } 
    
    proofread ("ShE deCIeved HiM.");