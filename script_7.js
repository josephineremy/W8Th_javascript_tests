let answer = "";
const word="Fortnite"
while(answer !== "je me barre") {
  answer = prompt('Vas-y exprime-toi, si tu veux te casser, écris "je me barre"');
  if (answer.slice(-1)==="?"){
    console.log(`Ouais ouais...`)
  }
  else if (answer==""){
    console.log(`T'es en PLS?`)
  }
  else if (/^[A-Z\s]*$/.test(answer)){
    console.log(`Wallah tu te calmes là!`)
  }
  else if (answer.includes(word)){
console.log(`on s' fait une partie soum-soum ?`)
  }

  else {
    console.log(`BALEK`)
  }
  }
