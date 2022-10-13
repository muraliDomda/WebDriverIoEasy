/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
import { Given, When, Then, World } from "@wdio/cucumber-framework";
import reporter from "../../helper/reporter"
export default class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    public async openURL(path: string) {
        await browser.url(`https://shop.ee.co.uk/gallery/${path}`)
          // @ts-ignore
        await reporter.addStep(browser.config.testid, "info", `Opened Url in Browser:` + path)
        await browser.maximizeWindow()
        // @ts-ignore
        await reporter.addStep(browser.config.testid, "info", `Maximized Browser`)
    }

    async navigateTo(path: string) {
        await browser.url(path)
        // @ts-ignore
        await reporter.addStep(browser.config.testid, "info", `Navigated to: ` + path);

    }
    async click(ele: WebdriverIO.Element) {
        await ele.waitForClickable({ timeout: 5000 })
        if (!ele.elementId) {
            throw Error(ele.error.message)
        }
        await ele.click()
        // @ts-ignore
        await reporter.addStep(browser.config.testid, "info", `clicked element`)
    }
    async typeInto(ele: WebdriverIO.Element, text: string, message: string) {
        await ele.waitForDisplayed({ timeout: 5000 })
        await ele.setValue(text)
        // @ts-ignore
        await reporter.addStep(browser.config.testid, "info", `entered text: ` + text + " : in eleemnt" + message)
    }

    public async clickElement(ele, message: string) {
       
        // await ele.waitForClickable({ timeout: 40000 })
        await ele.scrollIntoView();
        await ele.click()
        // @ts-ignore
        await reporter.addStep(browser.config.testid, "info", `clicked element :` + message)
    }

    public async getText(ele, message: string) {
        await ele.waitForDisplayed({ timeout: 20000 })
        var text = await ele.getText();
        // @ts-ignore
        await reporter.addStep(browser.config.testid, "info", `captured text: ` + message)
        return text;
    }

    public async isDisplayed(ele, message: String) {
        var bool = await ele.isDisplayed()
        // @ts-ignore
        await reporter.addStep(browser.config.testid, "info", `Displayed Property of` + message + " is :" + bool)
        return bool;
    }
}
