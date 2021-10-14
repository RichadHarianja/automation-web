@Features
Feature: Forgot Password Feature

  @openweb @forgotpassword @smoke
  Scenario Outline:  User want to open browser and access stockbit web
    Given User open google web
    Then User want to check the logo web
    Then User want to check the login process
    Then User want to click menu forgot password
    Then User input email "<email>"
    When User click button submit
    Then sistem will show alerts
    Then User didn't receive the email "<email>"
    When  User click button submit
    Then sistem will show alerts
    Examples:
      | email |
      | test@gmail.com |
