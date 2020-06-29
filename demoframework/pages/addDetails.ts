import { by, browser, element } from "protractor";
import { PropertiesFileReader } from "../utils/properiesfilereader";
import { FilePath } from '../utils/filePath';
import { ValidationHelper } from '../helper/helperValidation'
import { ExcelReader } from '../utils/excelReader';
import { ElementHelper } from '../helper/commonUtility';
import { waitForDebugger } from "inspector";
import { get } from "https";
import { CommonWait } from '../helper/commonWaits';
import { CLIENT_RENEG_WINDOW } from "tls";
import { WSANOTINITIALISED } from "constants";
var validationHelper = new ValidationHelper();
var wait = new CommonWait();
var readExcel: ExcelReader = new ExcelReader(FilePath.inputDetail);
var varificationData = new PropertiesFileReader(FilePath.pageVarification);

var getLoc = new PropertiesFileReader(FilePath.addDetail)
var utility = new ElementHelper();
import * as prop from '../testdata/validationTxt.json'

export class productDetail {

    launchBrowser() {

        browser.get((<any>prop).websiteUrl)
      
        browser.manage().window().maximize();

        expect(browser.getCurrentUrl()).toBe(varificationData.propertiesFileData('gitDemoUrl'));
    }

    addDetails() {
        // console.log(data.success.txt);

        utility.mouseMove(getLoc.propertiesFileData('loc.btn.addProduct'));

        wait.hardPause(3000)
        utility.clickOnElement(getLoc.propertiesFileData('loc.btn.addProduct'));
        this.clickAdd();



    }

    fillDetail() {
        readExcel.readExcelData(2, 'Name', 'details').then(function (name: string) {
            console.log(name);
            utility.inputData(getLoc.propertiesFileData('loc.input.name'), name);
        })
        readExcel.readExcelData(2, 'Description', 'details').then(function (description: string) {
            console.log(description);
            utility.inputData(getLoc.propertiesFileData('loc.input.description'), description);
        })
        readExcel.readExcelData(2, 'Quantity', 'details').then(function (quantity: string) {
            utility.inputData(getLoc.propertiesFileData('loc.input.quantity'), quantity);
        })
        readExcel.readExcelData(2, 'UnitPrice', 'details').then(function (price: string) {
            utility.inputData(getLoc.propertiesFileData('loc.input.price'), price);
        })
        readExcel.readExcelData(2, 'Supplier', 'details').then(function (Supplier: string) {
            utility.inputData(getLoc.propertiesFileData('loc.input.supplier'), Supplier);
        })

    }

    handleDropDown() {


        utility.selectDropDown(3)


    }

    handleCheckBox() {
        utility.isCheckboxChecked(getLoc.propertiesFileData('loc.checkbox.return'))
    }

    // msg verification
    verifyMessage() {
        readExcel.readExcelData(2, 'Message', 'details').then(function (expectedMessage: string) {
            utility.getText(getLoc.propertiesFileData('loc.txt.msg')).then(function (actualMessage: string) {
                validationHelper.validateText(actualMessage, expectedMessage)
            })
        })
    }


    negativeScenario() {
        var index: number = 1;
        for (index; index <= 5; index++) {
            let count: number = index + 1;
            this.errMessage(count)
        }

    }

    errMessage(count: number) {
        readExcel.readExcelData(count, 'Messages', 'messageValidation').then(function (expectedMessageErr: string) {

            utility.getText(getLoc.propertiesFileData('loc.validate.txt').replace("***", expectedMessageErr)).then(function (actualMessageErr: string) {
                validationHelper.validateText(expectedMessageErr, actualMessageErr);
            })
        })
    }


    clickAdd() {
        utility.clickOnElement(getLoc.propertiesFileData('loc.btn.add'))
    }

    selectTableView() {

        utility.clickOnElement(getLoc.propertiesFileData('loc.btn.list'))
        element.all(by.tagName('tr')).last().element(by.id('view')).click();
    }



    






}




















