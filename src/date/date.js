/*
  Função ManipulaDate
  opção 1: return o dia do mes
  opção 2: return o mes
    opção 3: return o ano
    opção 4: return o dia/mes/ano
    */
    function manipulaDate(option) {
      const today = new Date()
      const day = today.getDate().toString().padStart(2, '0')
      const month = String(today.getMonth())
      const year = today.getFullYear()
      const currentDate = `${day}/${parseInt(month) + 1}/${year}`
  
      switch (option) {
        case 1:
          return day
        case 2:
          return month
        case 3:
          return year
        case 4:
          return currentDate
        default:
          console.log('Função Data');
      }
    }
    
    export default manipulaDate

