package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.*;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class ComputerSteps {
    @When("^I click on Computer tab$")
    public void iClickOnComputerTab() {
        new HomePage().clickOnMenuTab("Computers");
    }


    @And("^I click on Desktop$")
    public void iClickOnDesktop() {
        new HomePage().clickOnDeskTop();
    }

    @Then("^i should able to see all products in decending order$")
    public void iShouldAbleToSeeAllProductsInDecendingOrder() {
        new DeskTopPage().arrangeProductInDescendingOrder();
    }

    @And("^I select By position by \"([^\"]*)\"$")
    public void iSelectByPositionBy(String sortByName) {
        new DeskTopPage().selectSortByName(sortByName);

    }

    @And("^I click on add to cart$")
    public void iClickOnAddToCart() throws InterruptedException {
        Thread.sleep(2000);
        new DeskTopPage().clickOnAddToCart();
    }

    @And("^I should be able to see Build your own computer$")
    public void iShouldBeAbleToSeeBuildYourOwnComputer() {
        Assert.assertEquals("Text is not display", "Build your own computer", new BuildYourOwnComputerPage().VerifytheTextBuildyourowncomputer());
    }

    @And("^I select processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processor) {
        new BuildYourOwnComputerPage().selectProcessor(processor);

    }

    @And("^I select ram \"([^\"]*)\"$")
    public void iSelectRam(String ram) {
        new BuildYourOwnComputerPage().selectRam(ram);

    }

    @And("^I select hdd \"([^\"]*)\"$")
    public void iSelectHdd(String hdd) {
        new BuildYourOwnComputerPage().selectHDDRadio();

    }

    @And("^I select OS \"([^\"]*)\"$")
    public void iSelectOS(String os) {
        new BuildYourOwnComputerPage().selectOSRadiVistaPremium();

    }

    @And("^I select Software \"([^\"]*)\"$")
    public void iSelectSoftware(String software) {
        new BuildYourOwnComputerPage().selectSoftware();

    }

    @And("^I should able to see the price$")
    public void iShouldAbleToSeeThePrice() {
        String expectedPrice = "$1,475.00";
        Assert.assertEquals("Invalid price",expectedPrice,new BuildYourOwnComputerPage().VerifythePrice());
    }

    @And("^I should Click on ADD TO CARD Button\\.$")
    public void iShouldClickOnADDTOCARDButton() {
        new BuildYourOwnComputerPage().clickOnAddToCartButton();
    }

    @And("^I should able to see message \"([^\"]*)\" on Top green Bar$")
    public void iShouldAbleToSeeMessageOnTopGreenBar(String expectedMessage)  {
       Assert.assertEquals("Invalid data",expectedMessage,new BuildYourOwnComputerPage().VerifytheMessageOnTopGreenbar());
    }

    @And("^I should able to close clicking on cross button$")
    public void iShouldAbleToCloseClickingOnCrossButton() {
        new BuildYourOwnComputerPage().clickOnCloseBar();
    }


    @And("^I should able to mouseHover on Shopping cart$")
    public void iShouldAbleToMouseHoverOnShoppingCart() {
        new BuildYourOwnComputerPage().mouseHoverOnShoppingCart();
    }

    @And("^I click on GO TO CART button$")
    public void iClickOnGOTOCARTButton() {
        new BuildYourOwnComputerPage().clickOnShoppingCart();
    }

    @And("^I should be able to see \"([^\"]*)\" text$")
    public void iShouldBeAbleToSeeText(String expectedMessage)  {
        Assert.assertEquals("Invalid text",expectedMessage,new ShoppingCartPage().verifyTheShoppingCartText());
    }

    @And("^I should be able to change the Product quantity$")
    public void iShouldBeAbleToChangeTheProductQuantity() throws InterruptedException{
        Thread.sleep(2000);
        new ShoppingCartPage().updateQuantity();
    }

    @And("^I click on Update shopping cart$")
    public void iClickOnUpdateShoppingCart() {
        new ShoppingCartPage().updateShoppingCart();
    }

    @And("^Verify the Total \"([^\"]*)\"$")
    public void verifyTheTotal(String expectedPrice)  {
        Assert.assertEquals("Invalid price",expectedPrice,new ShoppingCartPage().verifyTotalPrice());
    }


    @And("^I click on checkbox to I agree with the terms of service$")
    public void iClickOnCheckboxToIAgreeWithTheTermsOfService() {
        new ShoppingCartPage().clickOnTermsOfService();
    }

    @And("^I click on checkout$")
    public void iClickOnCheckout() {
        new ShoppingCartPage().clickOnCheckOutButton();
    }


    @And("^Verify the Text \"([^\"]*)\"$")
    public void verifyTheText(String expectedText)  {
        Assert.assertEquals("Invalid text",expectedText,new CheckOutAsGuestPage().VerifyTheWelComeText());
    }

    @And("^I click on Checkout as guest button$")
    public void iClickOnCheckoutAsGuestButton() {
        new CheckOutAsGuestPage().clickOnAsGuestButton();
    }



}
