import { Given, Then} from "cypress-cucumber-preprocessor/steps";
import pg2 from "../pages/Flight_page";

Given("User navigates to EaseMyTrip Flight website", () => {
    pg2.enterURL()
});
Then("User selects from city as {string}",(city)=>{
    pg2.select_from_city(city)
})
Then("User selects to city as {string}",(city)=>{
    pg2.select_to_city(city)
})
Then("User selects date as {string} and month as {string} year as {string}",(date,month,year)=>{
    pg2.select_date(date,month,year)
})
Then("User selects class as {string}",(travel_class)=>{
    pg2.select_class(travel_class)
})
Then("User searches for flights and selects first flight",()=>{
    pg2.search_select()
})
Then("User selects {string} option",(journey)=>{
    pg2.journey_type(journey)
})
Then("User selects {string} in trip insurance",(choice)=>{
    pg2.get_insured(choice)
})
Then("User Clicks continue, validation error should be visible",()=>{
    pg2.check_validation()
})
Then("User enters {string} in email and clicks continue",(email)=>{
    pg2.enter_email(email)
})
Then("User enters title as {string},first Name as {string},last Name as {string},email as {string},contact no as {string}",(titles,Fn,Ln,email,contact)=>{
    pg2.enter_details(titles,Fn,Ln,email,contact)
})