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
exports.AirbnBooking = void 0;
const protractor_1 = require("protractor");
const properiesfilereader_1 = require("../utils/properiesfilereader");
const filePath_1 = require("../utils/filePath");
const helperValidation_1 = require("../helper/helperValidation");
const excelReader_1 = require("../utils/excelReader");
const commonUtility_1 = require("../helper/commonUtility");
const commonWaits_1 = require("../helper/commonWaits");
var validationHelper = new helperValidation_1.ValidationHelper();
var wait = new commonWaits_1.CommonWait();
var readExcel = new excelReader_1.ExcelReader(filePath_1.FilePath.bookingDetail);
var varificationData = new properiesfilereader_1.PropertiesFileReader(filePath_1.FilePath.pageVarification);
var getLoc = new properiesfilereader_1.PropertiesFileReader(filePath_1.FilePath.bookingHotel);
var utility = new commonUtility_1.ElementHelper();
const prop = __importStar(require("../testdata/validationTxt.json"));
class AirbnBooking {
    launchBrowser() {
        protractor_1.browser.waitForAngularEnabled(false);
        protractor_1.browser.get(prop.airbnWebsite);
        protractor_1.browser.manage().window().maximize();
    }
    handleCokkie() {
        utility.clickOnElement(getLoc.propertiesFileData('loc.btn.ok'));
        utility.clickOnElement(getLoc.propertiesFileData('loc.select.location'));
    }
    enterLocation() {
        readExcel.readExcelData(2, 'Location', 'bookingdetails').then(function (location) {
            utility.inputData(getLoc.propertiesFileData('loc.input.location'), location);
        });
        // this.enterDate()
        // this.enterDate()
        // this.addGuest()
    }
    selectTheLocation() {
        utility.typeAndEnter(getLoc.propertiesFileData('loc.input.location'));
    }
    // enterDate() {
    //     // utility.clickOnElement(getLoc.propertiesFileData('loc.input.date'));
    //     this.fillDate()
    // }
    fillDate() {
        readExcel.readExcelData(2, 'Date', 'bookingdetails').then(function (date) {
            // utility.inputDate(getLoc.propertiesFileData('loc.input.date'), date)
        });
    }
    addGuest() {
        utility.clickOnElement(getLoc.propertiesFileData('loc.input.guest'));
        utility.clickOnElement(getLoc.propertiesFileData('loc.btn.addGuest'));
    }
    clickOnSearch() {
        utility.clickOnElement(getLoc.propertiesFileData('loc.btn.search'));
    }
}
exports.AirbnBooking = AirbnBooking;
