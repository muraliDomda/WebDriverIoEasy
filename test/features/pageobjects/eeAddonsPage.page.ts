import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EEAddonsPage extends Page {

    public get addonsPageHeading() {
        return $("//h3[contains(text(),'Choose your add-ons')]");
    }

    public async getAddonsPageHeading() {
        return await this.getText(this.addonsPageHeading, "Addons Page Heading");
     }

    
}

export default new EEAddonsPage();