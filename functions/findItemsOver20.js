function findItemsOver20(itemList){
    var over20 =[];
    for(var i in itemList){
      if(itemList[i].qty > 20){
        over20.push(itemList[i])
      }
    }
    return over20;
  }