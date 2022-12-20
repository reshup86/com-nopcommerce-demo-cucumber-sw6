package com.nopcommerce.demo.cucumber.steps;

import com.nopcommerce.demo.pages.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class HomePageSteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on Computers Tab$")
    public void iClickOnComputersTab() {
        new HomePage().clickOnMenuTab("Computer");
    }

    @And("^I should navigate to computer page successfully$")
    public void iShouldNavigateToComputerPageSuccessfully() {
    }

}
