describe('register page', function() {

  // beforeEach(function() {
  //   browser.get('http://nightly.livemix.tv/users/register');
  // });
  function getid(element){
    return browser.driver.findElement(by.id(element));
  }

  function getcss(element){
    return browser.driver.findElement(by.css(element));
  }

  beforeEach(function(){
    browser.get('http://nightly.livemix.tv/users/register');
  });

  it('should not create account if missing username', function() {
    getid('username').sendKeys('');
    getid('email').sendKeys('nopunguyen@gmail.com');
    getid('password').sendKeys('12345678');
    getid('password2').sendKeys('12345678');
    getcss('a.login-btn').click();
    expect(getcss('span.label.label-danger').getText()).toEqual('Please enter username!');
  });

  it('should not create account if missing email', function() {
    getid('username').sendKeys('nopunguyen');
    getid('email').sendKeys('');
    getid('password').sendKeys('12345678');
    getid('password2').sendKeys('12345678');
    getcss('a.login-btn').click();
    expect(getcss('span.label.label-danger').getText()).toEqual('Not a valid email address!');
  });

  it('should not create account if missing password', function() {
    getid('username').sendKeys('nopunguyen');
    getid('email').sendKeys('nopunguyen@gmail.com');
    getid('password').sendKeys('');
    getid('password2').sendKeys('12345678');
    getcss('a.login-btn').click();
    expect(getcss('span.label.label-danger').getText()).toEqual('Passwords does not match!');
  });

  it('should not create account if missing password2', function() {
    getid('username').sendKeys('nopunguyen');
    getid('email').sendKeys('nopunguyen@gmail.com');
    getid('password').sendKeys('12345678');
    getid('password2').sendKeys('');
    getcss('a.login-btn').click();
    expect(getcss('span.label.label-danger').getText()).toEqual('Passwords does not match!');
  });

  it('should not create account if password and password2 do not match', function() {
    getid('username').sendKeys('nopunguyen');
    getid('email').sendKeys('nopunguyen@gmail.com');
    getid('password').sendKeys('12345678');
    getid('password2').sendKeys('123456789');
    getcss('a.login-btn').click();
    expect(getcss('span.label.label-danger').getText()).toEqual('Passwords does not match!');
  });

  it('should create account', function() {
    getid('username').sendKeys('nopunguyen');
    getid('email').sendKeys('phukk@gmail.com');
    getid('password').sendKeys('12345678');
    getid('password2').sendKeys('12345678');
    getcss('a.login-btn').click();
    expect(browser.getCurrentUrl()).toMatch('http://nightly.livemix.tv/');
  });

});
