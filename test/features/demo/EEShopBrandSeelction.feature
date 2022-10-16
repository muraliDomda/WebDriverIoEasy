Feature: BT EE Mobile Brand selection Demo Feature

  @eeShopBrandSelection @eeShop11
  Scenario Outline: Validate Choosen Brand Products only Displays in Popular Brands Page "<ScenarioId>""
    Given I am on the PayM Handset Gallery page in acquisition journey
    When I choose <BrandName> in Handset Gallery page
    Then I see <BrandProduct> only displayed
    Examples:
    |ScenarioId|BrandName|BrandProduct|
    |tc_demo_001|Apple|Iphone|
    |tc_demo_002|Samsung|Samsung|
    |tc_demo_003|OPPO|OPPO|


