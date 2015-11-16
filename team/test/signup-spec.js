/* Test script for the Sign up form, specifically for birthdate function */
describe('the form app', function() {
	var requiredMsg = $('.bDate-required-error');
	var vDateMsg = $('.vDate-required-error');
	var vAgeMsg = $('.vAge-required-error');
    var requiredName = $('.requiredName');

	var bDateImp = element(by.model('user.bDate'));
    var lnameInp = element(by.model('user.lname'));
    var emailInp = element(by.model('user.email'));

    var emailInvalid = $('.email-invalid-error');
    var emailRequired = $('.email-required-error');

    beforeEach(function() {
        browser.get('http://localhost:8000/');
    });

    it('must show birthdate required validation error', function(){
        expect(requiredMsg.isPresent()).toEqual(false);
        bDateImp.sendKeys('abc');
        bDateImp.clear();
        expect(requiredMsg.isPresent()).toEqual(true);
        bDateImp.sendKeys('abc');
        expect(requiredMsg.isPresent()).toEqual(false);
    });

    it('must show birth date validation error', function() {
        expect(vDateMsg.isPresent()).toEqual(false);
        bDateImp.sendKeys('11/4/2000');
        expect(vDateMsg.isPresent()).toEqual(false);
        bDateImp.clear();
        expect(requiredMsg.isPresent()).toEqual(true);
        bDateImp.sendKeys('abc');
        expect(vDateMsg.isPresent()).toEqual(true);
    });

    it('must show validation error for last name', function() {
        expect(requiredName.isPresent()).toEqual(false);
        lnameInp.sendKeys('abc');
        lnameInp.clear();
        expect(requiredName.isPresent()).toEqual(true);
        lnameInp.sendKeys('abc');
        expect(requiredName.isPresent()).toEqual(false);
    });

    it('must show validation error for email', function() {
        expect(emailInvalid.isPresent()).toEqual(false);
        emailInp.sendKeys('abc');
        expect(emailInvalid.isPresent()).toEqual(true);
    });

    it('must enter a valid email address', function() {
        expect(emailInvalid.isPresent()).toEqual(false);
        var email = 'example@email.com';
        emailInp.sendKeys(email);
        expect(emailInvalid.isPresent()).toEqual(false);

    });

    it('must show email required validation error', function() {
        expect(emailRequired.isPresent()).toEqual(false);
        emailInp.sendKeys('example@email.com');
        emailInp.clear();
        expect(emailRequired.isPresent()).toEqual(true);

        emailInp.sendKeys('abc');
        expect(emailInvalid.isPresent()).toEqual(true);
        emailInp.clear();
        expect(emailRequired.isPresent()).toEqual(true);
    });

    it('must hide the error messages for email', function() {
        expect(emailRequired.isPresent()).toEqual(false);
        emailInp.sendKeys('abc');
        expect(emailInvalid.isPresent()).toEqual(true);
        emailInp.clear();
        expect(emailInvalid.isPresent()).toEqual(false);
        expect(emailRequired.isPresent()).toEqual(true);
        emailInp.sendKeys('example@email.com');
        expect(emailRequired.isPresent()).toEqual(false);
        expect(emailInvalid.isPresent()).toEqual(false);
    });

    it('must clear the form when clicking on reset', function() {
        emailInp.sendKeys('abc');
        lnameInp.sendKeys('abc');
        bDateImp.sendKeys('10/25/2014');
        (element(by.buttonText('Reset'))).click();
        expect(bDateImp.getText()).toEqual("");
        expect(lnameInp.getText()).toEqual("");
        expect(emailInp.getText()).toEqual("");
    });
});
