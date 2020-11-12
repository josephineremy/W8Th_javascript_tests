function protein(arn){
console.log(`Le code ARN à traduire en acides aminés est: ${arn}`)
const arnSplit=arn.match(/.{1,3}/g)
const newChain=[]
console.log(`Les codons du code ARN sont: ${arnSplit.join('-')}`);

for(let codon in arnSplit){
  if ((arnSplit[codon]=="UCU") || (arnSplit[codon]=="UCC") || (arnSplit[codon]=="UCA") || (arnSplit[codon]=="UCG") || (arnSplit[codon]=="AGU") || (arnSplit[codon]=="AGC")){
  newChain.push("Sérine");
  }
else if ((arnSplit[codon]=="CCU") || (arnSplit[codon]=="CCC") || (arnSplit[codon]=="CCA") || (arnSplit[codon]=="CCG")){
  newChain.push("Proline");
  }
 else if ((arnSplit[codon]=="UUA") || (arnSplit[codon]=="UUG")){
  newChain.push("Leucine");
  }
else if ((arnSplit[codon]=="UUU") || (arnSplit[codon]=="UUC")){
  newChain.push("Phénylalanine");
  }
else if ((arnSplit[codon]=="UAU") || (arnSplit[codon]=="UAC")){
  newChain.push("Tyrosine");
  }
else {
  newChain.push("Arginine");
  }
}
console.log(`La suite d'acides aminés donne la protéine: ${newChain.join('-')}`)
console.log(``)
}

protein("CCGUCGUUGCGCUACAGC")
protein("CCUCGCCGGUACUUCUCG")
