exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['live_test.js'],
  // multiCapabilities: [{
  //   browserName: 'firefox'
  // }, {
  //   browserName: 'chrome'
  // }],
  onPrepare: function() {
  // implicit and page load timeouts
  // browser.manage().window().setSize(1920, 1055);
  browser.manage().timeouts().pageLoadTimeout(40000);
  browser.manage().timeouts().implicitlyWait(25000);

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
    percent: 0
  }
};
