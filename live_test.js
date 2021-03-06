describe('livemix page', function() {

	var params = browser.params;

	function getid(element){
    return browser.driver.findElement(by.id(element));
  }

  function getcss(element){
    return browser.driver.findElement(by.css(element));
  }

  function sequence_generator(length){
		var message = "";
		for (var i = 0; i < length; i++) {
        message += "p";
    }
		return message;
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

	it('should vote action', function(){
		getid('username').sendKeys(params.username);
		getid('password').sendKeys(params.password);
		getid('loginBtn').click();
		getcss('[href="/shows/1"]').click();
		getcss('img.mCS_img_loaded:nth-child(2)').click();
		getcss('ul#lstRoomActions li:nth-child(2) div.livemax_actives img.mCS_img_loaded').click();
		expect(getcss('[data-notify-text=""]').getInnerHtml()).toEqual('Bạn vừa sử dụng -10<img src="/images/dcoin.png" width="12" height="12">');
	});

	it('should not chat in 5s', function(){
		getid('message').sendKeys('Hello');
		getid('btnSendChat').click();
		getid('message').sendKeys('Hello');
		getid('btnSendChat').click();
		expect(getcss('[data-notify-text=""]').getInnerHtml()).toEqual('Vui lòng chờ 5s cho mỗi tin nhắn.');
	});

	it('messages must have maximum of 120 characters', function(){
		getid('message').sendKeys(sequence_generator(121));
		getid('btnSendChat').click();
		expect(getid('mess_count').getText()).toEqual('0');
	});

	it('should send the gift', function(){
		getcss('ul.video-live-items-list li.first').click();
		getcss('.modal-footer a.btn_chatcoin:nth-child(2)').click();
		expect(getcss('[data-notify-text=""]').getInnerHtml()).toEqual('Bạn vừa sử dụng -20<img src="/images/dcoin.png" width="12" height="12">');
	});

	it('Gift must have maximum of 10 items', function(){
		getcss('ul.video-live-items-list li.first').click();
		getid('quantity_gift').sendKeys(1);
		getcss('.modal-footer a.btn_chatcoin:nth-child(2)').click();
		expect(getid('giftnoice').getInnerHtml()).toEqual('Số luợng nhập phải nhỏ hơn 10');
	});

});