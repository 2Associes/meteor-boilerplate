module.exports = function () {
  this.setDefaultTimeout(10 * 60 * 1000);

  this.Given(/^I have visited "([^"]*)"$/, (arg1) => {
    browser.url(arg1);
  });

  this.Given(/^I have changed my mind and visited "([^"]*)"$/, (arg1) => {
    browser.url(arg1);
  });
};
