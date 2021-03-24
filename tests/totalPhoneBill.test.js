describe('totalPhoneBill' , function(){
    it('Should display the correct bill' , function(){
        assert.equal("R6.15", totalPhoneBill("call, sms, call"));

    });
    it('Should display correct bill' , function(){
        assert.equal("R1.30", totalPhoneBill("sms, sms"));

    });

});