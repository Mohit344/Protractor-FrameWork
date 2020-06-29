export class ValidationHelper {

    validateText(actualText: string, expectedText: string) {
        expect(actualText).toBe(expectedText)
    }


    validateBoolean(isElementPresent: boolean, expectedElementPresence: boolean) {
        expect(isElementPresent).toBe(isElementPresent);
    }
}