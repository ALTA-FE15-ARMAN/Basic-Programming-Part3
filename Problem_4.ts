function palindrom(nilai1: string): boolean {
    const reversed = nilai1.split("").reverse().join("");
    return nilai1 === reversed;
  }
  const string1 = "katak";
const string2 = "kupu-kupu";


  console.log(palindrom("civic")) 
  console.log(palindrom("katak")) 
  console.log(palindrom("kasur rusak")) 
  console.log(palindrom("kupu-kupu")) 
  console.log(palindrom("lion")) 
