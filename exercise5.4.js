//3

const reversWord = (str) => {
   if (str.length < 1) {
      console.log('Вы ввели пустую строку')
   }
   if (typeof str === "string") {
      return backWord = str.split("").reverse().join("");
   }
   else {
      console.log('Введите строку')
   }
}

reversWord('hello')

//4

const randomFigure = (max) => {
   return Math.round(Math.random() * max)
}

randomFigure(100)