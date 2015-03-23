describe('redeem code', function() {

	var params = browser.params;

	function getid(element){
    return browser.driver.findElement(by.id(element));
  }

  function getcss(element){
    return browser.driver.findElement(by.css(element));
  }

	beforeEach(function(){
		browser.get(params.url+'users/account#tab2');
	});

	it('login', function(){
		getid('username').sendKeys(params.login.username);
		getid('password').sendKeys(params.login.password);
		getid('loginBtn').click().then(function(){
			getcss('[href="/users/account"]').click();
			expect(browser.getCurrentUrl()).toMatch(params.url+'users/account');
			getcss('[href="#tab6"]').click()
		});
	});

	it('redeem code must be not null', function(){
		getid('checkCode').click().then(function(){
			expect(getid('divDanger').getText()).toEqual('Mã khuyến mãi không hợp lệ');
		});
	});

	it('redeem code is wrong', function(){
		getid('redeemCode').sendKeys('codedemo') ;
		getid('checkCode').click().then(function(){
			expect(getid('divDanger').getText()).toEqual('Mã khuyến mãi không hợp lệ');
		});
	});

});