describe('transportFee' , function(){
    it('Should display transport fee based on the input shift' , function(){
        assert.equal("R20", transportFee("morning"));

    });
    it('Transport fee should display "free"' , function(){
        assert.equal("free", transportFee("nightshift"));

    });
    it('Should display transport fee R10' , function(){
        assert.equal("R10", transportFee("afternoon"));

    });

});
