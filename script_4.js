const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];



console.log(`Entrepreneurs qui sont nés dans les années 70:`)
for(let individual in entrepreneurs){
if ((entrepreneurs[individual]['year'] >= 1970) && (entrepreneurs[individual]['year'] <=1979)) {
console.log(`${entrepreneurs[individual]['first']} est né dans les années 70.`);
} else {
}}

console.log("");
console.log(`Le prénom et le nom de chaque entrepreneur:`)
for(let individual in entrepreneurs){
console.log(`${entrepreneurs[individual]['first']} ${entrepreneurs[individual]['last']}`);
}

  console.log("");
console.log(`L'âge de chaque entrepreneur est:`)
for(let individual in entrepreneurs){
  let yearNow=2020;
console.log(`L'âge de ${entrepreneurs[individual]['first']} ${entrepreneurs[individual]['last']} est ${yearNow - (entrepreneurs[individual]['year'])}`);
}

  console.log("");
console.log(`La liste des entrepreneurs par ordre alphabétique:`)
newOrderArray=entrepreneurs.sort((a, b) => (a.last > b.last)? 1: ((b.last > a.last) ? -1 : 0));
console.log(newOrderArray)
