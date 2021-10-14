$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ForgotPassword.feature");
formatter.feature({
  "line": 2,
  "name": "Forgot Password Feature",
  "description": "",
  "id": "forgot-password-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Features"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User want to open browser and access stockbit web",
  "description": "",
  "id": "forgot-password-feature;user-want-to-open-browser-and-access-stockbit-web",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@openweb"
    },
    {
      "line": 4,
      "name": "@forgotpassword"
    },
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User open google web",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User want to check the logo web",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User want to check the login process",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User want to click menu forgot password",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User input email \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User click button submit",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "sistem will show alerts",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User didn\u0027t receive the email \"\u003cemail\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click button submit",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "sistem will show alerts",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "forgot-password-feature;user-want-to-open-browser-and-access-stockbit-web;",
  "rows": [
    {
      "cells": [
        "email"
      ],
      "line": 17,
      "id": "forgot-password-feature;user-want-to-open-browser-and-access-stockbit-web;;1"
    },
    {
      "cells": [
        "test@gmail.com"
      ],
      "line": 18,
      "id": "forgot-password-feature;user-want-to-open-browser-and-access-stockbit-web;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4057168377,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "User want to open browser and access stockbit web",
  "description": "",
  "id": "forgot-password-feature;user-want-to-open-browser-and-access-stockbit-web;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@forgotpassword"
    },
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@openweb"
    },
    {
      "line": 1,
      "name": "@Features"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User open google web",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User want to check the logo web",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User want to check the login process",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User want to click menu forgot password",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User input email \"test@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User click button submit",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "sistem will show alerts",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "User didn\u0027t receive the email \"test@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "User click button submit",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "sistem will show alerts",
  "keyword": "Then "
});
formatter.match({
  "location": "OpenWebStep.userOpenGoogleWeb()"
});
formatter.result({
  "duration": 3507391142,
  "status": "passed"
});
formatter.match({
  "location": "OpenWebStep.checkLogo()"
});
formatter.result({
  "duration": 2223822957,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userWantToLoginProcess()"
});
formatter.result({
  "duration": 2151232236,
  "status": "passed"
});
formatter.match({
  "location": "ForgotPasswordStep.userWantToLoginProcess()"
});
formatter.result({
  "duration": 2166084595,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 18
    }
  ],
  "location": "ForgotPasswordStep.inputEmail(String)"
});
formatter.result({
  "duration": 2202916472,
  "status": "passed"
});
formatter.match({
  "location": "ForgotPasswordStep.clickSubmitBotton()"
});
formatter.result({
  "duration": 2094636188,
  "status": "passed"
});
formatter.match({
  "location": "ForgotPasswordStep.showMessagesError()"
});
formatter.result({
  "duration": 2037051547,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 31
    }
  ],
  "location": "ForgotPasswordStep.noReceiveEmail(String)"
});
formatter.result({
  "duration": 4307931320,
  "status": "passed"
});
formatter.match({
  "location": "ForgotPasswordStep.clickSubmitBotton()"
});
formatter.result({
  "duration": 2066116992,
  "status": "passed"
});
formatter.match({
  "location": "ForgotPasswordStep.showMessagesError()"
});
formatter.result({
  "duration": 2029472826,
  "status": "passed"
});
formatter.after({
  "duration": 181641955,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LoginPage"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "User want to open browser and access stockbit web",
  "description": "",
  "id": "login-feature;user-want-to-open-browser-and-access-stockbit-web",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@openweb"
    },
    {
      "line": 4,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User open google web",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User want to check the logo web",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User want to check the login process",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User input email or username \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User input password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User press enter",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "sistem will show message \"\u003calert\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-feature;user-want-to-open-browser-and-access-stockbit-web;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "alert"
      ],
      "line": 14,
      "id": "login-feature;user-want-to-open-browser-and-access-stockbit-web;;1"
    },
    {
      "cells": [
        "username",
        "password",
        "Username atau password salah. Mohon coba lagi."
      ],
      "line": 15,
      "id": "login-feature;user-want-to-open-browser-and-access-stockbit-web;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1723836850,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "User want to open browser and access stockbit web",
  "description": "",
  "id": "login-feature;user-want-to-open-browser-and-access-stockbit-web;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    },
    {
      "line": 4,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@LoginPage"
    },
    {
      "line": 4,
      "name": "@openweb"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User open google web",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User want to check the logo web",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User want to check the login process",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User input email or username \"username\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User input password \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User press enter",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "sistem will show message \"Username atau password salah. Mohon coba lagi.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "location": "OpenWebStep.userOpenGoogleWeb()"
});
formatter.result({
  "duration": 3402634160,
  "status": "passed"
});
formatter.match({
  "location": "OpenWebStep.checkLogo()"
});
formatter.result({
  "duration": 2068996952,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.userWantToLoginProcess()"
});
formatter.result({
  "duration": 2143757244,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 30
    }
  ],
  "location": "LoginStep.inputUsername(String)"
});
formatter.result({
  "duration": 2187950024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginStep.inputPassword(String)"
});
formatter.result({
  "duration": 2130743243,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.loginProcess()"
});
formatter.result({
  "duration": 2087011557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username atau password salah. Mohon coba lagi.",
      "offset": 26
    }
  ],
  "location": "LoginStep.verifiedAlertMessage(String)"
});
formatter.result({
  "duration": 2082134387,
  "status": "passed"
});
formatter.after({
  "duration": 254096739,
  "status": "passed"
});
});