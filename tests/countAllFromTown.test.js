describe('countAllFromTown' , function(){
    it('Should display the amount of registrations for Stellenbosch' , function(){
        assert.equal(1, countAllFromTown("CL 15845, CY 16584, CF 25455", "CL"));

    });
    it('Should display the amount of registrations for Kuilsriver' , function(){
        assert.equal(1, countAllFromTown("CJ 45845, CY 354586, CF 456846", "CF"));

    });

});