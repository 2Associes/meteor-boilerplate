module.exports = function () {
  this.setDefaultTimeout(10 * 60 * 1000)

  this.Given(/^"([^"]*)"$/, function (arg1) {
    // Write code here that turns the phrase above into concrete actions
    return arg1
  })

  this.Then(/^"([^"]*)" on Circle CI and deploy on Galaxy$/, function (arg2) {
    // Write code here that turns the phrase above into concrete actions
    return arg2
  })
}
