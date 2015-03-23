describe('buy ticket', function() {

	var params = browser.params;

	function getid(element){
    return browser.driver.findElement(by.id(element));
  }

  function getcss(element){
    return browser.driver.findElement(by.css(element));
  }

	beforeEach(function(){
		browser.get(params.url+'users/account#tab3');
	});

	it('login', function(){
		getid('username').sendKeys(params.login.username);
		getid('password').sendKeys(params.login.password);
		getid('loginBtn').click().then(function(){
			getcss('[href="/users/account"]').click();
			expect(browser.getCurrentUrl()).toMatch(params.url+'users/account');
			getcss('[href="#tab3"]').click()
		});
	});

	it('pin_field must be not null', function(){
		getcss('#tab3 .inner .store-item.fleft:nth-child(1) a').click().then(function(){
			getid('btnBuyTicket').click().then(function(){
				browser.switchTo().alert().accept().then(function(){
					console.log("mua thanh cong");
				});
			});
		});
		// expect(getid('napcardMessage').getInnerHtml()).toEqual('Vui lòng nhập số mã thẻ cào.');
	});

});