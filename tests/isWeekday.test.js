describe('isWeekday' , function(){
    it('Checking if the day is a weekday' , function(){
        assert.equal(false, isWeekday("Saturday"));

    });
    it('Checking if the day is a weekday' , function(){
        assert.equal(true, isWeekday("Monday"));

    });

});