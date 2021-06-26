Feature: Product Details

  Scenario Outline: Verify the functionality of Adding new Products
    Given User should be navigated to the main Application
    When User click on Add new Product button
    And Enter Price "<price>" Name "<name>" and Description "<Description>"
    And Click on save button
    Then Priduct ID will be generated

    Examples: 
      | price | name     | Description     |
      |    10 | product1 | product details |

  Scenario: Verify the functionality of Available product list
    Given User should be navigated to the main Application
    When User click on Available Products button
    Then Product list should be displayed

  Scenario Outline: Verify the functionality of Modifying existing Product
    Given User should be navigated to the main Application
    When User click on Available Products button
    And click on Edit Product for id "<id>"
    And Enter "<name>" name for modification
    And Click on save button
    Then Product ID will be modified "<name>"

    Examples: 
      | id | name |
      |  1 | amit |

  Scenario Outline: Verify the functionality of deleting existing Product
    Given User should be navigated to the main Application
    When User click on Available Products button
    Then click on Delete Product for id "<id>"

    Examples: 
      | id |
      |  1 |
