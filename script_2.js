number = prompt("De quel nombre veux-tu la factorielle?");
let f = 1
  for(var count = 1; count <= number; count++)
  {
    f = f * count;   // ou f *= i;
}

console.log(`Le résultat est: ${f}`)
