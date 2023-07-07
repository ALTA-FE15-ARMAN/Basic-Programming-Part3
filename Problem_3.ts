function cekBilanganPrima(bilangan: number): boolean {
    if (bilangan <= 1) {
      return false;
    }
  
    for (let i = 2; i <= Math.sqrt(bilangan); i++) {
      if (bilangan % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  function PrimeNumber(bilangan: number): string {
    const Prima = cekBilanganPrima(bilangan);
  
    if (Prima) {
      return "true";
    } else {
      return "false";
    }
  }
  
  console.log(PrimeNumber(11));
  console.log(PrimeNumber(13));
  console.log(PrimeNumber(17));
  console.log(PrimeNumber(20));
  console.log(PrimeNumber(35));