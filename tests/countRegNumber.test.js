describe('countRegNumber' , function(){
    it('Count the number of registration numbers' , function(){
        assert.equal(1, countRegNumber("12345 ND"));

    });
    it('Count the number of registration numbers' , function(){
        assert.equal(1, countRegNumber("12345 ND", "52614 CY"));

    });

});