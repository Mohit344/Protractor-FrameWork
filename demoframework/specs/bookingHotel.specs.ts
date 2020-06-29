import { AirbnBooking } from '../pages/airbn';
import { log4jsConfig } from "../log4js-configurations/log4jsConfig";
import { browser } from 'protractor';
import { CommonWait } from '../helper/commonWaits';
var wait = new CommonWait();


var booking = new AirbnBooking();
describe('mysuit', function () {
    beforeAll(function () {
        booking.launchBrowser();
        log4jsConfig.log().debug('launch browser');
    })




    // it('handle cookies', function () {
    //     booking.handleCokkie()
    // })
    it('enterLocation', function () {

        booking.enterLocation()
        // booking.selectTheLocation()
        // log4jsConfig.log().debug('click on add product!!!!');
        browser.sleep(4000)

    })

    it('date', function () {
        booking.fillDate();
        // log4jsConfig.log().debug('click on add product!!!!');

    })
    it('addGuest', function () {

        booking.addGuest();
        // log4jsConfig.log().debug('click on add product!!!!');

    })
    it('search', function () {

        booking.clickOnSearch();
        // log4jsConfig.log().debug('click on add product!!!!');

    })




})