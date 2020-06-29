
import { ElementFinder, element, by, browser, ExpectedConditions } from "protractor";
import { log4jsConfig } from '../log4js-configurations/log4jsConfig'


export class ElementHelper {

    getTextData(presentElement: ElementFinder) {
        //   var textData: string;
        return presentElement.getText().then(function (text: string) {
            console.log(text)
            // log4jsConfig.log().debug("Element's text is: " + text);
            return text;
        })

    }

    clickElement(locator: string, locatorType: string) {
        if (locatorType == 'css') {
            element(by.css(locator)).click();
            //   log4jsConfig.log().debug('clicked on element', locator);
        }
        else if (locatorType == 'id') {
            element(by.id(locator)).click();
        }
        else if (locatorType == 'model') {
            element(by.model(locator)).click();
        }
        else if (locatorType == 'xpath') {
            element(by.xpath(locator)).click();
        }
        else if (locatorType == 'btntext') {
            element(by.buttonText(locator)).click();
        }

        //log4jsConfig.log().debug('clicked on element', locator);
    }

    inputData(locator: string, text: string | number, locatorType: string) {
        var presentElement: ElementFinder = this.getElement(locator, locatorType);
        // log4jsConfig.log().debug("send text is: " + text);
        presentElement.clear().then(function () {
            presentElement.sendKeys(text);

        });


    }

    getElement(locator: string, locatorType: string): ElementFinder {

        if (locatorType == 'css') {
            browser.wait(ExpectedConditions.visibilityOf(element(by.css(locator)))).then()
            return element(by.css(locator));
        }
        else if (locatorType == 'model') {
            browser.wait(ExpectedConditions.visibilityOf(element(by.model(locator)))).then()
            return element(by.model(locator));

        }
        else if (locatorType == 'xpath') {
            browser.wait(ExpectedConditions.visibilityOf(element(by.xpath(locator)))).then()
            return element(by.xpath(locator));
        }
        else {
            return element(by.id(locator));
        }
    }
    isElementExist(locator: string, locatorType: string) {
        if (locatorType == 'id') {
            return element(by.id(locator)).isPresent();
        } else {
            return element(by.css(locator)).isPresent();

        }
    }




}

