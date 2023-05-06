class MainPage{

    openWebSite(){
        cy.visit("https://parabank.parasoft.com");
        return this;
    }

    registerClick(){
        cy.get("#loginPanel > p:nth-child(3) > a").click();
        return this;
    }
}

export default MainPage;