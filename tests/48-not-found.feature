Feature: Not found

  As a visitor
  I want to try accessing an invalid url
  So I can confirm being redirected to the not found page

  Scenario: Not found
    Given I have visited http://localhost:3000/123456
    Then the article tag has class not-found
