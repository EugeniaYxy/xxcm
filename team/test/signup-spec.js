/* Test script for the Sign up form, specifically for birthdate function */
describe('the form app', function() {
	var requiredMsg = $('.bDate-required-error');
	var vDateMsg = $('.vDate-required-error');
	var vAgeMsg = $('.vAge-required-error');
    var alertMsg = $('.alert-success');

	var bDateImp = element(by.model('user.bDate'));
    var clickSubmit = element(by.buttonText('Sign Me Up'));
    var closeTab = element(by.id('closeTab'));



    beforeEach(function() {
        browser.get('http://localhost:8000');
    });


    it('must show required validation error', function(){
        expect(requiredMsg.isPresent()).toEqual(false);
        bDateImp.sendKeys('abc');
        bDateImp.clear();
        expect(requiredMsg.isPresent()).toEqual(true);
        bDateImp.sendKeys('abc');
        expect(requiredMsg.isPresent()).toEqual(false);
    });

    it('must show valid date validation error', function() {
        expect(vDateMsg.isPresent()).toEqual(false);
        bDateImp.sendKeys('11/4/2000');
        expect(vDateMsg.isPresent()).toEqual(false);
        bDateImp.clear();
        expect(requiredMsg.isPresent()).toEqual(true);
        bDateImp.sendKeys('abc');
        expect(vDateMsg.isPresent()).toEqual(true);
    });
   
    it('must show valid age validation error', function() {
        expect(vAgeMsg.isPresent()).toEqual(false);
        bDateImp.sendKeys('11/4/2010');
        expect(vAgeMsg.isPresent()).toEqual(true);
        bDateImp.clear();
        expect(requiredMsg.isPresent()).toEqual(true);
        bDateImp.sendKeys('11/4/2002');
        expect(vAgeMsg.isPresent()).toEqual(false);
    });

    it('must show success message alert', function() {
        expect(alertMsg.isPresent()).toEqual(false);
        bDateImp.sendKeys('11/4/2000');
        clickSubmit.click();
        expect(alertMsg.isPresent()).toEqual(true);
        closeTab.click();
        expect(alertMsg.isPresent()).toEqual(false);
    });
});
