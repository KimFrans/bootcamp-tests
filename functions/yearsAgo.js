function yearsAgo(year){
    console.log(year);
   
    var d = new Date();
    var n = d.getFullYear();
    var ago = n - year;
    
    return ago;
   
  }