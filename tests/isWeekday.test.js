describe('isWeekday' , function(){
    it('Should say that Monday is a weekday ' , function(){
        assert.equal(true, isWeekday("Monday"));

    });
    it('Should say that Sunday is not a weekday' , function(){
        assert.equal(false, isWeekday("Sunday"));

    });
    it('Should say that Friday is a weekday' , function(){
        assert.equal(true, isWeekday("Friday"));

    });


});