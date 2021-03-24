describe('yearsAgo' , function(){
    it('calculates how many years ago' , function(){
        assert.equal("45", yearsAgo("1976"));

    });
    it(' should calculate how many years ago' , function(){
        assert.equal("21", yearsAgo("2000"));

    });

});