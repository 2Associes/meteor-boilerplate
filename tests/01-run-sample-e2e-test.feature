Feature: Run a sample e2e test

  As a developer
  I want to run a sample e2e test
  So I can run test on Circle CI and deploy on Galaxy

  Scenario: Run a sample e2e test
    Given "I have written a sample e2e test"
    Then "it passes testing" on Circle CI and deploy on Galaxy
