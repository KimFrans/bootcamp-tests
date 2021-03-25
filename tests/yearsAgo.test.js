describe('yearsAgo' , function(){
    it('Should display the amount of years ago' , function(){
        assert.equal("45", yearsAgo(1976));

    });
    it('Should calculate the amount of years ago by getting todays date and subtracting the input' , function(){
        assert.equal("21", yearsAgo(2000));

    });
    it('Should display the amount of years ago' , function(){
        assert.equal("23", yearsAgo(1998));

    });


});