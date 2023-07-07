function power(x: number, n: number): number | string {
    if (n < 0) {
      return "Wrong input";
    }
    return Math.pow(x, n);
  }
  
  console.log(power(2, 3));        
  console.log(power(2, 12));  
  console.log(power(7, 2)); 
  console.log(power(9, 3)); 
  console.log(power(22, 5));    
  console.log(power(1996, 0));     
  console.log(power(4213, -3));    
  