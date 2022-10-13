import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EEChoosePlan extends Page {

    private get bestSellingPlanButton() {
        return $("//span[text()='Best-selling plan']/ancestor::div[@data-content-id='plan-item']/descendant::button[text()='Choose plan']");
    }

    public get addonsPopup() {
        return $("a[name='par_pop_up_window']");
    }

    public get noThanksButton() {
        return $("a[title='Go to basket']");
    }
    public get seeWatchesButton() {
        return $("a[title='See watches']");
    }

    public get pageTitle() {
        return $("//h3[contains(text(),'Choose your add-ons')]");
    }

    public get productName() {
        return $("section.product-page h1");
    }

    public async clickBestSellingPlanButton() {
        await this.clickElement(this.bestSellingPlanButton, "Best Selling Choose Button");
    }

    public async isaddonsPopupDisplayed() {
      return await this.addonsPopup.isDisplayed();
    }

    public async clickNoThanksButton() {
        await this.clickElement(this.noThanksButton, "No thanks");
    }

    public async clicSeeWatchesButton() {
        await this.clickElement(this.seeWatchesButton, "See Watches");
    }

    public async getProductName() {
       return await this.getText(await this.productName, "get ProductName");
    }
    
}

export default new EEChoosePlan();