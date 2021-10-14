@LoginPage
Feature: Login Feature

  @openweb @login @smoke
  Scenario Outline:  User want to open browser and access stockbit web
    Given User open google web
    Then User want to check the logo web
    Then User want to check the login process
    Then User input email or username "<username>"
    And User input password "<password>"
    When User press enter
    And sistem will show message "<alert>"
    Examples:
      | username | password | alert |
      | username | password | Username atau password salah. Mohon coba lagi. |

