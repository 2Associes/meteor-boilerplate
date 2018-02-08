module.exports = function () {
  this.setDefaultTimeout(10 * 60 * 1000)

  this.Given(/^I have visited "([^"]*)"$/, function (arg1) {
    browser.url(arg1)
  })

  this.Then(/^I see the form with id "([^"]*)"$/, function (arg2) {
    browser.waitForVisible(arg2, 3000)
  })
}
