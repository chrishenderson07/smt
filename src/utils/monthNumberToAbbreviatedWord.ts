function monthNumberToAbbreviatedWord(monthNumber) {
    const months = [
      "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", 
      "Jul", "Ago", "Set", "Out", "Nov", "Dez"
    ];
    
    if (monthNumber < 1 || monthNumber > 12) {
      throw new Error("O número do mês deve estar entre 1 e 12.");
    }
  
    return months[monthNumber - 1];
  }
  

export default monthNumberToAbbreviatedWord;