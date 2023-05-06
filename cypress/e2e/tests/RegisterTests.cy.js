import MainPage from "../pages/ParaBank/MainPage";
import RegisterPage from "../pages/ParaBank/RegisterPage";
import BaseLib from "../pages/Base/BaseLib";


describe('Register Module', () => {

    const mainPage = new MainPage
    const registerPage = new RegisterPage
    const baseLib = new BaseLib

    it('TC0010 - Register User Control', () => {

        var username = "testqa" +baseLib.randomNumber();

        mainPage
                .openWebSite()
                .registerClick();

        registerPage
        .fillFirstName("Furkan")
        .fillLastName("Emre")
        .fillAdress("SISLI")
        .fillCity("ISTANBUL")
        .fillState("DENEME")
        .fillZipCode(23)
        .fillPhoneNumber("4656655665")
        .fillSSN("aakjsdjksda")
        .fillUserName(username)
        .fillPassword("TESTDENEME12")
        .fillConfirm("TESTDENEME12")
        .register()
        .loggedInControl("Welcome "+username);

        })


    it('TC0011 - Register User NULL Control ', () => {

        mainPage
                .openWebSite()
                .registerClick();

        registerPage
        .fillFirstName("Furkan")
        .fillLastName("Emre")
        .fillAdress("SISLI")
        .fillCity("ISTANBUL")
        .fillState("DENEME")
        .fillZipCode(23)
        .fillPhoneNumber("4656655665")
        .fillSSN("aakjsdjksda")
        .fillUserName("testqa123")
        .fillPassword("TESTDENEME12")
        .fillConfirm("TESTDENEME12")
        .register()
        .usernameErrorControl("This username already exists.");

        })

    it('TC0012 - FAILURE USER CONTROL', () => {

        mainPage
                .openWebSite()
                .registerClick();

        registerPage
        .fillLastName("Emre")
        .fillAdress("SISLI")
        .fillCity("ISTANBUL")
        .fillState("DENEME")
        .fillZipCode(23)
        .fillPhoneNumber("4656655665")
        .fillSSN("aakjsdjksda")
        .fillUserName("testqa123")
        .fillPassword("TESTDENEME12")
        .fillConfirm("TESTDENEME12")
        .register()
        .firstNameErrorControl("First name is required.")

        })

    it('TC0013 - FAILURE USER CONTROL V2', () => {

        mainPage
                .openWebSite()
                .registerClick();

        registerPage
        .fillFirstName("Furkan")
        .fillLastName("Emre")
        .fillAdress("SISLI")
        .fillCity("ISTANBUL")
        .fillState("DENEME")
        .fillZipCode(23)
        .fillPhoneNumber("4656655665")
        .fillSSN("aakjsdjksda")
        .fillUserName("testqa123")
        .fillPassword("TESTDENEME12")
        .fillConfirm("TESTDENEME12")
        .register()
        .firstNameErrorControl("First name is required.")

        })

})    
