function FaktorTerbalik(Bil: number): void {
    console.log("Faktor dari " + Bil + ":");
    
    for (let i = Bil; i >= 1; i--) {
      if (Bil % i === 0) {
        console.log(i);
      }
    }
  }
  
  let Bil = 20;
  FaktorTerbalik(Bil);
  