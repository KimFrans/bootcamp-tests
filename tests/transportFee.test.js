describe('transportFee' , function(){
    it('Should display transport fee' , function(){
        assert.equal("R20", transportFee("morning"));

    });
    it('Should display transport fee' , function(){
        assert.equal("free", transportFee("nightshift"));

    });

});
