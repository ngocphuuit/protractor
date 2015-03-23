describe('send gift', function() {

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

	it('auto send gift', function(){
		getid('username').sendKeys(params.login.username);
		getid('password').sendKeys(params.login.password);
		getid('loginBtn').click();
		getcss('[href="/shows/1"]').click();
		var i = 0;
		while(i < 100){
			for (var y = 1; y < 11; y++) {
				getcss('ul.video-live-items-list li:nth-child('+y+') a').click();
				// getid('quantity_gift').sendKeys(0);
				getcss('.modal-footer a.btn_chatcoin:nth-child(2)').click();
			};
			i++;
		}
	});


});