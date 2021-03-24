describe('fromWhere' , function(){
    it('Should display the town the car is from' , function(){
        assert.equal("Bellville", fromWhere("CY 64865"));

    });
    it('Should display the town the car is from' , function(){
        assert.equal("Paarl", fromWhere("CJ 65468"));

    });

});