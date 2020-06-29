"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const log4jsConfig_1 = require("../log4js-configurations/log4jsConfig");
const loginPage_1 = require("../pages/loginPage");
var login = new loginPage_1.LoginPage();
const commonWaits_1 = require("../helper/commonWaits");
var wait = new commonWaits_1.CommonWait();
describe('mysuit', function () {
    beforeAll(function () {
        login.launchBrowser();
        log4jsConfig_1.log4jsConfig.log().debug('launch browser');
    });
    it('login functinality', function () {
        log4jsConfig_1.log4jsConfig.log().debug('filling the data in the fields');
        login.loginDetails();
        login.verifyHeading();
    });
    it('democlick', function () {
        login.demowait();
        wait.hardPause(6000);
    });
    it('democheck', function () {
        login.createDetail();
    });
    it('click on add', function () {
        login.addbtn();
        // browser.sleep(3000)
        // login.handlealert()
    });
    it('edit deatils', function () {
        login.clickOnEdit();
        wait.hardPause(6000);
    });
    it('democheck1', function () {
        login.createDetail();
    });
    it('click update', function () {
        login.updateList();
    });
    it('store element', function () {
        login.listEmp();
    });
    // it('successfully login', function () {
    //     login.loginDetails()
    //     log4jsConfig.log().debug('succesfully log in!!!');
    // })
    // it('login page', function () {
    //     // expect(browser.getTitle()).toBe('CafeTownsend-AngularJS-Rails')
    //     console.log("start the test");
    //     utility.clickOnElement(Locator.propertiesFileData('loc.btntext'));
    //     // utility.clickElement(Locator.propertiesFileData('loc.btntext'), 'btntext')
    //     browser.sleep(3000)
    //     readExcel.readExcelData(2, 'Username', 'loginDetails').then(function (userName: string) {
    //         element(by.model(Locator.propertiesFileData('loc.username.input'))).sendKeys(userName);
    //         log4jsConfig.log().debug('enter the user username');
    //     })
    //     readExcel.readExcelData(2, 'Password', 'loginDetails').then(function (password: string) {
    //         element(by.model(Locator.propertiesFileData('loc.password.input'))).sendKeys(password);
    //         log4jsConfig.log().debug('enter the password');
    //     })
    //     browser.sleep(3000)
    // })
    // it('click login', function () {
    //     // utility.clickElement(Locator.propertiesFileData('loc.btntext'), 'css')
    //     // element(by.css(Locator.propertiesFileData('loc.btntext'))).click();
    //     utility.clickOnElement(Locator.propertiesFileData('loc.btntext'));
    //     log4jsConfig.log().debug('click login btn');
    //     browser.sleep(3000)
    //     let greetmsg = element(by.id(Locator.propertiesFileData('loc.txt.heading')))
    //     expect(greetmsg.getText()).toEqual(varificationData.propertiesFileData('verify.txt.heading'));
    //     log4jsConfig.log().debug('successfully verified the texted');
    //     element(by.css('[id="bAdd"]')).click()
    //     log4jsConfig.log().debug('click on create button');
    // })
    // it('Add deatils', function () {
    //     log4jsConfig.log().debug('input the first name');
    //     readExcel.readExcelData(2, 'Firstname', 'loginDetails').then(function (firstname: string) {
    //         element(by.model(Locator.propertiesFileData('loc.input.firstname'))).sendKeys(firstname)
    //     })
    //     log4jsConfig.log().debug('input the last name');
    //     readExcel.readExcelData(2, 'Lastname', 'loginDetails').then(function (lastName: string) {
    //         element(by.model(Locator.propertiesFileData('loc.input.lastname'))).sendKeys(lastName)
    //     })
    //     log4jsConfig.log().debug('input the date');
    //     readExcel.readExcelData(2, 'Date', 'loginDetails').then(function (date: string) {
    //         element(by.model(Locator.propertiesFileData('loc.input.date'))).sendKeys(date)
    //     })
    //     log4jsConfig.log().debug('input the mail ');
    //     readExcel.readExcelData(2, 'Email', 'loginDetails').then(function (mailId: string) {
    //         element(by.model(Locator.propertiesFileData('loc.input.mail'))).sendKeys(mailId)
    //     })
    // }
    // )
    // it('click', function () {
    //     element(by.css(Locator.propertiesFileData('loc.btn.login'))).click()
    //     let logOut = element(by.css(Locator.propertiesFileData('loc.btn.logout')))
    //     expect(logOut.isPresent()).toBe(true)
    //     logOut.click();
    // })
});
