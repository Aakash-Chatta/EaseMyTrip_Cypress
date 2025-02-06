function getMonthNumber(monthAbbrev) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months.indexOf(monthAbbrev)
}

class book_train_page {
    visit_url() {
        cy.visit('https://www.easemytrip.com/railways/')
        Cypress.on('uncaught:exception', () => {
            // returning false here prevents Cypress from
            // failing the test
            return false
        })
    }

    enter_from_city(city) {
        cy.get("[name='txtfrom']").click().type(city)
        cy.get(`[id="ui-id-1"]`).contains(city).click()
    }

    enter_to_city(city) {
        cy.get("[name='txtdest']").click().type(city)
        cy.get(`[id="ui-id-2"]`).contains(city).click()
    }

    enter_travel_date(date, month, year) {
        let cal_date = date - 1
        let actual_mon_year = month + " " + year;
        let abv_month = getMonthNumber(month)
        let current_month_year = ""
        cy.get("[name='txtDate']").click()

        function checkCalendar() {
            cy.get(".ui-datepicker-title").each(($element) => {
                const real_mon = $element.find(`.ui-datepicker-month`).text()
                const real_year = $element.find(`.ui-datepicker-year`).text()
                current_month_year = real_mon + " " + real_year
                if (current_month_year === actual_mon_year) {
                    cy.get(`[data-month='${abv_month}'][data-year='${year}']`).eq(cal_date).click()
                    return false
                }
            })
        }

        cy.get(`[title='Next']`).click()
        checkCalendar()
        cy.get(`[value="Search"]`).click()
    }

    select_train_and_class(train_number, class_type) {
        cy.get(`.trlist`).each(($element) => {
            const no = $element.find(`.bodydiv .tr-inner .tr-no`)
            if (no.text() === " " + train_number) {
                cy.get(`[id*='divTran_price${train_number}'] .seatavl div > [class*='1${train_number}GN']`).each(($element) => {
                    const class_text = $element.text()
                    if (class_text.includes(class_type) && class_text.includes("AVAILABLE-")) {
                        cy.wrap($element).find(`#TrainBookId`).click()
                        cy.get(`.btnsecx .btn_ct`).click()
                    }
                })
            }
        })
    }

    enter_userID(userID) {
        cy.get(`.ciform #IrctcUserText`).type(userID)
        cy.get(`#irctcpopup .irctcbtn`).click()
    }

    opt_in_for_cancellation() {
        cy.get(`.bodycnc> label .checkmark-radio`).eq(0).click()
    }

    contact_information(email,phone_number) {
        cy.get(`#secMobile #txtEmailID`).type(email)
        cy.get(`#secMobile #txtMobileNo`).type(phone_number)
    }

    traveller_information(name,age,berth,meal,gender){
        cy.get(`.str_1 .cmark_cbox`).click()
        cy.get(`select[name="ddlAdultGender"]`).select(gender)
        cy.get(`#txtAdultFirstName0`).type(name)
        cy.get(`#txtAge0`).type(age)
        cy.get(`#ddlAdultBirthPre0`).select(berth)
        cy.get(`#ddlFood0`).select(meal)
    }

    insurance(){
        cy.get(`.checkmark_trn.add2a.mrgtopnw`).click()
        cy.get(`.checkmark_trn.add2a`).eq(1).click()
        cy.get(`.checkmark_trn.add2a`).eq(3).click()
    }
}

const train = new book_train_page()
export default train