describe('greet' , function(){
    it('Should greet Kim correctly' , function(){
        assert.equal("Hello, Kim", greet("Kim"));

    });
    it('Should greet Kelly correctly' , function(){
        assert.equal("Hello, Kelly", greet("Kelly"));

    });

});