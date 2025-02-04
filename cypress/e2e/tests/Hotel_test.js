import { Given, Then} from "cypress-cucumber-preprocessor/steps";
import pg1 from "../pages/Hotel_page";

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Given("User navigates to EaseMyTrip Hotels website", () => {
    pg1.enterURL()
});
Then("User selects city as {string}", function (city) {
    pg1.selectcity(city)
});
Then("User selects checkin date as {string} month as {string} year as {string}",(date,month,year)=>{
    pg1.check(date,month,year)
})
Then("User selects checkout date as {string} month as {string} year as {string}",(date,month,year)=>{
    pg1.check(date,month,year)
})
Then("User selects 2 rooms and {string} adult in each room",(adult)=>{
    pg1.customer(adult)
})
Then("User clicks on search",()=>{
    pg1.search()
})
Then("User selects a Hotel",()=>{
    pg1.select_hotel()
})
Then("User Enters Adult 1 First Name as {string} Last Name as {string}",(fn,ln)=>{
    pg1.guest1(fn,ln)
})
Then("User Enters Adult 2 First Name as {string} Last Name as {string}",(fn,ln)=>{
    pg1.guest2(fn,ln)
})
Then("User enters Email as {string} and phone number as {string}",(em,pn)=>{
    pg1.details(em,pn)
})