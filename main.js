let natija = []

for (let i = 2; i > 1; i++) {
  
   let users = prompt('ism kiriting')

   let newArray = users.split(',')
   
   let add = newArray.some(userAdd => userAdd == 'add')
   let remove = newArray.some(userDel => userDel == 'del')
   let stop = newArray.some(userStop => userStop == 'stop')
   let check = natija.filter((item ) => item == newArray[1]   )
   let checkindex = natija.findIndex((index) => index == check  )

   
   if (add) {
      natija.push(newArray[1])
   }else if (remove) {
      if (natija[checkindex] === newArray[1]) {
        natija.splice(checkindex,1)
        
      }
   }else if (stop) {
       i = 0
   }else {
    alert('ismni add qoshib kiriting')      
   }
   
   console.log(natija);
}
   
   
   
