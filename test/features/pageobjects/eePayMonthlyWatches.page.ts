import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class EEPayMonthlyWatches extends Page {

    public get watchesPageHeading() {
        return $("h1[data-content-id='gallery-heading']");
    }

    public async getWatchesPageHeading() {
        return await this.getText(this.watchesPageHeading, "Watches Page Heading");
     }

    
}

export default new EEPayMonthlyWatches();