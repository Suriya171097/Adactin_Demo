$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking in Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"\u003cUsername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"\u003cPassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-application;;;1"
    },
    {
      "cells": [
        "ABC",
        "ab12"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application;;;2"
    },
    {
      "cells": [
        "Gowtham",
        "Amy"
      ],
      "line": 15,
      "id": "hotel-booking-in-adactin-application;;;3"
    },
    {
      "cells": [
        "Blackstar17",
        "Music17"
      ],
      "line": 16,
      "id": "hotel-booking-in-adactin-application;;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"ABC\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"ab12\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 4052122100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 628337000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ab12",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 264382600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1104940700,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"Gowtham\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"Amy\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 1340511100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gowtham",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 752411000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Amy",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 585058000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1252340700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"Blackstar17\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user Enter The \"Music17\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user Click On The Login Button And It Navigates To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 1121398200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blackstar17",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 647431300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Music17",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 355179300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 2217591700,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Hotel Searching",
  "description": "",
  "id": "hotel-booking-in-adactin-application;hotel-searching",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@Smoketest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user Select The Location",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "Select The Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Select Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User Select Number of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Input The Checkout Date",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Select The Number Of Adults",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "Select Number Of Children",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Click The Search Button And It Navigates To Hotel Select Page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});