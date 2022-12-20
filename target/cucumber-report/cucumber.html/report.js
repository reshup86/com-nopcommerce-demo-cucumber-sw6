$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computertest.feature");
formatter.feature({
  "line": 2,
  "name": "Computer Test",
  "description": "As user I want to explore Computer page of nop commerce website",
  "id": "computer-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.scenarioOutline({
  "line": 14,
  "name": "User should add product to shopping cart successfully",
  "description": "",
  "id": "computer-test;user-should-add-product-to-shopping-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 13,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select By position by \"Name: A to Z\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should be able to see Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select ram \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select hdd \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should able to see the price",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should Click on ADD TO CARD Button.",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should able to see message \"The product has been added to your shopping cart\" on Top green Bar",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should able to close clicking on cross button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should able to mouseHover on Shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on GO TO CART button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see \"Shopping cart\" text",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should be able to change the Product quantity",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Verify the Total \"$2,950.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on checkbox to I agree with the terms of service",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Verify the Text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on Checkout as guest button",
  "keyword": "And "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "computer-test;user-should-add-product-to-shopping-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 42,
      "id": "computer-test;user-should-add-product-to-shopping-cart-successfully;;1"
    },
    {
      "cells": [
        "1",
        "5",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 43,
      "id": "computer-test;user-should-add-product-to-shopping-cart-successfully;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3686968300,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "User should add product to shopping cart successfully",
  "description": "",
  "id": "computer-test;user-should-add-product-to-shopping-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    },
    {
      "line": 13,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on Desktop",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I select By position by \"Name: A to Z\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should be able to see Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select processor \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select ram \"5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select hdd \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I should able to see the price",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I should Click on ADD TO CARD Button.",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I should able to see message \"The product has been added to your shopping cart\" on Top green Bar",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I should able to close clicking on cross button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I should able to mouseHover on Shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on GO TO CART button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I should be able to see \"Shopping cart\" text",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should be able to change the Product quantity",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I click on Update shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Verify the Total \"$2,950.00\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on checkbox to I agree with the terms of service",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on checkout",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Verify the Text \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on Checkout as guest button",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 90332600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnComputerTab()"
});
formatter.result({
  "duration": 827139100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnDesktop()"
});
formatter.result({
  "duration": 740470400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Name: A to Z",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iSelectByPositionBy(String)"
});
formatter.result({
  "duration": 90347600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 2043896100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldBeAbleToSeeBuildYourOwnComputer()"
});
formatter.result({
  "duration": 1171786100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "ComputerSteps.iSelectProcessor(String)"
});
formatter.result({
  "duration": 72856000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectRam(String)"
});
formatter.result({
  "duration": 76080500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerSteps.iSelectHdd(String)"
});
formatter.result({
  "duration": 56866600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerSteps.iSelectOS(String)"
});
formatter.result({
  "duration": 49807600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerSteps.iSelectSoftware(String)"
});
formatter.result({
  "duration": 49068900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldAbleToSeeThePrice()"
});
formatter.result({
  "duration": 202170900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldClickOnADDTOCARDButton()"
});
formatter.result({
  "duration": 45037600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 30
    }
  ],
  "location": "ComputerSteps.iShouldAbleToSeeMessageOnTopGreenBar(String)"
});
formatter.result({
  "duration": 216144500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldAbleToCloseClickingOnCrossButton()"
});
formatter.result({
  "duration": 39592600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldAbleToMouseHoverOnShoppingCart()"
});
formatter.result({
  "duration": 144479400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnGOTOCARTButton()"
});
formatter.result({
  "duration": 1414618800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shopping cart",
      "offset": 25
    }
  ],
  "location": "ComputerSteps.iShouldBeAbleToSeeText(String)"
});
formatter.result({
  "duration": 27307900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iShouldBeAbleToChangeTheProductQuantity()"
});
formatter.result({
  "duration": 2123969300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnUpdateShoppingCart()"
});
formatter.result({
  "duration": 351521000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$2,950.00",
      "offset": 18
    }
  ],
  "location": "ComputerSteps.verifyTheTotal(String)"
});
formatter.result({
  "duration": 27034100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCheckboxToIAgreeWithTheTermsOfService()"
});
formatter.result({
  "duration": 44469300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCheckout()"
});
formatter.result({
  "duration": 477769200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 17
    }
  ],
  "location": "ComputerSteps.verifyTheText(String)"
});
formatter.result({
  "duration": 28635100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerSteps.iClickOnCheckoutAsGuestButton()"
});
formatter.result({
  "duration": 626999900,
  "status": "passed"
});
formatter.after({
  "duration": 93300,
  "status": "passed"
});
});