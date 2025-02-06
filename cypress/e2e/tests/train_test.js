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
When("User selects train no as {string} and selects class as {string}", (train_number,class_type)=> {
    train.select_train_and_class(train_number,class_type)
})
Then("User Selects UserID as {string}",(userID)=>{
    train.enter_userID(userID)
})
Then("User selects free cancellation",()=>{
    train.opt_in_for_cancellation()
})
Then("User enters email as {string} and phone number as {string} in Contact Information",(email,phone_number)=>{
    train.contact_information(email,phone_number)
})
Then("User enters Name as {string} age as {string} Berth as {string} meal as {string} and gender as {string} in Traveller Information",(name,age,berth,meal,gender)=>{
    train.traveller_information(name,age,berth,meal,gender)
})
Then("User Selects insurance and enables auto upgradation",()=>{
    train.insurance()
})