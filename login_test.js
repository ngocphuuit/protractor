describe('login page', function() {
  var params = browser.params;
  // browser.get('http://nightly.livemix.tv/users/login');
  // var username = browser.driver.findElement(by.id('username'));
  // var password = browser.driver.findElement(by.id('password'));
  // var loginBtn = browser.driver.findElement(by.id('loginBtn'));
  function getid(element){
    return browser.driver.findElement(by.id(element));
  }

  function getcss(element){
    return browser.driver.findElement(by.css(element));
  }

  beforeEach(function() {
    browser.get(params.url+'users/login');
  });

  it('should not login if wrong password', function() {
    getid('username').sendKeys('nopunguyen@gmail.com');
    getid('password').sendKeys('12345678');
    getid('loginBtn').click();
    expect(getcss('div.alert-warning.alert').getText()).toEqual('Invalid username or password');
  });

  it('should not login if wrong username', function() {
    getid('username').sendKeys('nopunguyen1@gmail.com');
    getid('password').sendKeys('123123123');
    getid('loginBtn').click();
    expect(getcss('div.alert-warning.alert').getText()).toEqual('Invalid username or password');
  });

  it('should not login if wrong both', function() {
    getid('username').sendKeys('nopunguyen1@gmail.com');
    getid('password').sendKeys('12345678');
    getid('loginBtn').click();
    expect(getcss('div.alert-warning.alert').getText()).toEqual('Invalid username or password');
  });

  it('should not login if missing username', function() {
    getid('username').sendKeys('');
    getid('password').sendKeys('123123123');
    getid('loginBtn').click();
    expect(getcss('div.alert-warning.alert').getText()).toEqual('Missing credentials');
  });

  it('should not login if missing password', function() {
    getid('username').sendKeys('nopunguyen@gmail.com');
    getid('password').sendKeys('');
    getid('loginBtn').click();
    expect(getcss('div.alert-warning.alert').getText()).toEqual('Missing credentials');
  });

  it('should not login if missing both', function() {
    getid('username').sendKeys('');
    getid('password').sendKeys('');
    getid('loginBtn').click();
    expect(getcss('div.alert-warning.alert').getText()).toEqual('Missing credentials');
  });

  it('should login with correct username and password', function(){
    getid('username').sendKeys(params.login.username);
    getid('password').sendKeys(params.login.password);
    getid('loginBtn').click();
    expect(browser.getCurrentUrl()).toMatch(params.url);
    getcss('[href="/shows/1"]').click();
    // expect(browser.getCurrentUrl()).toMatch('http://livemix.tv/shows/1');
  });


});
