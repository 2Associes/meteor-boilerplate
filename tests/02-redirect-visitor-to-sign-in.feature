Feature: Redirect visitor to sign in

  As a visitor
  I want to access a admin protected url
  So I can be redirected to the sign in page

  Scenario: Redirect visitor to sign in
    Given I have visited "http://localhost:3000/admin/home"
    Then I am redirected to "http://localhost:3000/sign-in"
