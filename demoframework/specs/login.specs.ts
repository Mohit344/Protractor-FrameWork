import { log4jsConfig } from "../log4js-configurations/log4jsConfig";
import { LoginPage } from '../pages/loginPage';
import { browser, utils } from "protractor";
var login = new LoginPage();
import { CommonWait } from '../helper/commonWaits';
var wait = new CommonWait();

describe('mysuit', function () {
    beforeAll(function () {
        login.launchBrowser();
        log4jsConfig.log().debug('launch browser');
    })
    it('login functinality', function () {
        log4jsConfig.log().debug('filling the data in the fields');
        login.loginDetails();
        login.verifyHeading()

    })



    it('democlick', function () {

        login.demowait()

        wait.hardPause(6000)
    })


    it('democheck', function () {

        login.createDetail();


    })

    it('click on add', function () {

        login.addbtn()
        // browser.sleep(3000)
        // login.handlealert()
    })


    it('edit deatils', function () {

        login.clickOnEdit()
        wait.hardPause(6000)
    })
    it('democheck1', function () {

        login.createDetail();


    })
    it('click update', function () {
        login.updateList()

    })

    it('store element', function () {
        login.listEmp()
    })



}
)

