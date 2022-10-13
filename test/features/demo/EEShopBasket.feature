Feature: BT EE Mobile Basket Demo Feature

 @eeShopBasket @eeShop
  Scenario: TC_001: Validate user is displayed with You might also Like Popup - No Thanks
    Given I am on the PayM Handset Gallery page in acquisition journey
    When I choose any product
    And I choose any available plan
    Then I see You might also like pop up
    When I choose No thanks button
    Then I should land on Choose Your Addons page
    And I see only above added item is displayed in Basket


 @eeShopBasket @eeShop1
  Scenario: TC_002: Validate user is displayed with You might also Like Popup - Yes,See Watches
    Given I am on the PayM Handset Gallery page in acquisition journey
    When I choose any product
    When I choose any available plan
    Then I see You might also like pop up
    When I choose Yes, See Watches button
    Then I should land on Pay Montly Watches page