import * as hotel from "../elements/Hotel_elements.json"

class hotels {
    enterURL() {
        cy.visit(hotel.url);
        //cy.get(hotel.close_popup).should('be.visible').click();
    }

    selectcity(city) {
        Cypress.on('uncaught:exception', () => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
        cy.get(hotel.city).should('be.visible').type(city)
        cy.get(hotel.city_list).each(($element) => {
            if ($element.text() === city) {
                cy.wrap($element.text()).should('equal', city)
                cy.wrap($element).click()
                return false
            }
        })
    }

    check(date, month, year) {
        cy.get(hotel.checkin_year).select(year)
        cy.get(hotel.checkin_month).select(month)
        cy.get(hotel.checkin_date).each(($element) => {
            if ($element.text() === date) {
                cy.wrap($element.text()).should('equal', date)
                cy.wrap($element).click()
                return false
            }
        })
    }

    customer(adult) {
        cy.get(hotel.adult_room_1).should('have.text','2').then(() => {
            const adult_no=parseFloat(adult)
            if (adult_no <2) {
                cy.get(hotel.adult_1_minus).click()
            }if (adult_no > 2) {
                for (let i = 0; i < adult_no - 2; i++) {
                    cy.get(hotel.adult_1_plus).click()
                }
                cy.get(hotel.adult_room_1).should('have.text',adult)
            }

        })
        cy.get(hotel.add_room).click()
        cy.get(hotel.adult_room_2).should('have.text','2').then(() => {
            const adult_no=parseFloat(adult)

            if (adult_no < 2) {
                cy.get(hotel.adult_2_minus).click()
            }
            if (adult_no > 2) {
                for (let i = 0; i < adult_no - 2; i++) {
                    cy.get(hotel.adult_2_plus).click()
                }
                cy.get(hotel.adult_room_1).should('have.text',adult)
            }

        })
        cy.get(hotel.exit_room).click()
    }
    search(){
        cy.get(hotel.search).click()
    }
    filters(price) {
        cy.contains(price).click()
    }
    select_hotel(selected_hotels){
        cy.reload()
        cy.get(hotel.view_room).each(($element)=>{
            cy.wrap($element).should('be.enabled')
            cy.wrap($element).invoke('removeAttr', 'target').click({force: true})
            return false
        })
        cy.get(hotel.book_room).invoke('removeAttr', 'target').click()
    }
    guest1(fn,ln){
        cy.get(hotel.room1_fn).type(fn)
        cy.get(hotel.room1_ln).type(ln)
    }
    guest2(fn,ln){
        cy.get(hotel.room2_fn).type(fn)
        cy.get(hotel.room2_ln).type(ln)
    }
    details(em,pn){
        cy.get(hotel.email).type(em)
        cy.get(hotel.phoneno).type(pn)
    }
}
const pg1=new hotels();
export default pg1;
