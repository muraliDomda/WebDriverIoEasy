import { setWorldConstructor } from "@wdio/cucumber-framework";

class CustomWorld {
    testid: string
    appid: string
    product:string
    constructor() {
        this.appid = "",
        this.testid = "",
        this.product = ""
    }
}
setWorldConstructor(CustomWorld)