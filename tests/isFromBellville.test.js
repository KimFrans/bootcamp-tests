describe('isFromBellville' , function(){
    it('Check if registration is from Bellville' , function(){
        assert.equal(true, isFromBellville("CY 12345"));

    });

    it('Check if registration is not from Bellville' , function(){
        assert.equal(false, isFromBellville("CA 12345"));

    });

});