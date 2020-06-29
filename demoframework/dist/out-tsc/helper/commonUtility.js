"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementHelper = void 0;
const protractor_1 = require("protractor");
class ElementHelper {
    locatortype(locator) {
        var elementObj;
        var arrayLocator = locator.split(":", 2);
        switch (arrayLocator[0]) {
            // Find by xpath
            case "Id":
                elementObj = protractor_1.element(protractor_1.by.id(arrayLocator[1]));
                break;
            case "Css":
                elementObj = protractor_1.element(protractor_1.by.css(arrayLocator[1]));
                break;
            case "Name":
                elementObj = protractor_1.element(protractor_1.by.name(arrayLocator[1]));
                break;
            case "PARTIALLINK":
                elementObj = protractor_1.element(protractor_1.by.partialLinkText(arrayLocator[1]));
                break;
            case "LINK":
                elementObj = protractor_1.element(protractor_1.by.linkText(arrayLocator[1]));
                break;
            case "TAGNAME":
                elementObj = protractor_1.element(protractor_1.by.tagName(arrayLocator[1]));
                break;
            case "Model":
                elementObj = protractor_1.element(protractor_1.by.model(arrayLocator[1]));
                break;
            case "BIND":
                elementObj = protractor_1.element(protractor_1.by.exactBinding(arrayLocator[1]));
                break;
            case "ButtonText":
                elementObj = protractor_1.element(protractor_1.by.buttonText(arrayLocator[1]));
                break;
            case "Repeater":
                elementObj = protractor_1.element(protractor_1.by.repeater(arrayLocator[1]));
                break;
            case "Option":
                elementObj = protractor_1.element(protractor_1.by.options(arrayLocator[1]));
                break;
            default:
                elementObj = protractor_1.element(protractor_1.by.xpath(arrayLocator[1]));
        }
        return elementObj;
    }
    // click on the element
    clickOnElement(locator) {
        var elementObj;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            elementObj.isEnabled().then(function () {
                elementObj.click();
            });
        });
    }
    // Enter the text in the input field
    inputData(locator, text) {
        var elementObj;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            elementObj.isEnabled().then(function () {
                elementObj.clear().then(function () {
                    elementObj.sendKeys(text);
                });
            });
        });
    }
    // send keys and enter !!
    typeAndEnter(locator) {
        var elementObj;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            elementObj.isEnabled().then(function () {
                elementObj.clear().then(function () {
                    elementObj.sendKeys(protractor_1.protractor.Key.ENTER);
                });
            });
        });
    }
    // get text of the limit//
    getText(locator) {
        return this.locatortype(locator).getText().then(function (text) {
            return text;
        });
    }
    // get inner txt
    getInnerTxt(locator) {
        return this.locatortype(locator).getAttribute("innerHTML").then(function (text) {
            return text;
        });
    }
    // is element present 
    isElementPresent(locator) {
        this.locatortype(locator).isPresent();
    }
    // mouse action 
    mouseMove(locator) {
        var elementObj;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            protractor_1.browser.actions().mouseMove(elementObj).perform();
        });
    }
    // mouse up oon a element 
    mouseUp(locator) {
        var elementObj;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            protractor_1.browser.actions().mouseUp(elementObj).perform();
        });
    }
    // mousedown on a element
    mouseDown(locator) {
        var elementObj;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            protractor_1.browser.actions().mouseDown(elementObj).perform();
        });
    }
    // verify checkbox is checked or not.
    isCheckboxChecked(locator) {
        var elementObj;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            elementObj.isEnabled().then(function () {
                elementObj.isSelected();
            });
        });
    }
    //verify radio button is selected
    isRadioButtonSelected(locator) {
        var elementObj;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            elementObj.isEnabled().then(function () {
                elementObj.isSelected();
            });
        });
    }
    // scrow down
    scrollToDown(dowPosition) {
        protractor_1.browser.executeScript(`window.scrollTo(0,${dowPosition})`);
    }
    // var selectDropdownbyNum = function (element, optionNum) {
    //     if (optionNum) {
    //         var options = element.all(by.tagName('option'))
    //             .then(function (options) {
    //                 options[optionNum].click();
    //             });
    //     }
    // };
    selectDropDown(optionNum) {
        if (optionNum) {
            var options = protractor_1.element.all(protractor_1.by.tagName('option')).then(function (options) {
                options[optionNum].click();
            });
        }
    }
    getTtitle(title) {
        return protractor_1.browser.getTitle().then(function (titleTxt) {
            return titleTxt;
        });
    }
}
exports.ElementHelper = ElementHelper;
