import { ElementFinder, element, by, browser, ExpectedConditions, WebElement, protractor } from "protractor";
export class ElementHelper {
    locatortype(locator: string) {
        var elementObj: ElementFinder;
        var arrayLocator: string[] = locator.split(":", 2);
        switch (arrayLocator[0]) {
            // Find by xpath
            case "Id":
                elementObj = element(by.id(arrayLocator[1]));
                break;
            case "Css":
                elementObj = element(by.css(arrayLocator[1]));
                break;
            case "Name":
                elementObj = element(by.name(arrayLocator[1]));
                break;
            case "PARTIALLINK":
                elementObj = element(by.partialLinkText(arrayLocator[1]));
                break;
            case "LINK":
                elementObj = element(by.linkText(arrayLocator[1]));
                break;
            case "TAGNAME":
                elementObj = element(by.tagName(arrayLocator[1]));
                break;
            case "Model":
                elementObj = element(by.model(arrayLocator[1]))
                break;
            case "BIND":
                elementObj = element(by.exactBinding(arrayLocator[1]))
                break;
            case "ButtonText":
                elementObj = element(by.buttonText(arrayLocator[1]))
                break;
            case "Repeater":
                elementObj = element(by.repeater(arrayLocator[1]))
                break;
            case "Option":
                elementObj = element(by.options(arrayLocator[1]))
                break;
            default:
                elementObj = element(by.xpath(arrayLocator[1]))
        }
        return elementObj;
    }
    // click on the element
    clickOnElement(locator: string) {
        var elementObj: ElementFinder;
        elementObj = this.locatortype(locator)
        elementObj.isDisplayed().then(function () {
            elementObj.isEnabled().then(function () {
                elementObj.click();

            })
        })
    }
    // Enter the text in the input field
    inputData(locator: string, text: string) {
        var elementObj: ElementFinder;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            elementObj.isEnabled().then(function () {
                elementObj.clear().then(function () {
                    elementObj.sendKeys(text)
                })
            })


        })

    }


    // send keys and enter !!
    typeAndEnter(locator: string) {
        var elementObj: ElementFinder;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            elementObj.isEnabled().then(function () {
                elementObj.clear().then(function () {
                    elementObj.sendKeys(protractor.Key.ENTER)
                })
            })


        })

    }



    // get text of the limit//
    getText(locator: string) {
        return this.locatortype(locator).getText().then(function (text: string) {

            return text
        })

    }

    // get inner txt
    getInnerTxt(locator: string) {
        return this.locatortype(locator).getAttribute("innerHTML").then(function (text: string) {

            return text
        })

    }


    // is element present 
    isElementPresent(locator: string) {
        this.locatortype(locator).isPresent()
    }





    // mouse action 
    mouseMove(locator: string) {
        var elementObj: ElementFinder;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            browser.actions().mouseMove(elementObj).perform();
        })

    }
    // mouse up oon a element 
    mouseUp(locator: string) {
        var elementObj: ElementFinder;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            browser.actions().mouseUp(elementObj).perform();
        })
    }

    // mousedown on a element
    mouseDown(locator: string) {
        var elementObj: ElementFinder;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            browser.actions().mouseDown(elementObj).perform();
        })
    }


    // verify checkbox is checked or not.
    isCheckboxChecked(locator: string) {
        var elementObj: ElementFinder;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            elementObj.isEnabled().then(function () {
                elementObj.isSelected();
            })

        })
    }

    //verify radio button is selected
    isRadioButtonSelected(locator: string) {
        var elementObj: ElementFinder;
        elementObj = this.locatortype(locator);
        elementObj.isDisplayed().then(function () {
            elementObj.isEnabled().then(function () {
                elementObj.isSelected()
            })
        }
        )
    }


    // scrow down
    scrollToDown(dowPosition: number) {
        browser.executeScript(`window.scrollTo(0,${dowPosition})`);
    }


    // var selectDropdownbyNum = function (element, optionNum) {
    //     if (optionNum) {
    //         var options = element.all(by.tagName('option'))
    //             .then(function (options) {
    //                 options[optionNum].click();
    //             });
    //     }
    // };


    selectDropDown(optionNum: number) {
        if (optionNum) {
            var options = element.all(by.tagName('option')).then(function (options) {
                options[optionNum].click()

            })

        }
    }



    getTtitle(title: string) {


        return browser.getTitle().then(function (titleTxt: string) {
            return titleTxt


        })
    }








    // javascript excecutor 

    // inputDate(locator: string, date: string) {
    //     var elementObj: ElementFinder;
    //     elementObj = this.locatortype(locator);
    //     return browser.executeScript().

    // }









































}



