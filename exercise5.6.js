//6

const compareArrs = (arr1, arr2) => {
   const arr1toString = arr1.toString()
   const arr2toString = arr2.toString()
   arr1toString === arr2toString ? true : false
}

//7 

const chechArrToParity = (arr) => {
   if (arr.length < 1) {
      return false
   }
   const parityArr = []
   const notParityArr = []
   for (item of arr) {
      if (typeof item != 'number') {
         continue
      }
      if (item % 2 === 0) {
         parityArr.push(item)
      } else {
         notParityArr.push(item)
      }
   }
   return console.log(`Четные числа в данном массиве: ${parityArr}, a нечетные: ${notParityArr}.`)
}