//5

const getEveryItemOfArray = (arr) => {
   const everyItemOfArray = arr.map(el => [el])
   console.log(`Длина массива равна ${arr.length}`)
   return everyItemOfArray
}