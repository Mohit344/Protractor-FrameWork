"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonWait = void 0;
const commonUtility_1 = require("../helper/commonUtility");
const protractor_1 = require("protractor");
var waits = new commonUtility_1.ElementHelper();
class CommonWait {
    waitForElementIsDisplayed(locator) {
        protractor_1.browser.wait(function () {
            var elementObj;
            elementObj = waits.locatortype(locator);
            elementObj.isDisplayed();
        }, 30000);
    }
    waitForElementIsPresent(locator) {
        protractor_1.browser.wait(function () {
            var elementObj;
            elementObj = waits.locatortype(locator);
            elementObj.isPresent();
        }, 30000);
    }
    waitForElementVisiblity(locator) {
        let ec = protractor_1.ExpectedConditions;
        var elementObj;
        elementObj = waits.locatortype(locator);
        var condition = ec.visibilityOf(elementObj);
        protractor_1.browser.wait(condition, 30000);
    }
    hardPause(time) {
        protractor_1.browser.sleep(time);
    }
}
exports.CommonWait = CommonWait;
