/* Test script for the Sign up form, specifically for birthdate function */
describe('the form app', function() {
	var requiredMsg = $('.bDate-required-error');
	var vDateMsg = $('.vDate-required-error');
	var vAgeMsg = $('.vAge-required-error');

	var bDateImp = element(by.model('user.bDate'));

    beforeEach(function() { // run this function before each test
        browser.get('http://localhost:8000/');
    });

    // Cee will work on later. Have question.
    /*it('must have a last name', function() {
        expect(browser.getTitle()).toEqual('My Tasks');
    });*/

	it('must show required validation error', function(){
        // isPresent(): get a boolean to decide whether the msg is there for not
        expect(requiredMsg.isPresent()).toEqual(false);
        bDateImp.sendKeys('abc');
        bDateImp.clear();
        expect(requiredMsg.isPresent()).toEqual(true);
        bDateImp.sendKeys('abc');
        expect(requiredMsg.isPresent()).toEqual(false);
    });

    it('must show  valid Date validation error', function() {
        expect(vDateMsg.isPresent()).toEqual(false);
        bDateImp.sendKeys('11/4/1995');
        expect(vDateMsg.isPresent()).toEqual(false);
        bDateImp.clear();
        expect(requiredMsg.isPresent()).toEqual(true);
        bDateImp.sendKeys('abc');
        expect(vDateMsg.isPresent()).toEqual(true);
    });
});
