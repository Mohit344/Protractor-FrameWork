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
var readExcel: ExcelReader = new ExcelReader(FilePath.bookingDetail);
var varificationData = new PropertiesFileReader(FilePath.pageVarification);

var getLoc = new PropertiesFileReader(FilePath.bookingHotel)
var utility = new ElementHelper();
import * as prop from '../testdata/validationTxt.json'

export class AirbnBooking {
    launchBrowser() {
        browser.waitForAngularEnabled(false);


        browser.get((<any>prop).airbnWebsite)

        browser.manage().window().maximize();



    }
    handleCokkie() {

        utility.clickOnElement(getLoc.propertiesFileData('loc.btn.ok'))
        utility.clickOnElement(getLoc.propertiesFileData('loc.select.location'))

    }
    enterLocation() {
        readExcel.readExcelData(2, 'Location', 'bookingdetails').then(function (location: string) {
            utility.inputData(getLoc.propertiesFileData('loc.input.location'), location)

        })


        // this.enterDate()
        // this.enterDate()
        // this.addGuest()
    }
    selectTheLocation() {
        utility.typeAndEnter(getLoc.propertiesFileData('loc.input.location'))
    }


    // enterDate() {
    //     // utility.clickOnElement(getLoc.propertiesFileData('loc.input.date'));
    //     this.fillDate()
    // }

    fillDate() {
        readExcel.readExcelData(2, 'Date', 'bookingdetails').then(function (date: string) {
            // utility.inputDate(getLoc.propertiesFileData('loc.input.date'), date)
        })

    }
    addGuest() {
        utility.clickOnElement(getLoc.propertiesFileData('loc.input.guest'))
        utility.clickOnElement(getLoc.propertiesFileData('loc.btn.addGuest'))
    }

    clickOnSearch() {
        utility.clickOnElement(getLoc.propertiesFileData('loc.btn.search'))
    }

}