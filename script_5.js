const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

console.log(`Les livres du CDI ont-ils tous été empruntés une fois?`)
count=0;
for(let rentedBook in books){
    if (books[rentedBook]['rented'] > 0) {
      count==count++
    }
  }
  if (count == books.length) {
    console.log(`Tous les livres on été empruntés`)
  }
  else {
    console.log(`Au moins un livre n'a jamais été emprunté`)
  }

console.log("");
console.log(`Quel livre a été le plus et le moins emprunté du CDI?`)
  newOrderRents=books.sort((a, b) => (a.rented > b.rented)? 1: ((b.rented > a.rented) ? -1 : 0));
    let most=newOrderRents[(books.length)-1]
    let least=newOrderRents[0]
console.log(`Le livre le plus emprunté est ${most.title}`)
console.log(`Le livre le moins emprunté est ${least.title}`)

console.log("");
  for(let rentedBook in books){
    if (books[rentedBook]['id'] == 873495){
console.log(`Le livre avec l'ID 873495 est: ${books[rentedBook].title}`)
    }
  }

console.log("");
console.log("Supprimons ce fameux livre 133712");
  books.splice(6,1)
  console.log(books)
  console.log(`Comme vous pouvez le voir, le livre 133712 a été supprimé. Pauvre Gatsby`)

console.log("");
console.log("Trions les livres par ordre alphabétique:");
  orderAlpha=books.sort((a, b) => (a.title > b.title)? 1: ((b.title > a.title) ? -1 : 0));
console.log(orderAlpha)
