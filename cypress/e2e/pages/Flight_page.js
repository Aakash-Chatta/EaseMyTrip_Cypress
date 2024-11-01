import * as flight from "../elements/Flight_elements.json"

function getMonthNumber(monthAbbrev) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    return months.indexOf(monthAbbrev) + 1
}
class flights{
        enterURL() {
            Cypress.on('uncaught:exception', () => {
                // returning false here prevents Cypress from
                // failing the test
                return false
            })
            cy.visit(flight.url);
            cy.get(flight.oneway).should('be.visible')
        }
        selectfromcity(city){
            cy.get(flight.from_city).click()
            cy.get(flight.from_city_search).type(city)
            cy.get(flight.select_city).click()
        }
        selecttocity(city){
            cy.get(flight.to_city).click()
            cy.get(flight.to_city_search).type(city)
            cy.get(flight.select_to_city).click()
        }
        selectdate(date, month, year) {
            cy.get(flight.calender).click();
            let mon_year = month + " " + year;
            let actual_mon_year = " ";
            const monthNumber = getMonthNumber(month)
            function checkCalendar() {
                cy.get(flight.calender_month).then(($element) => {
                    actual_mon_year = $element.text();
                    if (actual_mon_year !== mon_year) {
                        cy.get(flight.calender_next).click();
                        checkCalendar(); // Recursively call the function until the condition is met
                    } else {
                        cy.log('Month and year match:', actual_mon_year);
                        cy.get(`li[id*='${date}\\/${monthNumber}\\/${year}']`).click();
                    }
                });
            }
            checkCalendar(); // Start the loop
        }
        select_class(travel_class){
            cy.get(flight.traveller_class).click()
            cy.get(`input[onclick="fillOptClassName('${travel_class}')"]+span`).click()
            cy.get(flight.class_done).click()
        }
        search_select(){
            cy.get(flight.search).click()
            cy.get(flight.book).each(($element)=>{
                cy.wrap($element).click()
                return false
            })
        }
    }
const pg2=new flights();
export default pg2;