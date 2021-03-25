describe('totalPhoneBill' , function(){
    it('Should display the phone bill by taking the input and adding the amounts of individual items' , function(){
        assert.equal("R6.15", totalPhoneBill("call, sms, call"));

    });
    it('Should display the output by calculating the amount of the individual input' , function(){
        assert.equal("R1.30", totalPhoneBill("sms, sms"));

    });

});