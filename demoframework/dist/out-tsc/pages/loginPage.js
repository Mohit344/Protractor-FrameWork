"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const protractor_1 = require("protractor");
const excelReader_1 = require("../utils/excelReader");
const properiesfilereader_1 = require("../utils/properiesfilereader");
const filePath_1 = require("../utils/filePath");
const helperValidation_1 = require("../helper/helperValidation");
var Locator = new properiesfilereader_1.PropertiesFileReader(filePath_1.FilePath.loginPage);
var readExcel = new excelReader_1.ExcelReader(filePath_1.FilePath.loginData);
const log4jsConfig_1 = require("../log4js-configurations/log4jsConfig");
// import { ElementHelper } from '../helper/elementhelperdemo'
const commonUtility_1 = require("../helper/commonUtility");
const commonWaits_1 = require("../helper/commonWaits");
var wait = new commonWaits_1.CommonWait();
var utility = new commonUtility_1.ElementHelper();
console.log('reading', readExcel);
var varificationData = new properiesfilereader_1.PropertiesFileReader(filePath_1.FilePath.pageVarification);
var validationHelper = new helperValidation_1.ValidationHelper();
class LoginPage {
    launchBrowser() {
        protractor_1.browser.get(varificationData.propertiesFileData('baseUrl'));
        log4jsConfig_1.log4jsConfig.log().debug('navigated to url');
        protractor_1.browser.manage().window().maximize();
        expect(protractor_1.browser.getCurrentUrl()).toBe(varificationData.propertiesFileData('baseUrl'));
    }
    loginDetails() {
        // expect(browser.getTitle()).toBe('CafeTownsend-AngularJS-Rails')
        console.log("start the test");
        // browser.sleep(3000)
        utility.clickOnElement(Locator.propertiesFileData('loc.btntext'));
        readExcel.readExcelData(2, 'Username', 'loginDetails').then(function (userName) {
            // element(by.model(Locator.propertiesFileData('loc.username.input'))).sendKeys(userName);
            utility.inputData(Locator.propertiesFileData('loc.username.input'), userName);
            log4jsConfig_1.log4jsConfig.log().debug('enter the user username');
        });
        this.readData();
        utility.clickOnElement(Locator.propertiesFileData('loc.btntext'));
        // utility.clickOnElement(Locator.propertiesFileData('loc.btn.create'));
    }
    readData() {
        readExcel.readExcelData(2, 'Password', 'loginDetails').then(function (password) {
            utility.inputData(Locator.propertiesFileData('loc.password.input'), password);
            log4jsConfig_1.log4jsConfig.log().debug('enter the password');
        });
    }
    verifyHeading() {
        utility.getText(Locator.propertiesFileData('loc.txt.heading')).then(function (actualHeading) {
            validationHelper.validateText(actualHeading, varificationData.propertiesFileData('verify.txt.heading'));
        });
    }
    // clickloginBtn() {
    //     utility.clickOnElement(Locator.propertiesFileData('loc.btntext'));
    // }
    demowait() {
        utility.clickOnElement(Locator.propertiesFileData('loc.btn.create'));
    }
    createDetail() {
        // utility.clickOnElement(Locator.propertiesFileData('loc.btn.logout'))
        // wait.waitForElementIsPresent(Locator.propertiesFileData('loc.input.firstname'))
        readExcel.readExcelData(2, 'Firstname', 'loginDetails').then(function (firstname) {
            utility.inputData(Locator.propertiesFileData('loc.input.firstname'), firstname);
            // element(by.css(Locator.propertiesFileData('loc.input.firstname'))).sendKeys(firstname)
        });
        wait.hardPause(6000);
        readExcel.readExcelData(2, 'Lastname', 'loginDetails').then(function (lastName) {
            utility.inputData(Locator.propertiesFileData('loc.input.lastname'), lastName);
        });
        readExcel.readExcelData(2, 'Date', 'loginDetails').then(function (date) {
            utility.inputData(Locator.propertiesFileData('loc.input.date'), date);
        });
        readExcel.readExcelData(2, 'Email', 'loginDetails').then(function (emailID) {
            utility.inputData(Locator.propertiesFileData('loc.input.mail'), emailID);
        });
    }
    addbtn() {
        utility.scrollToDown(200);
        utility.clickOnElement(Locator.propertiesFileData('loc.btn.login'));
    }
    handlealert() {
        let alert = protractor_1.browser.switchTo().alert();
        alert.accept();
    }
    clickOnEdit() {
        utility.clickOnElement(Locator.propertiesFileData('loc.link.click'));
        utility.clickOnElement(Locator.propertiesFileData('loc.btn.edit'));
        // utility.clickOnElement(Locator.propertiesFileData('loc.link.click'))
        // this.createDetail();
        // utility.clickOnElement(Locator.propertiesFileData('loc.btn.update'))
    }
    updateList() {
        utility.clickOnElement(Locator.propertiesFileData('loc.btn.update'));
    }
    delete() {
        utility.clickOnElement(Locator.propertiesFileData('loc.btn.delete'));
    }
    listEmp() {
        protractor_1.element.all(protractor_1.by.css(Locator.propertiesFileData('loc.list.emp'))).getText().then(function (text) {
            for (var i = 0; i < text.length; i++) {
                if (text[i] == 'water Zz')
                    console.log(text[i]);
            }
        });
    }
}
exports.LoginPage = LoginPage;
