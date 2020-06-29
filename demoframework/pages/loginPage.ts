import { browser, element, by } from 'protractor';
import { ExcelReader } from '../utils/excelReader'
import { PropertiesFileReader } from '../utils/properiesfilereader'
import { FilePath } from '../utils/filePath';
import { ValidationHelper } from '../helper/helperValidation'
var Locator = new PropertiesFileReader(FilePath.loginPage);
var readExcel: ExcelReader = new ExcelReader(FilePath.loginData);
import { log4jsConfig } from "../log4js-configurations/log4jsConfig";
// import { ElementHelper } from '../helper/elementhelperdemo'
import { ElementHelper } from '../helper/commonUtility';

import { CommonWait } from '../helper/commonWaits';
import { stringify } from 'querystring';
var wait = new CommonWait();
var utility = new ElementHelper()
console.log('reading', readExcel);
var varificationData = new PropertiesFileReader(FilePath.pageVarification);
var validationHelper = new ValidationHelper();
export class LoginPage {
    launchBrowser() {
        browser.get(varificationData.propertiesFileData('baseUrl'));
        log4jsConfig.log().debug('navigated to url');

        browser.manage().window().maximize();
        expect(browser.getCurrentUrl()).toBe(varificationData.propertiesFileData('baseUrl'));
    }
    loginDetails() {
        // expect(browser.getTitle()).toBe('CafeTownsend-AngularJS-Rails')
        console.log("start the test");
        // browser.sleep(3000)
        utility.clickOnElement(Locator.propertiesFileData('loc.btntext'));

        readExcel.readExcelData(2, 'Username', 'loginDetails').then(function (userName: string) {
            // element(by.model(Locator.propertiesFileData('loc.username.input'))).sendKeys(userName);
            utility.inputData(Locator.propertiesFileData('loc.username.input'), userName);
            log4jsConfig.log().debug('enter the user username');
        })
        this.readData()
        utility.clickOnElement(Locator.propertiesFileData('loc.btntext'));
        // utility.clickOnElement(Locator.propertiesFileData('loc.btn.create'));

    }

    readData() {
        readExcel.readExcelData(2, 'Password', 'loginDetails').then(function (password: string) {
            utility.inputData(Locator.propertiesFileData('loc.password.input'), password);

            log4jsConfig.log().debug('enter the password');


        })
    }

    verifyHeading() {
        utility.getText(Locator.propertiesFileData('loc.txt.heading')).then(function (actualHeading: string) {

            validationHelper.validateText(actualHeading, varificationData.propertiesFileData('verify.txt.heading'))
        })


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
        readExcel.readExcelData(2, 'Firstname', 'loginDetails').then(function (firstname: string) {
            utility.inputData(Locator.propertiesFileData('loc.input.firstname'), firstname);
            // element(by.css(Locator.propertiesFileData('loc.input.firstname'))).sendKeys(firstname)
        })
        wait.hardPause(6000)
        readExcel.readExcelData(2, 'Lastname', 'loginDetails').then(function (lastName: string) {
            utility.inputData(Locator.propertiesFileData('loc.input.lastname'), lastName);
        })
        readExcel.readExcelData(2, 'Date', 'loginDetails').then(function (date: string) {
            utility.inputData(Locator.propertiesFileData('loc.input.date'), date);

        })
        readExcel.readExcelData(2, 'Email', 'loginDetails').then(function (emailID: string) {
            utility.inputData(Locator.propertiesFileData('loc.input.mail'), emailID);

        })


    }

    addbtn() {

        utility.scrollToDown(200)
        utility.clickOnElement(Locator.propertiesFileData('loc.btn.login'))
    }

    handlealert() {
        let alert = browser.switchTo().alert();
        alert.accept();

    }


    clickOnEdit() {
        utility.clickOnElement(Locator.propertiesFileData('loc.link.click'))
        utility.clickOnElement(Locator.propertiesFileData('loc.btn.edit'))
        // utility.clickOnElement(Locator.propertiesFileData('loc.link.click'))
        // this.createDetail();


        // utility.clickOnElement(Locator.propertiesFileData('loc.btn.update'))


    }

    updateList() {
        utility.clickOnElement(Locator.propertiesFileData('loc.btn.update'))
    }

    delete() {
        utility.clickOnElement(Locator.propertiesFileData('loc.btn.delete'))
    }

    listEmp() {
        element.all(by.css(Locator.propertiesFileData('loc.list.emp'))).getText().then(function (text: string) {
            for (var i = 0; i < text.length; i++) {
                if (text[i] == 'water Zz')
                    console.log(text[i]);
            }
        })
    }







    // createEmpDetail() {

    //     utility.clickOnElement(Locator.propertiesFileData('loc.btn.create'));
    //     wait.hardPause(3000)
    //     this.createDetail();
    //     utility.clickOnElement(Locator.propertiesFileData('loc.btn.login'))

    // }
}
