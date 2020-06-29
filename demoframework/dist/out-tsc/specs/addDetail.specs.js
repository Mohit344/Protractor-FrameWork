"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addDetails_1 = require("../pages/addDetails");
const log4jsConfig_1 = require("../log4js-configurations/log4jsConfig");
const commonWaits_1 = require("../helper/commonWaits");
var wait = new commonWaits_1.CommonWait();
var addProduct = new addDetails_1.productDetail();
describe('mysuit', function () {
    beforeAll(function () {
        addProduct.launchBrowser();
        log4jsConfig_1.log4jsConfig.log().debug('launch browser');
    });
    it('login functinality', function () {
        addProduct.addDetails();
        log4jsConfig_1.log4jsConfig.log().debug('click on add product!!!!');
    });
    it('validate negative scenario', function () {
        addProduct.negativeScenario();
        log4jsConfig_1.log4jsConfig.log().debug('show and validate the error msg after the click');
    });
    it('handle fiels', function () {
        addProduct.fillDetail();
        log4jsConfig_1.log4jsConfig.log().debug('filling the details of the product');
    });
    it('select option ', function () {
        addProduct.handleDropDown();
        // browser.sleep(6000)
        wait.hardPause(6000);
        log4jsConfig_1.log4jsConfig.log().debug('select the drop down');
    });
    it('check box', function () {
        addProduct.handleCheckBox();
        log4jsConfig_1.log4jsConfig.log().debug('validate the checkbox');
    });
    it('clck on add', function () {
        addProduct.clickAdd();
        log4jsConfig_1.log4jsConfig.log().debug('click  on the add btn');
    });
    it('verify  the nesssage', function () {
        addProduct.verifyMessage();
        log4jsConfig_1.log4jsConfig.log().debug('verify the that product is successfullyt add or not');
    });
    it('view the the list', function () {
        addProduct.selectTableView();
        log4jsConfig_1.log4jsConfig.log().debug('handle the table and show the data in the table in view !!!');
    });
});
