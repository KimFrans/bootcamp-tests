describe('mostProfitableDepartment' , function(){
    it('Should display the most profitable department' , function(){
        assert.deepEqual("hardware", mostProfitableDepartment([{department: 'hardware', sales: 4500},
        {department: 'outdoor', sales: 1500}]));

    });
    it('Should display the most profitable department' , function(){
        assert.deepEqual("outdoor", mostProfitableDepartment([{department: 'hardware', sales: 7005},
        {department: 'outdoor', sales: 12006}]));

    });

});