describe('isFromBellville' , function(){
    it('Should display "true" after checking if the registration is from Bellville' , function(){
        assert.equal(true, isFromBellville("CY 12345"));

    });

    it('Should display "false" after checking that the registration is not from Bellville' , function(){
        assert.equal(false, isFromBellville("CA 12345"));

    });

});