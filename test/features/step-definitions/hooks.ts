import { BeforeStep, BeforeAll,Before } from "@cucumber/cucumber";

BeforeStep(function () {
    // @ts-ignore
    this.testid = browser.config.testid
}),

Before(function (world) {
    let arr = world.pickle.name.split(/:/)
    // @ts-ignore
    if(arr.length > 0) browser.config.testid = arr[0]
    // @ts-ignore
    if(!browser.config.testid) throw Error(`Error getting testid for current scenario: ${world.pickle.name}`)
})
