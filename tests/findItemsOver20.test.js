describe('findItemsOver20' , function(){
    it('Should display items over 20' , function(){
        assert.deepEqual([] , findItemsOver20("product:apples,qty:10","product:pears,qty:37"));

    });
    it('Should display items over 20' , function(){
        assert.deepEqual([] , findItemsOver20("product:apples,qty:25","product:pears,qty:30"));

    });

});