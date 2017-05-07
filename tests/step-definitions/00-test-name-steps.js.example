module.exports = function() {

  this.Given(/^I have visited Google.com$/, function() {
    browser.url('http://google.com');
  });

  this.When(/^I search for "([^"]*)"$/, function(searchTerm) {
    browser.setValue('input[name="q"]', searchTerm);
    browser.keys(['Enter']);
  });

  this.Then(/^I see "([^"]*)"$/, function(link) {
    browser.waitForExist('a=' + link, 3000);
  });
  
};
