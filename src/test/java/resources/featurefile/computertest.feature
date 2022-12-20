@regression
Feature: Computer Test
  As user I want to explore Computer page of nop commerce website

  @smoke
  Scenario: User Should Navigate To Computer Page Successfully
    Given I am on homepage
    When I click on Computer tab
    And I click on Desktop
   # And I select By position "Name: Z to A"
    Then i should able to see all products in decending order

  @sanity
  Scenario Outline: User should add product to shopping cart successfully
    Given I am on homepage
    When I click on Computer tab
    And I click on Desktop
    And I select By position by "Name: A to Z"
    And I click on add to cart
    And I should be able to see Build your own computer
    And I select processor "<processor>"
    And I select ram "<ram>"
    And I select hdd "<hdd>"
    And I select OS "<os>"
    And I select Software "<software>"
    And I should able to see the price
    And I should Click on ADD TO CARD Button.
    And I should able to see message "The product has been added to your shopping cart" on Top green Bar
    And I should able to close clicking on cross button
    And I should able to mouseHover on Shopping cart
    And I click on GO TO CART button
    And I should be able to see "Shopping cart" text
    And I should be able to change the Product quantity
    And I click on Update shopping cart
    And Verify the Total "$2,950.00"
    And I click on checkbox to I agree with the terms of service
    And I click on checkout
    And Verify the Text "Welcome, Please Sign In!"
    And I click on Checkout as guest button

    Examples:
      | processor  | ram  | hdd                | os                            |software                  |
      | 1          | 5    | 400 GB [+$100.00]  | Vista Premium [+$60.00]       |Total Commander [+$5.00]  |

