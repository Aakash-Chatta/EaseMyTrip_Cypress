import * as flight from "../elements/Flight_elements.json"

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
    }

const pg2=new flights();
export default pg2;