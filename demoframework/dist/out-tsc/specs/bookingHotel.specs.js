"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const airbn_1 = require("../pages/airbn");
const log4jsConfig_1 = require("../log4js-configurations/log4jsConfig");
const protractor_1 = require("protractor");
const commonWaits_1 = require("../helper/commonWaits");
var wait = new commonWaits_1.CommonWait();
var booking = new airbn_1.AirbnBooking();
describe('mysuit', function () {
    beforeAll(function () {
        booking.launchBrowser();
        log4jsConfig_1.log4jsConfig.log().debug('launch browser');
    });
    // it('handle cookies', function () {
    //     booking.handleCokkie()
    // })
    it('enterLocation', function () {
        booking.enterLocation();
        // booking.selectTheLocation()
        // log4jsConfig.log().debug('click on add product!!!!');
        protractor_1.browser.sleep(4000);
    });
    it('date', function () {
        booking.fillDate();
        // log4jsConfig.log().debug('click on add product!!!!');
    });
    it('addGuest', function () {
        booking.addGuest();
        // log4jsConfig.log().debug('click on add product!!!!');
    });
    it('search', function () {
        booking.clickOnSearch();
        // log4jsConfig.log().debug('click on add product!!!!');
    });
});
