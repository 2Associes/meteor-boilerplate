module.exports = function () {
  // this.setDefaultTimeout(10 * 60 * 1000);

  this.Given(/^I have visited "([^"]*)"$/, (arg1) => {
    browser.url(arg1);
  });

  this.Then(/^the "([^"]*)" tag has class "([^"]*)"$/, (arg1, arg2) => {
    browser.waitForExist(arg1);
    const cssClass = browser.getAttribute(arg1, 'class');
    expect(cssClass).toMatch(arg2);
  });
};
