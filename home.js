let Chilometri = prompt("Quanti km desideri percorrere ?");

let Eta = prompt("Quanti anni hai");

let prezzo =( Chilometri * 0.21);

if(Eta < 18){
    document. writeln("<h3> Il prezzo del biglietto è:" +" " +[prezzo*80]/100 +"</h3>");
}else if(Eta > 65){
    document. writeln("<h3> Il prezzo del biglietto è:" +" " +[prezzo*60]/100 +"</h3>");
}else{
    document. writeln("<h3> Il prezzo del biglietto è:" +" " +prezzo +"</h3>");
}