let number;
number=prompt("Salut, bienvenue dans ma pyramide !  Combien d'étages veux-tu?");

  spaces=" "
  hashtag= "#"
  n=1
  while (number >= 1) {
  console.log(spaces.repeat(number) + hashtag.repeat(n))
  number--
  n++
}
