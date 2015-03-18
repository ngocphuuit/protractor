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

  function per(element1, element){
		// var i = 0;
		element.getText().then(function(value){
			// text = Number(value.toString().trim().split('%')[0]);
			if (Number(value.toString().trim().split('%')[0]) < 100){
				element1.click();
				per(element1, element);
			} ;
			// return Number(value.toString().trim().split('%')[0]);
		});
	}

	beforeEach(function(){
		browser.get('http://nightly.livemix.tv/shows/1');
	});

	it('should vote action', function(){
		getid('username').sendKeys('nopunguyen@gmail.com');
    getid('password').sendKeys('123123123');
    getid('loginBtn').click();
    getcss('[href="/shows/1"]').click();
		// getcss('img.mCS_img_loaded:nth-child(2)').click();
		getcss('ul#lstRoomActions li:nth-child(2) div.livemax_actives img.mCS_img_loaded').click();
		expect(getcss('[data-notify-text=""]').getInnerHtml()).toEqual('Bạn vừa sử dụng -10<img src="/images/dcoin.png" width="12" height="12">');
	});

	// it('should not chat in 5s', function(){
	// 	getid('message').sendKeys('Hello');
	// 	getid('btnSendChat').click();
	// 	getid('message').sendKeys('Hello');
	// 	getid('btnSendChat').click();
	// 	expect(getcss('[data-notify-text=""]').getInnerHtml()).toEqual('Vui lòng chờ 5s cho mỗi tin nhắn.');
	// });

	// it('messages must have maximum of 120 characters', function(){
	// 	getid('message').sendKeys(sequence_generator(121));
	// 	getid('btnSendChat').click();
	// 	expect(getid('mess_count').getText()).toEqual('0');
	// });

	// it('should send the gift', function(){
	// 	getcss('ul.video-live-items-list li.first').click();
	// 	getcss('.modal-footer a.btn_chatcoin:nth-child(2)').click();
	// 	expect(getcss('[data-notify-text=""]').getInnerHtml()).toEqual('Bạn vừa sử dụng -20<img src="/images/dcoin.png" width="12" height="12">');
	// });

	// it('Gift must have maximum of 10 items', function(){
	// 	getcss('ul.video-live-items-list li.first').click();
	// 	getid('quantity_gift').sendKeys(1);
	// 	getcss('.modal-footer a.btn_chatcoin:nth-child(2)').click();
	// 	expect(getid('giftnoice').getInnerHtml()).toEqual('Số luợng nhập phải nhỏ hơn 10');
	// });

	// it('auto vote', function(){
	// 	console.log(getcss('ul#lstRoomActions li').length);
	// 	// var money = expect(getid('usermoney').getInnerHtml());
	// 	// console.log(money);
	// 	for(var y = 1; y< 15; y++){
	// 		var a = getcss('ul#lstRoomActions li:nth-child('+y+') div.livemax_actives img.mCS_img_loaded');
	// 		var pro = getcss('ul#lstRoomActions li:nth-child('+y+') div.livemax_actives span.livemax_actives_sp');
	// 		per(a, pro);
	// 	}
	// });

	it('auto send gift', function(){
		var i = 0;
		while(i < 10){
			getcss('ul.video-live-items-list li:nth-child(1)').click();
			getid('quantity_gift').sendKeys(0);
			getcss('.modal-footer a.btn_chatcoin:nth-child(2)').click();
			i++;
		}
	});

});