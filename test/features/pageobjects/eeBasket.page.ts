import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EEBasketPage extends Page {

    public get basketItemsLabel() {
        return $("*[class*='cart__label-count']");
    }

    public get basketItemTitle() {
        return $("*[class*='device-title']");
    }

    public async getBasketItemsLabel() {
       return await this.getText(this.basketItemsLabel, "basketItemsLabel");
    }

    public async getBasketItemTitle() {
        return await this.getText(this.basketItemTitle, "Basket Item Title");
     }
    
}

export default new EEBasketPage();