import * as flight from "../elements/Flight_elements.json"

    class flights{
        enterURL() {
            cy.visit(flight.url);
        }
    }

const pg2=new flights();
export default pg2;