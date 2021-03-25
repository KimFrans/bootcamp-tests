describe('regCheck' , function(){
    it('Should display "true" after checking that the registration is from a specific town' , function(){
        assert.equal(true, regCheck("12345 ND GP", 'GP'));

    });

    it('Should display false after checking a registration from a specific town' , function(){
        assert.equal(false, regCheck("64648 CJ", "ND"));

    });
    it('Should display "false" after checking that the registration is from a specific town' , function(){
        assert.equal(false, regCheck("CY 189-012', 'CY"));

    });

});