$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("productdetails.feature");
formatter.feature({
  "line": 1,
  "name": "Product Details",
  "description": "",
  "id": "product-details",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify the functionality of Adding new Products",
  "description": "",
  "id": "product-details;verify-the-functionality-of-adding-new-products",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User should be navigated to the main Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on Add new Product button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter Price \"\u003cprice\u003e\" Name \"\u003cname\u003e\" and Description \"\u003cDescription\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Priduct ID will be generated",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "product-details;verify-the-functionality-of-adding-new-products;",
  "rows": [
    {
      "cells": [
        "price",
        "name",
        "Description"
      ],
      "line": 11,
      "id": "product-details;verify-the-functionality-of-adding-new-products;;1"
    },
    {
      "cells": [
        "10",
        "product1",
        "product details"
      ],
      "line": 12,
      "id": "product-details;verify-the-functionality-of-adding-new-products;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2169825200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Verify the functionality of Adding new Products",
  "description": "",
  "id": "product-details;verify-the-functionality-of-adding-new-products;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User should be navigated to the main Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User click on Add new Product button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "Enter Price \"10\" Name \"product1\" and Description \"product details\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "Click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "Priduct ID will be generated",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_should_be_navigated_to_the_main_Application()"
});
formatter.result({
  "duration": 345180400,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.user_click_on_Add_new_Product_button()"
});
formatter.result({
  "duration": 145914400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 13
    },
    {
      "val": "product1",
      "offset": 23
    },
    {
      "val": "product details",
      "offset": 50
    }
  ],
  "location": "stepdefination.enter_Price_Name_and_Description(String,String,String)"
});
formatter.result({
  "duration": 238590200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.click_on_save_button()"
});
formatter.result({
  "duration": 106140500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.priduct_ID_will_be_generated()"
});
formatter.result({
  "duration": 41235000,
  "status": "passed"
});
formatter.after({
  "duration": 689951500,
  "status": "passed"
});
formatter.before({
  "duration": 1132390800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify the functionality of Available product list",
  "description": "",
  "id": "product-details;verify-the-functionality-of-available-product-list",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "User should be navigated to the main Application",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "User click on Available Products button",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "Product list should be displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_should_be_navigated_to_the_main_Application()"
});
formatter.result({
  "duration": 240622200,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.user_click_on_Available_Products_button()"
});
formatter.result({
  "duration": 158473600,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.product_list_should_be_displayed()"
});
formatter.result({
  "duration": 45459200,
  "status": "passed"
});
formatter.after({
  "duration": 662903900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "Verify the functionality of Modifying existing Product",
  "description": "",
  "id": "product-details;verify-the-functionality-of-modifying-existing-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User should be navigated to the main Application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User click on Available Products button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "click on Edit Product for id \"\u003cid\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enter \"\u003cname\u003e\" name for modification",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Product ID will be modified \"\u003cname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "product-details;verify-the-functionality-of-modifying-existing-product;",
  "rows": [
    {
      "cells": [
        "id",
        "name"
      ],
      "line": 28,
      "id": "product-details;verify-the-functionality-of-modifying-existing-product;;1"
    },
    {
      "cells": [
        "7",
        "amit"
      ],
      "line": 29,
      "id": "product-details;verify-the-functionality-of-modifying-existing-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1223609500,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify the functionality of Modifying existing Product",
  "description": "",
  "id": "product-details;verify-the-functionality-of-modifying-existing-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 20,
  "name": "User should be navigated to the main Application",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User click on Available Products button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "click on Edit Product for id \"7\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enter \"amit\" name for modification",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Click on save button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Product ID will be modified \"amit\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_should_be_navigated_to_the_main_Application()"
});
formatter.result({
  "duration": 234336500,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.user_click_on_Available_Products_button()"
});
formatter.result({
  "duration": 159963700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 30
    }
  ],
  "location": "stepdefination.click_on_Edit_Product_for_id(String)"
});
formatter.result({
  "duration": 100123400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amit",
      "offset": 7
    }
  ],
  "location": "stepdefination.enter_name_for_modification(String)"
});
formatter.result({
  "duration": 109891100,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.click_on_save_button()"
});
formatter.result({
  "duration": 93319900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "amit",
      "offset": 29
    }
  ],
  "location": "stepdefination.product_ID_will_be_modified(String)"
});
formatter.result({
  "duration": 33201200,
  "status": "passed"
});
formatter.after({
  "duration": 681362500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Verify the functionality of deleting existing Product",
  "description": "",
  "id": "product-details;verify-the-functionality-of-deleting-existing-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User should be navigated to the main Application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User click on Available Products button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "click on Delete Product for id \"\u003cid\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "product-details;verify-the-functionality-of-deleting-existing-product;",
  "rows": [
    {
      "cells": [
        "id"
      ],
      "line": 37,
      "id": "product-details;verify-the-functionality-of-deleting-existing-product;;1"
    },
    {
      "cells": [
        "11"
      ],
      "line": 38,
      "id": "product-details;verify-the-functionality-of-deleting-existing-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1115511100,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Verify the functionality of deleting existing Product",
  "description": "",
  "id": "product-details;verify-the-functionality-of-deleting-existing-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 32,
  "name": "User should be navigated to the main Application",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User click on Available Products button",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "click on Delete Product for id \"11\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_should_be_navigated_to_the_main_Application()"
});
formatter.result({
  "duration": 467047700,
  "status": "passed"
});
formatter.match({
  "location": "stepdefination.user_click_on_Available_Products_button()"
});
formatter.result({
  "duration": 175066300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11",
      "offset": 32
    }
  ],
  "location": "stepdefination.click_on_Delete_Product_for_id(String)"
});
formatter.result({
  "duration": 112474000,
  "status": "passed"
});
formatter.after({
  "duration": 700028300,
  "status": "passed"
});
});