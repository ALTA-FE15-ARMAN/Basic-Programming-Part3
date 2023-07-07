function Faktor(bilangan: number): void {
    console.log("Faktor dari " + bilangan + ":");
    
    for (let i = 1; i <= bilangan; i++) {
      if (bilangan % i === 0) {
        console.log(i);
      }
    }
  }
  
  let bilangan = 20;
  Faktor(bilangan);
  