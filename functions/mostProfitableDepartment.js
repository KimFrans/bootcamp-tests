function mostProfitableDepartment(profitableDept){
    //departments then initialize them to be zero
    //console.log(profitableDept);
    var departmentObj = {outdoor:0, hardware:0, carpentry:0, elecronics:0};
    //var deptMap = {}
    
    for(var index in profitableDept){
      if(profitableDept[index].department == "hardware"){
        departmentObj.hardware += profitableDept[index].sales;
         }
      else if(profitableDept[index].department == "outdoor"){
        departmentObj.outdoor += profitableDept[index].sales;
         }
      else if(profitableDept[index].department == "carpentry"){
        departmentObj.carpentry += profitableDept[index].sales;
         }
      else if(profitableDept[index].department == "electronics"){
        departmentObj.electronics += profitableDept[index].sales;
         }
    }
    var arrObj = [];
    for(var index in departmentObj){
      arrObj.push([index, departmentObj[index]])
    }
    arrObj.sort(function(a,b){
      return b[1]-a[1]
    });
    console.log(arrObj[0]);
    return arrObj[0][0]
  }