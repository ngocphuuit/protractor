describe('auto vote', function() {

	var params = browser.params;

	function getid(element){
    return browser.driver.findElement(by.id(element));
  }

  function getcss(element){
    return browser.driver.findElement(by.css(element));
  }

  function percent(element, element1){
		element1.getText().then(function(value){
			if (Number(value.toString().trim().split('%')[0]) < 100){
				element.click().then(function(){
					percent(element, element1);
				});
			} ;
		});
	}

	beforeEach(function(){
		browser.get(params.url+'shows/1');
	});

	it('auto chat', function(){
		getid('username').sendKeys(params.login.username);
		getid('password').sendKeys(params.login.password);
		getid('loginBtn').click().then(function(){
			getcss('[href="/shows/1"]').click().then(function(){
				setInterval(function(){
					getid('message').sendKeys('Auto chat , 5s chat 1 lan');
					getid('btnSendChat').click();
				}, 30000);
			});
		});
	});


});