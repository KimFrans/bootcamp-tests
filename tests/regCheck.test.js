describe('regCheck' , function(){
    it('Check where the registration is from' , function(){
        assert.equal(true, regCheck("12345 ND GP", 'GP'));

    });

    it('Check where the registration is from' , function(){
        assert.equal(false, regCheck("64648 CJ", "ND"));

    });

});