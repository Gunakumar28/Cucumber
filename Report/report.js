$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Adactinpage.feature");
formatter.feature({
  "name": "verifing the adactin webpage details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "validation of Login page amd booking page using valid credantials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should enter valid \"\u003cusername\u003e\"and\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter valid credantials \"\u003cLocation\u003e\",\"\u003cHotels\u003e\",\"\u003cRoom Type\u003e\",\"\u003cNumber of Rooms\u003e\",\"\u003cCheck In Date\u003e\",\"\u003cCheck Out Date\u003e\",\"\u003cAdults per Room\u003e\",\"\u003cChildren per Room\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.step({
  "name": "user should click on radio button",
  "keyword": "And "
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter  credantials \"\u003cFirst Name\u003e\",\"\u003cLast Name\u003e\",\"\u003cBilling Address\u003e\",\"\u003cCredit Card No.\u003e\",\"\u003cCredit Card Type\u003e\",\"\u003cExpiry Month\u003e\",\"\u003cExpiry Year\u003e\",\"\u003cCVV Number\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should click on booknow button",
  "keyword": "And "
});
formatter.step({
  "name": "user verify the success message and get order number.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location",
        "Hotels",
        "Room Type",
        "Number of Rooms",
        "Check In Date",
        "Check Out Date",
        "Adults per Room",
        "Children per Room",
        "First Name",
        "Last Name",
        "Billing Address",
        "Credit Card No.",
        "Credit Card Type",
        "Expiry Month",
        "Expiry Year",
        "CVV Number"
      ]
    },
    {
      "cells": [
        "govindasrini",
        "srini123",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1-One",
        "26/02/2021",
        "27/02/2021",
        "1-One",
        "1-One",
        "ramesh",
        "kannan",
        "no.4 chennai",
        "1234567897894561",
        "VISA",
        "May",
        "2022",
        "066"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user lanch the adactin weebpage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefCls.user_lanch_the_adactin_weebpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validation of Login page amd booking page using valid credantials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should enter valid \"govindasrini\"and\"srini123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefCls.user_should_enter_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefCls.user_should_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter valid credantials \"Sydney\",\"Hotel Creek\",\"Standard\",\"1-One\",\"26/02/2021\",\"27/02/2021\",\"1-One\",\"1-One\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefCls.user_should_enter_valid_credantials(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefCls.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on radio button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefCls.user_should_click_on_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefCls.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter  credantials \"ramesh\",\"kannan\",\"no.4 chennai\",\"1234567897894561\",\"VISA\",\"May\",\"2022\",\"066\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefCls.user_should_enter_credantials(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booknow button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefCls.user_should_click_on_booknow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the success message and get order number.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefCls.user_verify_the_success_message_and_get_order_number()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "validation of Login page amd booking page using valid credantials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should enter valid \"\u003cusername\u003e\"and\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter valid credantials \"\u003cLocation\u003e\",\"\u003cHotels\u003e\",\"\u003cRoom Type\u003e\",\"\u003cNumber of Rooms\u003e\",\"\u003cCheck In Date\u003e\",\"\u003cCheck Out Date\u003e\",\"\u003cAdults per Room\u003e\",\"\u003cChildren per Room\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.step({
  "name": "user should click on radio button",
  "keyword": "And "
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.step({
  "name": "user should enter  credantials \"\u003cFirst Name\u003e\",\"\u003cLast Name\u003e\",\"\u003cBilling Address\u003e\",\"\u003cCredit Card No.\u003e\",\"\u003cCredit Card Type\u003e\",\"\u003cExpiry Month\u003e\",\"\u003cExpiry Year\u003e\",\"\u003cCVV Number\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should click on booknow button",
  "keyword": "And "
});
formatter.step({
  "name": "user verify the success message and get order number.",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "Location",
        "Hotels",
        "Room Type",
        "Number of Rooms",
        "Check In Date",
        "Check Out Date",
        "Adults per Room",
        "Children per Room",
        "First Name",
        "Last Name",
        "Billing Address",
        "Credit Card No.",
        "Credit Card Type",
        "Expiry Month",
        "Expiry Year",
        "CVV Number"
      ]
    },
    {
      "cells": [
        "govindasrini",
        "srini123",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1-One",
        "26/02/2021",
        "27/02/2021",
        "1-One",
        "1-One",
        "ramesh",
        "kannan",
        "no.4 chennai",
        "1234567897894561",
        "VISA",
        "May",
        "2022",
        "066"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user lanch the adactin weebpage",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefCls.user_lanch_the_adactin_weebpage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "validation of Login page amd booking page using valid credantials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should enter valid \"govindasrini\"and\"srini123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefCls.user_should_enter_valid_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefCls.user_should_click_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter valid credantials \"Sydney\",\"Hotel Creek\",\"Standard\",\"1-One\",\"26/02/2021\",\"27/02/2021\",\"1-One\",\"1-One\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefCls.user_should_enter_valid_credantials(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefCls.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on radio button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefCls.user_should_click_on_radio_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefCls.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter  credantials \"ramesh\",\"kannan\",\"no.4 chennai\",\"1234567897894561\",\"VISA\",\"May\",\"2022\",\"066\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefCls.user_should_enter_credantials(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booknow button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefCls.user_should_click_on_booknow_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verify the success message and get order number.",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefCls.user_verify_the_success_message_and_get_order_number()"
});
formatter.result({
  "status": "passed"
});
});