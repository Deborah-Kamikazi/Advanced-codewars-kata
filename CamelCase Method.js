String.prototype.camelCase=function(){
    if(this.length===0){
      return ""
    }
   const array = this.split(" ").map((el,index)=>{
       return el[0].toUpperCase()+el.slice(1)
   })
   
   return array.join("")
   
   
  }