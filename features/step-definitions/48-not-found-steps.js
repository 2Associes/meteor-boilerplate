module.exports = function() {

  const timeToWait = 10*60*1000;
  this.setDefaultTimeout(timeToWait+1);

  this.Given(/^I have visited "([^"]*)"$/, function (arg1) {
    pause(timeToWait);
    browser.url(arg1);
  });

  this.Then(/^the "([^"]*)" tag has class "([^"]*)"$/, function (arg1, arg2) {
    browser.waitForExist(arg1);
    var cssClass = browser.getAttribute(arg1, "class");

    expect(cssClass).toContain(arg2);
  });

};
