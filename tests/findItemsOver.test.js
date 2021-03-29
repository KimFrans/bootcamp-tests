describe('findItemsOver' , function(){
    it('Should display the items that have a higher value than the threshold' , function(){
        assert.deepEqual([{product:"pears",qty:37}] , findItemsOver([{product:"apples",qty:10},{product:"pears",qty:37}], 25));

    });
    it('Should display the items that have a value bigger than the threshold' , function(){
        assert.deepEqual([{product:"apples",qty:40}] , findItemsOver([{product:"apples",qty:40},{product:"pears",qty:20}], 30));

    });

});