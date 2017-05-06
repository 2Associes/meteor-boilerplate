module.exports = function () {
  this.setDefaultTimeout(10 * 60 * 1000);

  this.Given(/^I have visited "([^"]*)"$/, (arg1) => {
    browser.url(arg1);
  });

  this.Given(/^I have changed my mind and visited "([^"]*)"$/, (arg1) => {
    browser.url(arg1);
  });

  this.Then(/^the h1 tag has class not-found-heading$/, () => {
    browser.waitForExist('h1');
    const cssClass = browser.getAttribute('h1', 'class');
    expect(cssClass).toContain('not-found-heading');
  });
};
