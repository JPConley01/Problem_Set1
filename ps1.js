//problem 1
function letterCapitalize(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
      
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   
   return splitStr.join(' '); 
}

document.write(letterCapitalize("I'm a little tea pot"));

//problem 2

function wordCount(str) { 
  return str.split(" ").length;
}

console.log(wordCount("hello world"));

//problem 3 BONUS

function primeTime(n) {
 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
 var m=Math.sqrt(n);
 for (var i=2;i<=m;i++) if (n%i==0) return false;
 return true;
}

primeTime(923847);