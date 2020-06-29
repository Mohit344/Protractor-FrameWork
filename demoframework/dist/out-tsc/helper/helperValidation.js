"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationHelper = void 0;
class ValidationHelper {
    validateText(actualText, expectedText) {
        expect(actualText).toBe(expectedText);
    }
    validateBoolean(isElementPresent, expectedElementPresence) {
        expect(isElementPresent).toBe(isElementPresent);
    }
}
exports.ValidationHelper = ValidationHelper;
