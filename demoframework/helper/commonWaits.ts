import { ElementHelper } from '../helper/commonUtility';
import { browser, ElementFinder, ExpectedConditions } from 'protractor';
var waits = new ElementHelper()

export class CommonWait {

    waitForElementIsDisplayed(locator: string) {

        browser.wait(function () {
            var elementObj: ElementFinder;
            elementObj = waits.locatortype(locator);
            elementObj.isDisplayed();
        }, 30000)

    }
    waitForElementIsPresent(locator: string) {

        browser.wait(function () {
            var elementObj: ElementFinder;
            elementObj = waits.locatortype(locator);
            elementObj.isPresent();
        }, 30000)

    }

    waitForElementVisiblity(locator: string) {
        let ec = ExpectedConditions;
        var elementObj: ElementFinder;
        elementObj = waits.locatortype(locator);
        var condition = ec.visibilityOf(elementObj);
        browser.wait(condition, 30000)


    }

    hardPause(time: number) {
        browser.sleep(time);
    }



}