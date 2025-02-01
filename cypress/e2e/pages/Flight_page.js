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
        select_from_city(city){
            cy.get(flight.from_city).click()
            cy.get(flight.from_city_search).type(city)
            cy.get(flight.select_city).click()
        }
        select_to_city(city){
            cy.get(flight.to_city).click()
            cy.get(flight.to_city_search).type(city)
            cy.get(flight.select_to_city).click()
        }
        select_date(date, month, year) {
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
        journey_type(journey){
            let i=0
            cy.get(flight.journey_package).each(($element)=>{
                const text=$element.text()
                cy.log(text)
                if(text.includes(journey)){
                    cy.get(flight.journey_package_checkbox).eq(i).click()
                    return false
                }else {i++}
            })
            }
        get_insured(choice){
        if (choice==="Yes"){
            cy.get('.insur-yes > .container-radio > .checkmark-radio')
        }else {cy.get(flight.insurance).eq(1).click()}
        }
        check_validation(){
            cy.get(flight.continue_booking).click()
            cy.get(flight.error).should('contain.text',"Please enter a valid email Id")
        }
        enter_email(email){
            cy.get(flight.email_stage1).type(email)
            cy.get(flight.continue_booking).click()
        }
        enter_details(titles,Fn,Ln,email,contact){
            cy.get(flight.title).select(titles)
            cy.get(flight.fn).type(Fn)
            cy.get(flight.ln).type(Ln)
            cy.get(flight.email_stage2).type(email)
            cy.get(flight.contact_no).type(contact)
            cy.get(flight.phone_no).type(contact)
            cy.get(flight.continue_transaction).click()
            
    }
}
const pg2=new flights();
export default pg2;