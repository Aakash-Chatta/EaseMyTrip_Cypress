import { Given, Then} from "cypress-cucumber-preprocessor/steps";
import pg2 from "../pages/Flight_page";

Given("User navigates to EaseMyTrip Flight website", () => {
    pg2.enterURL()
});
Then("User selects from city as {string}",(city)=>{
    pg2.selectfromcity(city)
})
Then("User selects to city as {string}",(city)=>{
    pg2.selecttocity(city)
})
Then("User selects date as {string} and month as {string} year as {string}",(date,month,year)=>{
    pg2.selectdate(date,month,year)
})
Then("User selects class as {string}",(travel_class)=>{
    pg2.select_class(travel_class)
})
Then("User searches for flights and selects first flight",()=>{
    pg2.search_select()
})