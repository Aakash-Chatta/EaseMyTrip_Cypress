import { Given, Then,And,When} from "cypress-cucumber-preprocessor/steps";
import train from "../pages/train_page";
import pg1 from "../pages/Hotel_page";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})
Given("User navigates to EaseMyTrip railway website", () => {
    train.visit_url()
});
When("User selects from city station name as {string}", (city)=> {
    train.enter_from_city(city)
})
Then("User selects to city station name as {string}",  (city)=> {
    train.enter_to_city(city)
})
And("User selects departure date as {string} month as {string} year as {string}",  (date,month,year)=> {
    train.enter_travel_date(date,month,year)
})
When("User selects train no as {string} and selects class as {string} if available,other wise selects whatever is available", (train_number)=> {
    train.select_train_and_class(train_number)
})