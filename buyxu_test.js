describe('add xu', function() {

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
			getcss('[href="#tab2"]').click()
		});
	});

	it('pin_field must be not null', function(){
		getid('applyCard').click();
		expect(getid('napcardMessage').getInnerHtml()).toEqual('Vui lòng nhập số mã thẻ cào.');
	});

	it('seri_field must be not null', function(){
		getid('pin_field').sendKeys('testpinfield') ;
		getid('applyCard').click();
		expect(getid('napcardMessage').getInnerHtml()).toEqual('Vui lòng nhập số series trên thẻ cào.');
	});

	it('Capcha code is wrong', function(){
		getid('pin_field').sendKeys('testpinfield') ;
		getid('seri_field').sendKeys('testserifield') ;
		getid('captcha').sendKeys('testcapcha') ;
		getid('applyCard').click();
		expect(getid('napcardMessage').getInnerHtml()).toEqual('Mã captcha không đúng');
	});


});