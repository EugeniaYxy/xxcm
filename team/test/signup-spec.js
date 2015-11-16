/* Test script for the Sign up form, specifically for birthdate function */
describe('the form app', function() {
    var requiredMsg = $('.bDate-required-error');
    var vDateMsg = $('.vDate-required-error');
    var vAgeMsg = $('.vAge-required-error');
    var bDateImp = element(by.model('user.bDate'));

    var emailInvalid = $('.email-invalid-error');
    var emailRequired = $('.email-required-error');
    var emailInp = element(by.model('user.email'));

    beforeEach(function() {
        browser.get('http://localhost:8000');
    });

    it('must show brithdate required validation error', function(){
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

    it('must show an error message if email is invalid', function() {
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

    it('must hide all the error messages', function() {
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

});
