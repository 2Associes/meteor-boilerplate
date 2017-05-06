module.exports = function () {
  this.setDefaultTimeout(10 * 60 * 1000);

  this.Given(/^I have visited "([^"]*)"$/, () => {
    // browser.url(arg1);
  });

  this.Then(/^the "([^"]*)" tag has class "([^"]*)"$/, () => {
    // browser.waitForExist(arg1);
    // const cssClass = browser.getAttribute(arg1, 'class');
    // expect(cssClass).toMatch(arg2);
  });
};
