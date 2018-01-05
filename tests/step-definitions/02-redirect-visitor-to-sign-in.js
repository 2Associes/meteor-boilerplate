module.exports = function () {
  this.setDefaultTimeout(10 * 60 * 1000)

  this.Given(/^I have visited "([^"]*)"$/, function (arg1) {
    browser.url(arg1)
  })

  this.Then(/^I am redirected to "([^"]*)"$/, function (arg2) {
    browser.waitUntil(function () {
      return browser.getUrl() === arg2
    }, 6000)
  })
}
