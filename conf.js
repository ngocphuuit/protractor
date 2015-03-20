exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['live_test.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }],
  onPrepare: function() {
  // implicit and page load timeouts
  // browser.manage().window().setSize(1920, 1055);
  browser.manage().timeouts().pageLoadTimeout(4000000);
  browser.manage().timeouts().implicitlyWait(2500000);

  // for non-angular page
  browser.ignoreSynchronization = true;

  // sign in before all tests

  },
  jasmineNodeOpts: {
    onComplete: null,
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 360000
  },
  params: {
    percent: 0,
    login: {
      username: 'nopunguyen@gmail.com',
      password: '123123123'
    },
    url: 'http://livemix.tv/'
  }
};
