import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EEPayMonthly extends Page {

    private get acceptCookiesButton() {
        return $('//a[contains(text(),"Accept all cookies")]');
    }

    private get popularBrandsTab() {
        return $('#popular-brands-tab');
    }

    //span[text()='Best-selling plan']/ancestor::div[@data-content-id="plan-item"]/descendant::button[text()='Choose plan']

    public async clickAcceptCookiesButton() {
        await this.clickElement(this.acceptCookiesButton, "Accept Cookies Button");
        await browser.pause(5000);
    }
    public async clickPopularBrandsTab() {
        await this.clickElement(this.popularBrandsTab, "Click Popular Brands Tab");
    }

    public async acceptCookies() {
        try{
            const iframe = 0;
            await browser.switchToFrame(iframe);
            await this.clickAcceptCookiesButton();
            await browser.switchToParentFrame();
        }
        catch(Exception){

        }
        
    }

    public async chooseBrand(brandName: string) {
        const elem = await '*[data-name-id="' + brandName + '"]';
        await this.clickElement($(elem), "Brand Name" +brandName);
    }

    public async NavigateToPayMontlyPage() {
        await this.openURL("pay-monthly/");
    }

    private get getAnyPhoneElement() {
        return $("//button[text()='Add to basket']");
    }
    private get getAnyOffer() {
        return $("//a[text()='See offers ']");
    }
    public async chooseFirstAvailablePhoneInList() {
        await this.clickElement(await this.getAnyPhoneElement, "chooseFirstAvailablePhoneInList");
    }

    public async chooseFirstAvailableOffer() {
        await this.clickElement(await this.getAnyOffer, "choose ANy offer");
    }


}

export default new EEPayMonthly();