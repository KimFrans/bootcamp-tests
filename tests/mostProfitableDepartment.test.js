describe('mostProfitableDepartment' , function(){
    it('Should display the name of the department with the most sales that is the most profitable' , function(){
        assert.deepEqual("hardware", mostProfitableDepartment([{department: 'hardware', sales: 4500},
        {department: 'outdoor', sales: 1500}]));

    });
    it('Should display the department with the most sales' , function(){
        assert.deepEqual("outdoor", mostProfitableDepartment([{department: 'hardware', sales: 7005},
        {department: 'outdoor', sales: 12006}]));

    });

});