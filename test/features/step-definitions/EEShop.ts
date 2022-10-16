// @ts-nocheck
import { Given, When, Then, World } from "@wdio/cucumber-framework";

import EEPayMonthly from '../pageobjects/eePayMonthly.page';
import EEChoosePlan from '../pageobjects/eeChoosePlan.page';
import EEBasketPage from '../pageobjects/eeBasket.page';
import EEAddonsPage from '../pageobjects/eeAddonsPage.page';
import EEPayMonthlyWatches from '../pageobjects/eePayMonthlyWatches.page';


Given(/^I am on the PayM Handset Gallery page in acquisition journey$/, async () => {
  await EEPayMonthly.NavigateToPayMontlyPage();
  // await EEPayMonthly.acceptCookies();
});

When(/^I choose (\w+) in Handset Gallery page$/, async (brandname) => {
  await EEPayMonthly.clickPopularBrandsTab();
  await EEPayMonthly.chooseBrand(brandname);
  await browser.pause(5000);
});

Then(/^I see (\w+) only displayed$/, async (brandProduct) => {
  const eleArray = await $$("p[class*='__title']");
  for (var i = 0; i < eleArray.length; i++) {
    var actualValue = (await (eleArray[i].getText())).toLowerCase();
    if (actualValue !== '') {
      await expect(actualValue).toContain(brandProduct.toLowerCase());
    }
  }
});

When(/^I choose any product$/, async () => {
  await EEPayMonthly.chooseFirstAvailableOffer();
  this.product=await EEChoosePlan.getProductName();
});

When(/^I choose any available plan$/, async () => {
  await EEChoosePlan.clickBestSellingPlanButton();
});

Then(/^I see You might also like pop up$/, async () => {
  await browser.pause(5000)
  var windowHandles = await browser.getWindowHandles();
  await browser.switchToWindow(windowHandles[0]);
  await expect(await EEChoosePlan.addonsPopup).toExist();
});


Then(/^I choose No thanks button$/, async () => {
  await EEChoosePlan.clickNoThanksButton();
});

Then(/^I should land on Choose Your Addons page$/, async () => {
  await expect(await EEAddonsPage.getAddonsPageHeading()).toEqual("Choose your add-ons");
});


Then(/^I see only above added item is displayed in Basket$/, async () => {
  await expect(await EEBasketPage.getBasketItemsLabel()).toEqual("1");
  await expect(await EEBasketPage.getBasketItemTitle()).toEqual(this.product);
});

Then(/^I choose Yes, See Watches button$/, async () => {
  await EEChoosePlan.clicSeeWatchesButton();
});

Then(/^I should land on Pay Montly Watches page$/, async () => {
  await expect(await EEPayMonthlyWatches.getWatchesPageHeading()).toContain(" Watches");
});

