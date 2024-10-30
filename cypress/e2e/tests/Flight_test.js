import { Given, Then} from "cypress-cucumber-preprocessor/steps";
import pg2 from "../pages/Flight_page";

before(() => {

    cy.viewport(1920,1080)

})
Given("User navigates to EaseMyTrip Flight website", () => {
    pg2.enterURL()
});