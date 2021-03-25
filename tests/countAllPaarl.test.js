describe('countAllPaarl' , function(){
    it('Should display the number of registrations for Paarl' , function(){
        assert.equal("2", countAllPaarl("CY 12697, CJ 45465, CJ 84564"));

    });
    it('Should display the number of registrations for Paarl' , function(){
        assert.equal("3", countAllPaarl("CA 12697 , CJ 58445, CA 84526, CJ 58469, CJ 58468")); 

    });

});