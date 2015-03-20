module.exports = {
  getid: function(element){
    return browser.driver.findElement(by.id(element));
  },

  getcss: function(element){
    return browser.driver.findElement(by.css(element));
  }
};