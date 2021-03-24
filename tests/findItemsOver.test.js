describe('findItemsOver' , function(){
    it('Should display items bigger than threshold' , function(){
        assert.deepEqual([], findItemsOver("product:apples,qty:10","product:pears,qty:37", "25"));

    });
    it('Should display items bigger than threshold' , function(){
        assert.deepEqual([], findItemsOver("product:apples,qty:40","product:pears,qty:20", "30"));

    });

});