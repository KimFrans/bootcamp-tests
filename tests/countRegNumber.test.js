describe('countRegNumber' , function(){
    it('Should display the amount of registration numbers' , function(){
        assert.equal(1, countRegNumber("12345 ND"));

    });
    it('Should display the amount of registration numbers' , function(){
        assert.equal(2, countRegNumber("CA 42665, AA 12 RT GP"));

    });

});