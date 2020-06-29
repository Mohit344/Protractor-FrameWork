"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productDetail = void 0;
const protractor_1 = require("protractor");
const properiesfilereader_1 = require("../utils/properiesfilereader");
const filePath_1 = require("../utils/filePath");
const helperValidation_1 = require("../helper/helperValidation");
const excelReader_1 = require("../utils/excelReader");
const commonUtility_1 = require("../helper/commonUtility");
const commonWaits_1 = require("../helper/commonWaits");
var validationHelper = new helperValidation_1.ValidationHelper();
var wait = new commonWaits_1.CommonWait();
var readExcel = new excelReader_1.ExcelReader(filePath_1.FilePath.inputDetail);
var varificationData = new properiesfilereader_1.PropertiesFileReader(filePath_1.FilePath.pageVarification);
var getLoc = new properiesfilereader_1.PropertiesFileReader(filePath_1.FilePath.addDetail);
var utility = new commonUtility_1.ElementHelper();
const prop = __importStar(require("../testdata/validationTxt.json"));
class productDetail {
    launchBrowser() {
        protractor_1.browser.get(prop.websiteUrl);
        protractor_1.browser.manage().window().maximize();
        expect(protractor_1.browser.getCurrentUrl()).toBe(varificationData.propertiesFileData('gitDemoUrl'));
    }
    addDetails() {
        // console.log(data.success.txt);
        utility.mouseMove(getLoc.propertiesFileData('loc.btn.addProduct'));
        wait.hardPause(3000);
        utility.clickOnElement(getLoc.propertiesFileData('loc.btn.addProduct'));
        this.clickAdd();
    }
    fillDetail() {
        readExcel.readExcelData(2, 'Name', 'details').then(function (name) {
            console.log(name);
            utility.inputData(getLoc.propertiesFileData('loc.input.name'), name);
        });
        readExcel.readExcelData(2, 'Description', 'details').then(function (description) {
            console.log(description);
            utility.inputData(getLoc.propertiesFileData('loc.input.description'), description);
        });
        readExcel.readExcelData(2, 'Quantity', 'details').then(function (quantity) {
            utility.inputData(getLoc.propertiesFileData('loc.input.quantity'), quantity);
        });
        readExcel.readExcelData(2, 'UnitPrice', 'details').then(function (price) {
            utility.inputData(getLoc.propertiesFileData('loc.input.price'), price);
        });
        readExcel.readExcelData(2, 'Supplier', 'details').then(function (Supplier) {
            utility.inputData(getLoc.propertiesFileData('loc.input.supplier'), Supplier);
        });
    }
    handleDropDown() {
        utility.selectDropDown(3);
    }
    handleCheckBox() {
        utility.isCheckboxChecked(getLoc.propertiesFileData('loc.checkbox.return'));
    }
    // msg verification
    verifyMessage() {
        readExcel.readExcelData(2, 'Message', 'details').then(function (expectedMessage) {
            utility.getText(getLoc.propertiesFileData('loc.txt.msg')).then(function (actualMessage) {
                validationHelper.validateText(actualMessage, expectedMessage);
            });
        });
    }
    negativeScenario() {
        var index = 1;
        for (index; index <= 5; index++) {
            let count = index + 1;
            this.errMessage(count);
        }
    }
    errMessage(count) {
        readExcel.readExcelData(count, 'Messages', 'messageValidation').then(function (expectedMessageErr) {
            utility.getText(getLoc.propertiesFileData('loc.validate.txt').replace("***", expectedMessageErr)).then(function (actualMessageErr) {
                validationHelper.validateText(expectedMessageErr, actualMessageErr);
            });
        });
    }
    clickAdd() {
        utility.clickOnElement(getLoc.propertiesFileData('loc.btn.add'));
    }
    selectTableView() {
        utility.clickOnElement(getLoc.propertiesFileData('loc.btn.list'));
        protractor_1.element.all(protractor_1.by.tagName('tr')).last().element(protractor_1.by.id('view')).click();
    }
}
exports.productDetail = productDetail;
